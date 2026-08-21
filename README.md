# ClaudeGravity

Plug-and-play AI agents and skills for Cursor, Claude Code, Junie, and Antigravity.

Agents and skills live here. App code lives elsewhere.

## What was ClaudeGravity originally?

Two layers got conflated under one name — both are first-class now:

| Origin | What it was | In this repo now |
|--------|-------------|------------------|
| **First commit** | Antigravity skills: `batch`, `simplify`, `loop`, `debug` (ported from Claude Code–style workflows) | Generic [`skills/`](skills/) — see [docs/coding-skills.md](docs/coding-skills.md) |
| **ClaudeGravity branding** | README skill: turn dense docs into high-conversion landing READMEs via **Hook → Prove → Enable → Extend** (README also linked an external Skill.Fish package) | Portable [`agents/readme-author/`](agents/readme-author/SKILL.md) — no Skill.Fish required |

**Yes — the Antigravity skills are generic.** The procedures work on any coding agent; only tool names differ by host. Copy `skills/<name>/` into another project and invoke in natural language.

## Articles

### 1. Building a 100/100 Workflow Agent From Scratch

**[Read on Medium](https://medium.com/@anrgbndhu/building-a-100-100-workflow-agent-from-scratch-bb2a0f6c95d6)** · Anurag Bandhu · Jul 28, 2026 · ~11 min

Agent that remembers where you left off across sessions. **Core idea:** no state file → failed workflow agent. Prefer hooks over prompt hopes.

- Doc: [`docs/100-100-workflow-agent-blueprint.md`](docs/100-100-workflow-agent-blueprint.md)
- Agent: [`agents/workflow-agent/SKILL.md`](agents/workflow-agent/SKILL.md)
- Install: `./install-workflow-blueprint.sh`

### 2. We Had 20+ AI Agents and No Way to Know If They Were Any Good. So I Built One.

**[Read on Medium](https://medium.com/@anrgbndhu/we-had-20-ai-agents-and-no-way-to-know-if-they-were-any-good-so-i-built-one-8f522ce07a37)** · Anurag Bandhu · Jul 2, 2026 · ~9 min

Grade agent configs like a Forward Deployed Engineer. **Core idea:** prompts are suggestions; hooks are guarantees. Close claim-vs-capability gaps.

**Ten dimensions (×10 → /100):** Tools · Allowed Tools · Resources · Hooks · State · Enforcement · Commands & UX · Safety · Context Efficiency · Grounding

- Doc: [`docs/agent-evaluation-framework.md`](docs/agent-evaluation-framework.md)
- Agent / checklist / script: [`agents/agent-evaluator/`](agents/agent-evaluator/)

### 3. Stop Paying AI to Rediscover Your Codebase

**[Read on Medium](https://medium.com/@anrgbndhu/stop-paying-ai-to-rediscover-your-codebase-d12e0451c1eb)** · Anurag Bandhu · Aug 21, 2026 · ~4 min

Graphify maps the code; Slack holds the conversation. Distill decisions into a SHA-keyed graph plus a short session pointer so agents retrieve instead of rediscovering. **Core idea:** do not rebuild a graph engine — stack a human-gated conversational layer on structure.

- Doc: [`docs/human-agent-teams-graphify.md`](docs/human-agent-teams-graphify.md)
- Now layer (already in this kit): [`agents/workflow-agent/SKILL.md`](agents/workflow-agent/SKILL.md) · `.workflow/context/current-work.md`

## Layout

| Path | Role |
|------|------|
| `agents/readme-author/` | Hook-Prove-Enable-Extend README skill (original ClaudeGravity pitch) |
| `agents/workflow-agent/` | Continuity / ticket lifecycle |
| `agents/agent-evaluator/` | Grade configs (10×10 rubric) |
| `skills/batch` `simplify` `loop` `debug` | Generic coding skills (Antigravity → portable) |
| `docs/` | Article + skills blueprints (workflow, evaluator, Graphify/Slack teams) |
| `.junie/` + `.workflow/` | Continuity layer |

## Quick start

```bash
# Continuity layer into any repo
./install-workflow-blueprint.sh

# Grade a sample agent config
python3 agents/agent-evaluator/grade_agent.py agents/agent-evaluator/fixtures/sample-task-tracker.json

# Copy coding skills into another project
cp -R skills/batch skills/simplify skills/loop skills/debug /path/to/project/skills/
```

Natural language invokes:

- “Rewrite this README with Hook-Prove-Enable-Extend”
- “Batch this migration…” / “Simplify these changes” / “Loop until CI is green”
- “Grade this agent config”

## Agent contract

Each agent under `agents/` should be self-contained, documented, and portable (no machine-only absolute symlinks as the primary delivery).

## Contributing

Changes to `main` go through a pull request. The repo has a branch ruleset, **[Protect default branch](https://github.com/arbtfnf/claudegravity/rules/21161954)** (force-push and deleting `main` blocked; PRs required). Enforcement starts **Disabled** so existing workflows keep working — turn it **Active** when you want GitHub to enforce the PR path.

Fork or branch → PR → merge. Do not push commits straight to `main` once the ruleset is Active.

## What you get

- **README author** — original ClaudeGravity landing-page skill, portable
- **Coding skills** — batch / simplify / loop / debug for any agent host
- **Workflow layer** — state file, hooks, lessons across sessions
- **Evaluation layer** — chat skill + Python grader + checklist
- **Human-agent teams** — Graphify as the code map, `current-work.md` as now, Slack/PRs distilled behind a human gate ([article 3](docs/human-agent-teams-graphify.md) · [Medium](https://medium.com/@anrgbndhu/stop-paying-ai-to-rediscover-your-codebase-d12e0451c1eb))
