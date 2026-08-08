# Workflow Agent (100/100 Blueprint)

Plug-and-play **workflow archetype** agent: carries one ticket from pickup through archive, with state on disk—not in chat memory.

## Source

Full design write-up: [Building a 100/100 Workflow Agent From Scratch](https://medium.com/@anrgbndhu/building-a-100-100-workflow-agent-from-scratch-bb2a0f6c95d6)  
Repo implementation guide: [docs/100-100-workflow-agent-blueprint.md](../../docs/100-100-workflow-agent-blueprint.md)

## When to use

- You need an agent that **remembers where you left off** across sessions or context resets
- Work is ticket-shaped: implement → review → merge → done
- You want verify-before-claim for PRs and tracker state (not hallucinated status)

**Do not use** when the job is pure domain Q&A with no ongoing unit of work.

## Inputs

- Active ticket ID (e.g. `MYPROJ-42`)
- Target repo with workflow blueprint installed (see below)
- Optional: linked PR numbers, Jira/Linear ticket key

## Outputs

- Updated `.workflow/context/<TASK-ID>.md` (≤ 80 lines)
- Overflow files as needed (`<TASK-ID>-investigation.md`, etc.)
- Archived ticket in `.workflow/archive/` when complete
- New rows in `.workflow/lessons/planning-lessons.md`

## How to run

### A. Install blueprint into a project (one time)

```bash
./install-workflow-blueprint.sh
```

Run from this repo, or copy the script into any project root.

### B. Pick up a ticket

```bash
TASK_ID="MYPROJ-42"
cp .workflow/context/TASK-INITIAL-SETUP.md ".workflow/context/${TASK_ID}.md"
ln -sf "${TASK_ID}.md" .workflow/context/current-work.md
```

1. Read `.workflow/lessons/planning-lessons.md` **before** planning  
2. Set `## Phase:` (Architect | Developer | QA | SRE | Investigator)  
3. Update `## Last Updated:` after every significant action  

### C. During work

- Point your IDE agent at `.junie/AGENTS.md` (Junie) or `CLAUDE.md` + blueprint doc (Cursor / Claude Code)
- Run spawn check manually if needed: `.junie/hooks/spawn_check.sh`
- Verify PR/ticket state with tools—never trust the context file alone after 3+ days

### D. Complete a ticket

```bash
.junie/hooks/retrospective.sh
```

Then append 1–2 planning lessons and start the next ticket.

## Skills used

| Skill | When |
|-------|------|
| `skills/batch` | Large multi-file refactors |
| `skills/simplify` | Post-change review (reuse, quality, efficiency) |
| `skills/loop` | Background CI / maintenance polling |
| `skills/debug` | Agent self-diagnosis from session logs |

## Critical rules (summary)

1. **State on disk** — update `current-work.md` after every significant action  
2. **80-line cap** — compress in the same response if over limit  
3. **Verify before claim** — `gh pr view` / tracker API before reporting merge or status  
4. **One task** — unless tickets are explicitly coupled  
5. **Lessons loop** — read at pickup, write at archive  

See the [blueprint doc](../../docs/100-100-workflow-agent-blueprint.md) for the full 12-step guide and self-audit checklist.

## Agent config skeleton (Kiro / similar)

Adapt paths to `.workflow/` and `.junie/` when porting:

```json
{
  "name": "workflow-agent",
  "description": "Carries a single ticket from pickup to archive with verified state.",
  "model": "<pin-your-model>",
  "tools": ["fs_read", "fs_write", "execute_bash", "grep", "glob", "web_fetch", "subagent"],
  "allowedTools": [
    "fs_read", "fs_write", "execute_bash", "grep", "glob", "web_fetch", "subagent",
    "@github/get_pull_request",
    "@github/list_pull_requests",
    "@github/get_pull_request_status",
    "@github/get_pull_request_reviews"
  ],
  "resources": [".junie/AGENTS.md", "docs/100-100-workflow-agent-blueprint.md"],
  "hooks": {
    "spawn": "<absolute-path>/.junie/hooks/spawn_check.sh"
  }
}
```

Never use unscoped `@github` — enumerate read-only methods only.
