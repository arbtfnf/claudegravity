# Workflow Guidelines

Follow these rules to ensure continuity across sessions and avoid state hallucinations.

## Context Management
- **Primary State:** Always use `.workflow/context/current-work.md` (a symlink to the active ticket) to track state.
- **Update Frequency:** Update the context file after every significant action or decision.
- **Phase Discipline:** Maintain the `## Phase:` field (Architect | Developer | QA | SRE | Investigator).
- **Line Limit (80 Lines):**
  - Keep the context file under 80 lines.
  - If it exceeds 60 lines, start compressing.
  - Move deep details to overflow files (e.g., `TASK-ID-investigation.md`) which are uncapped.
  - Enforce compression immediately if the `spawn_check.sh` hook warns you.

## Verification over Memory
- **External State:** NEVER claim a PR is merged or a ticket is closed without running a tool to verify (e.g., `gh pr view`, `jira get`).
- **Staleness:** If the `spawn_check.sh` hook reports the file is stale (> 3 days), re-verify all assumptions about PRs and tickets before taking action.

## Closing the Learning Loop
- **Lessons:** Read `.workflow/lessons/planning-lessons.md` at the start of every new task.
- **Retrospective:** When a task is done, run `.junie/hooks/retrospective.sh` and append 1-2 learned planning lessons to the lessons file.

## Personas by Phase
- **Architect:** Focus on design docs, schema, and API contracts.
- **Developer:** Focus on implementation, tests, and minimal code changes.
- **QA:** Focus on edge cases, failure modes, and verification scripts.
- **Investigator:** Focus on logs, traces, and root cause analysis.
