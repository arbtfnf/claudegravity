# Agent Evaluator

Plug-and-play **evaluation archetype**: grade an agent config against the 10-dimension / 100-point rubric.

## Source

[We Had 20+ AI Agents and No Way to Know If They Were Any Good. So I Built One.](https://medium.com/@anrgbndhu/we-had-20-ai-agents-and-no-way-to-know-if-they-were-any-good-so-i-built-one-8f522ce07a37)  
Repo guide: [docs/agent-evaluation-framework.md](../../docs/agent-evaluation-framework.md)

## When to use

- Reviewing a new or existing agent config before shipping
- Comparing agents in a fleet on a shared definition of “good”
- Hunting **claim-vs-capability** gaps (prompt promises vs tools/hooks)

## Inputs

- Agent config (JSON / YAML / pasted prompt + tools list)
- Optional: declared archetype (`workflow`, `analyzer`, `domain-expert`, `oncall`)

## Outputs

- Score `/100` + letter grade
- Per-dimension breakdown (0–10)
- Top 3 concrete fixes
- Call-out if prompt claims exceed capabilities

## How to run

### A. Chat (this skill)

1. Paste the agent config (or point at a file).
2. Ask: “Grade this agent” or “Score against the 10 dimensions.”
3. Respond with the report format below. Prefer deterministic signals over vibes.

### B. Script (zero dependencies)

```bash
python3 agents/agent-evaluator/grade_agent.py path/to/agent.json
python3 agents/agent-evaluator/grade_agent.py path/to/agents/   # all *.json
```

### C. Checklist

Use [checklist.md](./checklist.md) for a fast human review.

## Report format

```text
AGENT EVALUATION: <name>
GRADE: <letter>  (<total>/100 points)
ARCHETYPE: <workflow|analyzer|domain-expert|oncall|unknown>

✅ Tools Definition:            ?/10
✅ Allowed Tools (Safety):      ?/10
✅ Resources & Context:         ?/10
✅ Hooks (Enforcement):         ?/10
✅ State Persistence:           ?/10
✅ Enforcement Language:        ?/10
✅ Commands & UX:               ?/10
✅ Safety & Guardrails:         ?/10
💰 Context Efficiency:          ?/10
🌀 Grounding:                   ?/10

CLAIM-VS-CAPABILITY:
- …

TOP 3 FIXES:
1. …
2. …
3. …

ARCHETYPE NOTE:
- …
```

## Scoring heuristics (chat + script align)

1. **Tools** — explicit list → high; catch-all / missing → low  
2. **Allowed tools** — whitelist present → high; unrestricted → 0  
3. **Resources** — count / presence of loaded context files  
4. **Hooks** — external scripts > inline bash; none → low  
5. **State** — context file / persistence language + write capability (N/A-friendly for analyzers)  
6. **Enforcement** — `MUST`/`NEVER`/`Critical Rules` density (don’t reward spam)  
7. **Commands** — documented user commands / welcome UX  
8. **Safety** — confirm-before-destructive; no secrets in prompt  
9. **Efficiency** — estimate prompt chars/tokens; penalize bloated prompts  
10. **Grounding** — verify-before-claim; read tools + resources for real data  

**Remember:** grade by archetype. A stateless evaluator should not be failed for lacking workflow state.

## Skills used

None required. Optional: `skills/simplify` after applying fixes to an agent under review.
