#!/usr/bin/env python3
"""Deterministic agent config grader — 10 dimensions / 100 points.

Zero third-party dependencies. See docs/agent-evaluation-framework.md
and https://medium.com/@anrgbndhu/we-had-20-ai-agents-and-no-way-to-know-if-they-were-any-good-so-i-built-one-8f522ce07a37
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any


DIMENSIONS = [
    "tools",
    "allowed_tools",
    "resources",
    "hooks",
    "state",
    "enforcement",
    "commands",
    "safety",
    "efficiency",
    "grounding",
]

LABELS = {
    "tools": "Tools Definition",
    "allowed_tools": "Allowed Tools (Safety)",
    "resources": "Resources & Context",
    "hooks": "Hooks (Enforcement)",
    "state": "State Persistence",
    "enforcement": "Enforcement Language",
    "commands": "Commands & UX",
    "safety": "Safety & Guardrails",
    "efficiency": "Context Efficiency",
    "grounding": "Grounding",
}


def load_config(path: Path) -> dict[str, Any]:
    text = path.read_text(encoding="utf-8")
    if path.suffix.lower() in {".yaml", ".yml"}:
        # Minimal YAML-ish: not a full parser — prefer JSON for accurate scores.
        raise SystemExit(
            f"{path}: YAML scoring needs JSON. Convert to .json or paste into the chat evaluator."
        )
    data = json.loads(text)
    if not isinstance(data, dict):
        raise SystemExit(f"{path}: expected a JSON object")
    return data


def as_list(value: Any) -> list[Any]:
    if value is None:
        return []
    if isinstance(value, list):
        return value
    if isinstance(value, str):
        return [value]
    return []


def prompt_text(cfg: dict[str, Any]) -> str:
    parts = [
        str(cfg.get("prompt") or ""),
        str(cfg.get("systemPrompt") or ""),
        str(cfg.get("instructions") or ""),
        str(cfg.get("welcomeMessage") or ""),
    ]
    for key in ("resources",):
        for item in as_list(cfg.get(key)):
            if isinstance(item, str):
                parts.append(item)
            elif isinstance(item, dict):
                parts.append(json.dumps(item))
    return "\n".join(parts)


def score_tools(cfg: dict[str, Any]) -> tuple[int, str]:
    tools = cfg.get("tools")
    if tools is None:
        return 0, "No tools field"
    if tools in ("*", "all", "ALL"):
        return 2, "Catch-all tools grant — prefer an explicit list"
    if isinstance(tools, list):
        if not tools:
            return 1, "Empty tools list"
        if any(t in ("*", "all", "ALL") for t in tools):
            return 3, "List contains catch-all entry"
        return 10, f"Explicit tools list ({len(tools)})"
    return 4, "tools present but not a list"


def score_allowed(cfg: dict[str, Any]) -> tuple[int, str]:
    allowed = cfg.get("allowedTools") or cfg.get("allowed_tools")
    if allowed is None:
        return 0, "No allowedTools — completely unrestricted"
    if allowed in ("*", "all", "ALL"):
        return 0, "allowedTools is a catch-all"
    if isinstance(allowed, list):
        if not allowed:
            return 2, "Empty allowedTools"
        joined = " ".join(str(x) for x in allowed)
        # Penalize unscoped github/jira style grants
        if re.search(r"@github(?!/)", joined) or "@jira\"" in joined:
            if not re.search(r"@github/", joined):
                return 3, "Unscoped @github-style grant — enumerate read-only methods"
        return 10, f"Whitelist present ({len(allowed)} entries)"
    return 4, "allowedTools present but not a list"


def score_resources(cfg: dict[str, Any]) -> tuple[int, str]:
    resources = as_list(cfg.get("resources"))
    n = len(resources)
    if n == 0:
        return 2, "No resources — starts every session relatively blind"
    if n == 1:
        return 6, "One resource loaded"
    if n < 4:
        return 8, f"{n} resources loaded"
    return 10, f"{n} resources loaded"


def score_hooks(cfg: dict[str, Any]) -> tuple[int, str]:
    hooks = cfg.get("hooks") or {}
    if not hooks:
        return 1, "No hooks — enforcement is prompt-only"
    if isinstance(hooks, dict) and not hooks:
        return 1, "Empty hooks object"
    blob = json.dumps(hooks)
    inline = "bash -c" in blob or "bash -lc" in blob
    if inline and ("spawn" in blob.lower() or "submit" in blob.lower() or len(hooks) > 0):
        return 6, "Hooks present but include fragile inline bash -c"
    if isinstance(hooks, dict) and hooks:
        return 10, f"Hooks configured ({len(hooks)} trigger(s))"
    return 5, "Hooks field present"


def score_state(cfg: dict[str, Any], prompt: str) -> tuple[int, str]:
    p = prompt.lower()
    mentions = any(
        k in p
        for k in (
            "current-work",
            "state file",
            "persist",
            "context file",
            "workflow/context",
            ".kiro/context",
        )
    )
    tools = [str(t).lower() for t in as_list(cfg.get("tools"))]
    allowed = [str(t).lower() for t in as_list(cfg.get("allowedTools") or cfg.get("allowed_tools"))]
    can_write = any("write" in t or "fs_write" in t or "edit" in t for t in tools + allowed)
    if mentions and can_write:
        return 10, "State persistence claimed and write capability present"
    if mentions and not can_write:
        return 2, "CLAIM-VS-CAPABILITY: prompt claims persistence but no write tool"
    if can_write:
        return 5, "Write capability present; no explicit state-file discipline"
    return 3, "No state persistence signals (OK for pure analyzers)"


def score_enforcement(prompt: str) -> tuple[int, str]:
    must = len(re.findall(r"\bMUST\b", prompt))
    never = len(re.findall(r"\bNEVER\b", prompt))
    critical = 1 if re.search(r"critical rules", prompt, re.I) else 0
    total = must + never
    if total == 0 and not critical:
        return 2, "No MUST/NEVER / Critical Rules section"
    if total >= 8 and critical:
        # Light penalty for possible keyword stuffing
        if total > 40:
            return 6, f"Strong language but very dense ({total} MUST/NEVER) — avoid gaming"
        return 10, f"Critical Rules + {total} MUST/NEVER markers"
    if critical or total >= 4:
        return 7, f"Some enforcement language ({total} MUST/NEVER)"
    return 4, f"Weak enforcement language ({total} MUST/NEVER)"


def score_commands(cfg: dict[str, Any], prompt: str) -> tuple[int, str]:
    welcome = bool(cfg.get("welcomeMessage") or cfg.get("welcome_message"))
    cmds = bool(re.search(r"commands? (the )?user|you can say|/status|keyboardShortcut", prompt, re.I))
    shortcut = bool(cfg.get("keyboardShortcut") or cfg.get("keyboard_shortcut"))
    score = 2
    notes = []
    if welcome:
        score += 3
        notes.append("welcome message")
    if cmds:
        score += 4
        notes.append("documented commands")
    if shortcut:
        score += 1
        notes.append("shortcut")
    return min(score, 10), (", ".join(notes) if notes else "No discoverable UX signals")


def score_safety(cfg: dict[str, Any], prompt: str) -> tuple[int, str]:
    p = prompt.lower()
    confirm = any(k in p for k in ("confirm before", "ask before", "human approval", "destructive"))
    secrets = any(k in p for k in ("api_key", "apikey", "password=", "secret="))
    score = 4
    notes = []
    if confirm:
        score += 4
        notes.append("confirm-before-destructive language")
    allowed = cfg.get("allowedTools") or cfg.get("allowed_tools")
    if isinstance(allowed, list) and allowed:
        score += 2
        notes.append("allowedTools whitelist")
    if secrets:
        score = min(score, 3)
        notes.append("possible secrets in prompt — remove")
    return min(score, 10), (", ".join(notes) if notes else "Limited safety signals")


def score_efficiency(prompt: str) -> tuple[int, str]:
    chars = len(prompt)
    # rough token estimate
    tokens = max(1, chars // 4)
    if chars == 0:
        return 5, "Empty prompt"
    if chars < 8_000:
        return 10, f"~{chars} chars (~{tokens} tokens) — lean"
    if chars < 12_000:
        return 8, f"~{chars} chars (~{tokens} tokens) — acceptable"
    if chars < 16_000:
        return 5, f"~{chars} chars (~{tokens} tokens) — over 12K target; extract skills"
    return 2, f"~{chars} chars (~{tokens} tokens) — heavy token tax every turn"


def score_grounding(cfg: dict[str, Any], prompt: str) -> tuple[int, str]:
    p = prompt.lower()
    verify = any(
        k in p
        for k in (
            "verify before",
            "never claim",
            "gh pr view",
            "do not trust memory",
            "without running",
            "hallucinat",
        )
    )
    resources = bool(as_list(cfg.get("resources")))
    tools = [str(t).lower() for t in as_list(cfg.get("tools"))]
    can_read = any(
        x in t for t in tools for x in ("read", "fetch", "grep", "glob", "github", "jira")
    )
    score = 1
    notes = []
    if verify:
        score += 5
        notes.append("verify-before-claim rules")
    if resources:
        score += 2
        notes.append("resources")
    if can_read:
        score += 2
        notes.append("read/fetch tools")
    if score <= 3:
        return score, "No grounding / verify-before-claim rules"
    return min(score, 10), ", ".join(notes)


def letter_grade(total: int) -> str:
    if total >= 93:
        return "A+"
    if total >= 87:
        return "A"
    if total >= 80:
        return "A-"
    if total >= 70:
        return "B"
    if total >= 60:
        return "C+"
    if total >= 50:
        return "C"
    if total >= 40:
        return "D+"
    if total >= 30:
        return "D"
    return "F"


def evaluate(cfg: dict[str, Any], name: str) -> dict[str, Any]:
    prompt = prompt_text(cfg)
    scores: dict[str, tuple[int, str]] = {
        "tools": score_tools(cfg),
        "allowed_tools": score_allowed(cfg),
        "resources": score_resources(cfg),
        "hooks": score_hooks(cfg),
        "state": score_state(cfg, prompt),
        "enforcement": score_enforcement(prompt),
        "commands": score_commands(cfg, prompt),
        "safety": score_safety(cfg, prompt),
        "efficiency": score_efficiency(prompt),
        "grounding": score_grounding(cfg, prompt),
    }
    total = sum(v[0] for v in scores.values())
    fixes = []
    for key, (val, note) in scores.items():
        if val <= 4:
            fixes.append(f"{LABELS[key]}: {note}")
    return {
        "name": name,
        "total": total,
        "grade": letter_grade(total),
        "scores": scores,
        "fixes": fixes[:3],
    }


def format_report(result: dict[str, Any]) -> str:
    lines = [
        f"AGENT EVALUATION: {result['name']}",
        f"GRADE: {result['grade']}  ({result['total']}/100 points)",
        "",
    ]
    for key in DIMENSIONS:
        val, note = result["scores"][key]
        bar = "█" * val + "░" * (10 - val)
        prefix = "💰" if key == "efficiency" else "🌀" if key == "grounding" else "✅" if val >= 7 else "🟡" if val >= 4 else "🔴"
        lines.append(f"{prefix} {LABELS[key]}: {val}/10  [{bar}]")
        if val < 7:
            lines.append(f"   → {note}")
    lines.append("")
    lines.append("TOP 3 FIXES:")
    if result["fixes"]:
        for i, fix in enumerate(result["fixes"], 1):
            lines.append(f"{i}. {fix}")
    else:
        lines.append("1. No critical gaps detected by deterministic rules — still review by archetype.")
    lines.append("")
    lines.append("Note: Mechanical score is a starting point. Judge by archetype (workflow vs analyzer).")
    return "\n".join(lines)


def iter_targets(path: Path) -> list[Path]:
    if path.is_file():
        return [path]
    return sorted(path.glob("*.json"))


def main() -> int:
    parser = argparse.ArgumentParser(description="Grade AI agent configs (10×10 = 100).")
    parser.add_argument("path", type=Path, help="Agent JSON file or directory of *.json")
    args = parser.parse_args()
    targets = iter_targets(args.path)
    if not targets:
        print(f"No JSON configs found at {args.path}", file=sys.stderr)
        return 1
    for target in targets:
        cfg = load_config(target)
        name = str(cfg.get("name") or target.stem)
        print(format_report(evaluate(cfg, name)))
        if len(targets) > 1:
            print("\n" + ("-" * 60) + "\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
