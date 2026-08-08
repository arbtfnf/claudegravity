# ClaudeGravity

Plug-and-play AI agents for Cursor, Claude Code, and Junie.

This repo is the home for drop-in agents and skills you can install into any project. App code and experiments live elsewhere — agents live here.

## Status

Scaffold is ready. Agents are coming next.

| Path | Role |
|------|------|
| `agents/` | Plug-and-play agents (add here) |
| `skills/` | Reusable agent skills |
| `.junie/` + `.workflow/` | Continuity blueprint: context, phases, lessons, hooks |

## Quick start

1. Run `./install-workflow-blueprint.sh` if hooks/context dirs need init.
2. Follow `.junie/AGENTS.md`.
3. Track active work in `.workflow/context/current-work.md`.
4. Drop a new agent under `agents/<name>/` with a clear `SKILL.md` or agent entrypoint.

## Agent contract (target)

Each agent under `agents/` should be:

- **Self-contained** — installable without the rest of this monorepo’s history
- **Documented** — purpose, inputs/outputs, and how to invoke it
- **Portable** — no machine-local absolute symlinks as the primary delivery

## Workflow blueprint

The included 100/100 workflow layer keeps agents honest across sessions:

1. Remembers where you left off (compressed context file)
2. Verifies external state before claiming progress
3. Writes lessons after each completed task
