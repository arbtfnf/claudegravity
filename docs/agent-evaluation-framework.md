# Agent Evaluation Framework (10 Dimensions / 100 Points)

> **Source article:** [We Had 20+ AI Agents and No Way to Know If They Were Any Good. So I Built One.](https://medium.com/@anrgbndhu/we-had-20-ai-agents-and-no-way-to-know-if-they-were-any-good-so-i-built-one) by Anurag Bandhu (Jul 2, 2026, ~9 min read)

Grade AI agent configs like a Forward Deployed Engineer: same rubric, three delivery formats, zero excuse not to measure.

---

## Core idea

**Prompts are suggestions. Hooks are guarantees.**

The most common fleet bug is not a bad prompt — it is a **claim-vs-capability gap**: the prompt promises something (`I save state`, `I check the latest data`) that tools/resources/hooks cannot actually do.

---

## Ten dimensions (0–10 each → /100)

| # | Dimension | What “good” looks like |
|---|-----------|------------------------|
| 1 | **Tools Definition** | Explicit tool list — not a catch-all that grants everything |
| 2 | **Allowed Tools (Safety)** | Whitelist of specific operations; never fully unrestricted |
| 3 | **Resources & Context** | Real knowledge loaded on startup — not blind every session |
| 4 | **Hooks (Enforcement)** | Scripts that run regardless of the LLM’s mood |
| 5 | **State Persistence** | Remembers across sessions when the archetype needs it |
| 6 | **Enforcement Language** | Strong rules (`MUST` / `NEVER`), not polite suggestions |
| 7 | **Commands & UX** | Discoverable commands; users shouldn’t guess |
| 8 | **Safety & Guardrails** | Confirm before destructive actions; protect credentials |
| 9 | **Context Efficiency** 💰 | Lean prompt — every char is a per-turn token tax |
| 10 | **Grounding** 🌀 | Verify-before-claim; anchored in real data, not memory |

Core scoring is **deterministic** (parse config + prompt signals). Same config → same grade. Judgment on **archetype** sits on top of the number (a stateless grader shouldn’t need persistence).

### Letter grades (from the article)

| Grade | Meaning |
|-------|---------|
| **F** | Just a prompt (no tools, resources, hooks, state) |
| **C** | Good prompt + some tools |
| **B** | + resources loaded |
| **A-** | + hooks + state persistence |
| **A** | + enforcement language + safety + commands |
| **A+** | + **mechanisms** that work even if the LLM drifts |

---

## Three ways to grade (plug-and-play)

| Format | Path | When |
|--------|------|------|
| **Chat agent** | [`agents/agent-evaluator/SKILL.md`](../agents/agent-evaluator/SKILL.md) | Paste a config; get a graded report in conversation |
| **Python script** | [`agents/agent-evaluator/grade_agent.py`](../agents/agent-evaluator/grade_agent.py) | Zero deps; score one agent or a folder of configs |
| **Checklist** | [`agents/agent-evaluator/checklist.md`](../agents/agent-evaluator/checklist.md) | Pen-and-paper / PR review gut check |

```bash
# Score a JSON agent config
python3 agents/agent-evaluator/grade_agent.py path/to/agent.json

# Score every *.json in a directory
python3 agents/agent-evaluator/grade_agent.py path/to/agents/
```

---

## Claim-vs-capability check (30-second start)

Open the agent config and ask:

> If the prompt promises X, do the tools actually allow X?

Examples of lies the framework catches:

- “I persist context to a file” but no write tool / not in `allowedTools`
- “I run the tests” but no shell tool
- “I check the latest data” but no API / fetch access

---

## Archetype awareness

Mechanical scores are a **starting point**, not the verdict.

| Archetype | Needs state + hooks? | Notes |
|-----------|----------------------|-------|
| Workflow / task tracker | Yes | Grade hard on persistence + spawn hooks |
| Stateless analyzer / grader | No | Don’t penalize missing state the job doesn’t need |
| Domain expert | Resources + grounding | Tools for read access to real data |
| On-call / incident | Hooks + safety | Confirm before destructive actions |

The evaluator agent itself scored poorly on state/hooks under a naive rubric — that “failure” taught the framework to judge by archetype.

---

## What to do with a low score

Typical top fixes (from fleet tuning in the article):

1. Add an `allowedTools` whitelist (safety)
2. Add verify-before-claim / grounding rules (reliability)
3. Strengthen a real **Critical Rules** section — don’t keyword-stuff `NON-NEGOTIABLE` to game the metric
4. Prefer external hook scripts over fragile inline `bash -c`
5. Load resources; give read tools so answers aren’t from model memory alone

Honest reporting beats fake A+: *“61 → 72, here’s the remaining gap”* is stronger than *“everything’s an A+.”*

---

## Related

| File | Role |
|------|------|
| [agents/agent-evaluator/](../agents/agent-evaluator/) | Chat skill + script + checklist |
| [docs/100-100-workflow-agent-blueprint.md](100-100-workflow-agent-blueprint.md) | Continuity archetype (pairs with high scores on state/hooks/grounding) |
| [agents/workflow-agent/SKILL.md](../agents/workflow-agent/SKILL.md) | Reference workflow agent to grade |

---

## Self-audit before you ship an agent

- [ ] Tools are an explicit list
- [ ] `allowedTools` is a whitelist (no unscoped write/merge)
- [ ] Prompt claims match tool capabilities
- [ ] Resources load real context when needed
- [ ] Hooks enforce what prompts only request
- [ ] Critical rules use MUST/NEVER on irreversible actions
- [ ] Verify-before-claim for external state
- [ ] Prompt is lean (watch the token tax)
- [ ] Graded against the right archetype
- [ ] Score recorded — evidence, not vibes
