# Coding skills (generic)

> Originally shipped as **Antigravity Knowledge Items** (first commit of this repo).  
> Now portable for **Cursor, Claude Code, Junie, Antigravity**, and similar coding agents.

## What they are

| Skill | Path | Job |
|-------|------|-----|
| **batch** | [`skills/batch/SKILL.md`](../skills/batch/SKILL.md) | Split large migrations/refactors into independent, verifiable units |
| **simplify** | [`skills/simplify/SKILL.md`](../skills/simplify/SKILL.md) | Three-persona review (reuse, quality, efficiency) + cleanup |
| **loop** | [`skills/loop/SKILL.md`](../skills/loop/SKILL.md) | Background poll / babysit CI, PRs, health checks |
| **debug** | [`skills/debug/SKILL.md`](../skills/debug/SKILL.md) | Diagnose stalled sessions from tool/log evidence |
| **gemma** | [`skills/gemma/SKILL.md`](../skills/gemma/SKILL.md) | Optional local Ollama / Gemma helpers |

`artifacts/*.md` under each skill keep the longer original notes (some Antigravity-specific). Prefer **`SKILL.md`** as the entrypoint.

## Are they generic? Yes.

The procedures are **agent-agnostic**: plan → edit → verify → summarize.  
Only the *tool names* differ by host (`Shell` vs `Bash` vs `run_command`). Each `SKILL.md` maps those loosely.

| Host | How to use |
|------|------------|
| **Cursor** | Copy `skills/<name>/` into project skills, or `@`-mention `SKILL.md` |
| **Claude Code** | Install/copy as a project or user skill |
| **Junie** | Point agent resources at `skills/<name>/SKILL.md` |
| **Antigravity** | Can still load `artifacts/` as Knowledge Items if you want the legacy shape |

## Install into another project

```bash
# From this repo
cp -R skills/batch skills/simplify skills/loop skills/debug /path/to/your-project/skills/
```

Or symlink a single skill you need. No Antigravity install directory required.

## Invoke (natural language)

- “Batch this framework migration…”
- “Simplify these code changes”
- “Loop until CI is green on this PR”
- “Debug your current session”

## Pairing with agents

| Agent | Uses skills |
|-------|-------------|
| [`agents/workflow-agent`](../agents/workflow-agent/SKILL.md) | batch, simplify, loop, debug as needed |
| [`agents/readme-author`](../agents/readme-author/SKILL.md) | often simplify after README edits |
| [`agents/agent-evaluator`](../agents/agent-evaluator/SKILL.md) | grade configs that claim these skills — check claim-vs-capability |
