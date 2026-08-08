# 100/100 Workflow Agent Blueprint

> **Source article:** [Building a 100/100 Workflow Agent From Scratch](https://medium.com/@anrgbndhu/building-a-100-100-workflow-agent-from-scratch-bb2a0f6c95d6) by Anurag Bandhu (Jul 2026, ~11 min read)  
> **Tags:** AI Agent · Kiro · Claude Code · Software Development

This repo ships a **portable implementation** of that blueprint. Use it in ClaudeGravity itself, or drop it into any project.

---

## What this archetype is (and isn't)

A **workflow agent** carries a single unit of work across sessions. It is **not** a domain expert stuffed with API trivia.

| Workflow agent | Domain expert agent |
|----------------|---------------------|
| Remembers ticket, phase, PRs, blockers | Knows your services and schemas deeply |
| Verifies state via APIs | Answers from embedded knowledge |
| Delegates depth to specialists | Absorbs depth into one prompt |

**Lifecycle:** Pick Up → Track → Monitor → Archive → Retrospective

**Core invariant:** A workflow agent with no state file is a failed workflow agent.

---

## Plug-and-play: install in any repo

From the root of a target project:

```bash
curl -fsSL https://raw.githubusercontent.com/arbtfnf/claudegravity/main/install-workflow-blueprint.sh | bash
# or, if you have this repo cloned:
/path/to/claudegravity/install-workflow-blueprint.sh
```

That creates:

| Path | Purpose |
|------|---------|
| `.workflow/context/current-work.md` | Active task (symlink to ticket file) |
| `.workflow/context/<TASK-ID>.md` | Per-ticket state |
| `.workflow/archive/` | Completed tickets (never delete) |
| `.workflow/lessons/planning-lessons.md` | Lessons read at pickup, appended at retrospective |
| `.junie/AGENTS.md` | Rules: phases, 80-line cap, verify-before-claim |
| `.junie/hooks/spawn_check.sh` | Line count, phase, staleness on spawn |
| `.junie/hooks/retrospective.sh` | Archive + lesson prompt on completion |

**Start a ticket:**

```bash
TASK_ID="MYPROJ-42"
cp .workflow/context/TASK-INITIAL-SETUP.md ".workflow/context/${TASK_ID}.md"
ln -sf "${TASK_ID}.md" .workflow/context/current-work.md
```

Edit the ticket file: set `## Phase:`, `## Task:`, `## Status: Active`, and `## Last Updated:`.

---

## Article → this repo (path mapping)

The Medium article uses **Kiro** paths. ClaudeGravity uses the same shape under different names:

| Article (Kiro) | ClaudeGravity |
|----------------|---------------|
| `.kiro/context/FDE-12782.md` | `.workflow/context/<TASK-ID>.md` |
| `.kiro/context/current-work.md` | `.workflow/context/current-work.md` |
| Archive directory | `.workflow/archive/` |
| `planning-lessons.md` | `.workflow/lessons/planning-lessons.md` |
| Spawn / submit hooks | `.junie/hooks/spawn_check.sh`, `retrospective.sh` |
| `~/.kiro/skills/...` | `skills/` (batch, debug, loop, simplify) |
| Agent config JSON | `agents/workflow-agent/SKILL.md` + your IDE agent config |

---

## The 12 steps (condensed + repo hooks)

### 1. Define the archetype
Workflow agent = continuity + verification + delegation. State = context file + archive.

### 2. Skeleton first
Pin your model in agent config. See `agents/workflow-agent/SKILL.md` for the target shape.

### 3–4. Tools: broad access, narrow writes
Read/write code and shell; **tracker and GitHub scoped to read-only** (`gh pr view`, `jira get` — never unscoped merge/write).

### 5. Delegate, don't absorb
Use `skills/` and subagents for depth. Keep the workflow prompt under ~12K chars; extract procedures to skill files.

### 6. State file is the design
- Ticket-named file + stable `current-work.md` symlink  
- **80-line hard cap** (compress at 60+)  
- Overflow: `<TASK-ID>-investigation.md`, `<TASK-ID>-deploy-log.md` (uncapped)  
- Machine-readable `## Phase:` field  
- Staleness: re-verify if `## Last Updated:` is > 3 days (`spawn_check.sh` warns)

**Context file template:**

```markdown
## Phase: Developer
## Task: Short title
## Status: Active
## Created: YYYY-MM-DD
## Last Updated: YYYY-MM-DD

### PRs
- #123 (open) — description

### Blockers
- None

### Decisions
- Chose X over Y because …

### Next
- [ ] Concrete next step
```

### 7. Prompt structure
Persona by phase → How you work (Pick up / Track / Monitor / Archive / Retrospective) → Context hygiene → Critical rules. Reference skills by path, don't inline long procedures.

### 8. Critical rules (MUST/NEVER)
- Persist context after every significant action  
- Never claim PR merged/approved without `gh pr view`  
- Never claim ticket closed without tracker check  
- One task at a time (except explicitly coupled tickets)  
- Post-write: `wc -l` on context file; compress in the same response if over 80  

### 9. Close the learning loop
On archive: run `.junie/hooks/retrospective.sh` → append 1–2 lessons to `planning-lessons.md`.  
On pickup: **read** `planning-lessons.md` before planning.

### 10. Hooks
- Prefer **external scripts** over inline `bash -c`  
- Use **absolute paths** in hook commands and inside scripts when deploying to IDEs  
- Guard empty variables; prune `find` (exclude `.git`, `node_modules`, `target`)

### 11. Validate in two passes
1. Agent config accepted by your CLI (no silent fallback to default agent)  
2. Hooks fire from **outside** the repo (`cd /tmp && …`) — catches relative-path bugs  

### 12. Test the full lifecycle
Spawn → pickup (file + symlink) → status hook → compress past 80 lines → `done` / archive → lessons appended → restart from `/tmp` with staleness check.

---

## Self-audit checklist

Copy from the article; tick before calling an agent "production-ready":

- [ ] Model pinned deliberately  
- [ ] Tracker and PR tools read-only  
- [ ] Ticket file + stable `current-work.md` symlink  
- [ ] 80-line cap enforced in prompt **and** spawn hook  
- [ ] Overflow files for investigation/deploy detail  
- [ ] Archive directory; never delete archives  
- [ ] Machine-readable `## Phase:` read by spawn hook  
- [ ] Staleness detection (> 3 days)  
- [ ] Retrospective → lessons → read back at pickup  
- [ ] 12+ critical rules; MUST/NEVER on irreversible actions  
- [ ] Verify-before-claim for PRs and tickets  
- [ ] Prompt < 12K; procedures in `skills/`  
- [ ] Hook paths absolute; no fragile inline `bash -c`  
- [ ] Config validated; hooks tested from non-repo cwd  

---

## Framework adapters

| Concern | Kiro | ClaudeGravity / Junie | Cursor / Claude Code |
|---------|------|------------------------|----------------------|
| State file | `.kiro/context/` | `.workflow/context/` | Same — copy blueprint |
| Rules | Agent prompt + hooks | `.junie/AGENTS.md` | `.cursor/rules` or `CLAUDE.md` |
| Spawn check | Kiro submit hook | `.junie/hooks/spawn_check.sh` | Cursor hooks (`hooks.json`) |
| Skills | `~/.kiro/skills/` | `skills/` | `.cursor/skills/` or repo `skills/` |

The **shape** is always the same; only paths and hook wiring change.

---

## Related files in this repo

| File | Role |
|------|------|
| [agents/workflow-agent/SKILL.md](../agents/workflow-agent/SKILL.md) | Agent entrypoint — when to use, how to run |
| [install-workflow-blueprint.sh](../install-workflow-blueprint.sh) | One-shot installer for other repos |
| [.junie/AGENTS.md](../.junie/AGENTS.md) | Operational rules for agents in this repo |
| [skills/](../skills/) | Extracted procedures (batch, simplify, loop, debug) |

---

## Honest gaps (from the article)

The reference Kiro agent in the article doesn't clear every bar yet — neither should you pretend yours does:

- Prompt may exceed the 12K *target* (15K fleet ceiling)  
- Some submit hooks may still be inline `bash -c`  
- `fs_write` is unrestricted for code-editing agents — safety relies on verify-before-claim rules  

Name the gaps; fix them incrementally.
