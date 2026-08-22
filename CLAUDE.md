# ClaudeGravity — CLAUDE.md

Plug-and-play AI agent kit for Cursor, Claude Code, Junie, and Antigravity.

## Layout
- `agents/readme-author/` — original ClaudeGravity README skill (Hook-Prove-Enable-Extend)
- `agents/workflow-agent/` — 100/100 workflow / continuity agent
- `agents/agent-evaluator/` — 10-dimension / 100-point grader
- `skills/batch|simplify|loop|debug/` — generic coding skills (use `SKILL.md`)
- `docs/coding-skills.md` — how skills work across hosts
- `docs/100-100-workflow-agent-blueprint.md` — continuity blueprint + article
- `docs/implement-or-thought-process.md` — ask before code: implement now vs show why
- `docs/agent-evaluation-framework.md` — evaluation framework + article
- `docs/human-agent-teams-graphify.md` — Graphify + Slack human-agent teams article
- `.junie/AGENTS.md` — workflow rules
- `.workflow/context/current-work.md` — active task state
- `.workflow/lessons/planning-lessons.md` — read before new tasks

## Workflow
1. Read planning lessons before starting work.
2. After a work prompt, **ask** before code: **Implement now** or **Show thought process**. See `docs/implement-or-thought-process.md`.
3. Keep `current-work.md` under 80 lines; compress when past 60.
4. Verify PRs/tickets with tools — never claim from memory.
5. On task done, run `.junie/hooks/retrospective.sh` and append 1–2 lessons.

## Adding an agent
Create `agents/<name>/` with at least:
- `SKILL.md` — purpose, when to use, how to run
- Portable scripts/prompts (no absolute local symlinks as primary delivery)
