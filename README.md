# ClaudeGravity

Plug-and-play AI agents for Cursor, Claude Code, and Junie.

This repo is the home for drop-in agents and skills you can install into any project. App code and experiments live elsewhere — agents live here.

## Status

Scaffold is ready. Agents are coming next.

| Path | Role |
|------|------|
| `agents/workflow-agent/` | Continuity / ticket lifecycle agent |
| `agents/agent-evaluator/` | Grade any agent config (10×10 rubric) |
| `skills/` | Reusable agent skills |
| `docs/` | Article-backed blueprints |
| `.junie/` + `.workflow/` | Continuity layer: context, phases, lessons, hooks |

## Quick start

1. **Build continuity:** [docs/100-100-workflow-agent-blueprint.md](docs/100-100-workflow-agent-blueprint.md) · [Medium](https://medium.com/@anrgbndhu/building-a-100-100-workflow-agent-from-scratch-bb2a0f6c95d6)
2. **Measure quality:** [docs/agent-evaluation-framework.md](docs/agent-evaluation-framework.md) · [Medium](https://medium.com/@anrgbndhu/we-had-20-ai-agents-and-no-way-to-know-if-they-were-any-good-so-i-built-one-8f522ce07a37)
3. Install the workflow layer: `./install-workflow-blueprint.sh`
4. Grade a config: `python3 agents/agent-evaluator/grade_agent.py agents/agent-evaluator/fixtures/sample-task-tracker.json`

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
