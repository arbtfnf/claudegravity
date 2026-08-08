# ClaudeGravity

Plug-and-play AI agents for Cursor, Claude Code, and Junie.

This repo is the home for drop-in agents and skills you can install into any project. App code and experiments live elsewhere — agents live here.

## Articles

Blueprints in this repo are backed by published write-ups:

### 1. Building a 100/100 Workflow Agent From Scratch

**[Read on Medium](https://medium.com/@anrgbndhu/building-a-100-100-workflow-agent-from-scratch-bb2a0f6c95d6)** · Anurag Bandhu · Jul 28, 2026 · ~11 min

A practical blueprint for an agent that remembers where you left off across sessions, weeks, and context resets.

**Core idea:** A workflow agent with no state file is a failed workflow agent. Prefer mechanisms (hooks) over prompt hopes.

**In this repo:**
- Doc: [`docs/100-100-workflow-agent-blueprint.md`](docs/100-100-workflow-agent-blueprint.md)
- Agent: [`agents/workflow-agent/SKILL.md`](agents/workflow-agent/SKILL.md)
- Install: `./install-workflow-blueprint.sh`

### 2. We Had 20+ AI Agents and No Way to Know If They Were Any Good. So I Built One.

**[Read on Medium](https://medium.com/@anrgbndhu/we-had-20-ai-agents-and-no-way-to-know-if-they-were-any-good-so-i-built-one-8f522ce07a37)** · Anurag Bandhu · Jul 2, 2026 · ~9 min

How to grade a fleet of AI agents like a Forward Deployed Engineer — and what the scores teach about agents that actually work.

**Core idea:** Prompts are suggestions. Hooks are guarantees. Close the claim-vs-capability gap (prompt promises vs tools/wiring).

**Ten dimensions (0–10 each → /100):** Tools · Allowed Tools · Resources · Hooks · State · Enforcement Language · Commands & UX · Safety · Context Efficiency · Grounding

**In this repo:**
- Doc: [`docs/agent-evaluation-framework.md`](docs/agent-evaluation-framework.md)
- Agent: [`agents/agent-evaluator/SKILL.md`](agents/agent-evaluator/SKILL.md)
- Checklist: [`agents/agent-evaluator/checklist.md`](agents/agent-evaluator/checklist.md)
- Script: `python3 agents/agent-evaluator/grade_agent.py <config.json>`

## Layout

| Path | Role |
|------|------|
| `agents/workflow-agent/` | Continuity / ticket lifecycle agent |
| `agents/agent-evaluator/` | Grade any agent config (10×10 rubric) |
| `skills/` | Reusable agent skills |
| `docs/` | Article-backed blueprints |
| `.junie/` + `.workflow/` | Continuity layer: context, phases, lessons, hooks |

## Quick start

1. Read the articles (links above) or the local docs under `docs/`
2. Install the workflow layer into a project: `./install-workflow-blueprint.sh`
3. Track work in `.workflow/context/current-work.md` (see `.junie/AGENTS.md`)
4. Grade an agent config:

```bash
python3 agents/agent-evaluator/grade_agent.py agents/agent-evaluator/fixtures/sample-task-tracker.json
```

## Agent contract

Each agent under `agents/` should be:

- **Self-contained** — installable without the rest of this monorepo’s history
- **Documented** — purpose, inputs/outputs, and how to invoke it
- **Portable** — no machine-local absolute symlinks as the primary delivery

## What you get

**Workflow layer** — remembers where you left off, verifies PR/ticket state before claiming progress, and writes planning lessons after each completed task.

**Evaluation layer** — same rubric in three formats (chat skill, Python script, 15-point checklist) so you measure configs instead of relying on vibes.
