# ClaudeGravity

Plug-and-play AI agents for Cursor, Claude Code, and Junie.

This repo is the home for drop-in agents and skills you can install into any project. App code and experiments live elsewhere — agents live here.

## Status

Scaffold is ready. Agents are coming next.

| Path | Role |
|------|------|
| `agents/` | Plug-and-play agents (start with `agents/workflow-agent/`) |
| `skills/` | Reusable agent skills |
| `docs/` | Blueprint docs — [100/100 Workflow Agent](docs/100-100-workflow-agent-blueprint.md) |
| `.junie/` + `.workflow/` | Continuity blueprint: context, phases, lessons, hooks |

## Quick start

1. Read the blueprint: [docs/100-100-workflow-agent-blueprint.md](docs/100-100-workflow-agent-blueprint.md) ([Medium article](https://medium.com/@anrgbndhu/building-a-100-100-workflow-agent-from-scratch-bb2a0f6c95d6))
2. Run `./install-workflow-blueprint.sh` to drop the workflow layer into any repo
3. Use `agents/workflow-agent/SKILL.md` as the plug-and-play agent entrypoint
4. Follow `.junie/AGENTS.md` and track work in `.workflow/context/current-work.md`

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
