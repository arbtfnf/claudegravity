# ClaudeGravity — CLAUDE.md

Plug-and-play AI agent kit. App projects are out of scope here — only agents, skills, and the continuity workflow.

## Layout
- `agents/workflow-agent/` — 100/100 workflow agent (see `SKILL.md`)
- `agents/` — other drop-in agents
- `docs/100-100-workflow-agent-blueprint.md` — full blueprint + article link
- `skills/` — reusable skills invoked by agents
- `.junie/AGENTS.md` — workflow rules (phases, line limits, retrospectives)
- `.workflow/context/current-work.md` — active task state
- `.workflow/lessons/planning-lessons.md` — read before new tasks

## Workflow
1. Read planning lessons before starting work.
2. Keep `current-work.md` under 80 lines; compress when past 60.
3. Verify PRs/tickets with tools — never claim from memory.
4. On task done, run `.junie/hooks/retrospective.sh` and append 1–2 lessons.

## Adding an agent
Create `agents/<name>/` with at least:
- `SKILL.md` (or equivalent entrypoint) — purpose, when to use, how to run
- Any scripts/prompts the agent needs, kept portable (no absolute local symlinks)
