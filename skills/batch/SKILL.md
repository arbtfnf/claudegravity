# Batch — large-scale change orchestration

**Works with:** Cursor · Claude Code · Junie · Antigravity · any agent that can edit files and run shell commands.

Portable skill originally adapted from Claude Code / OpenClaude `batch` workflows. Tool names below are generic — use whatever your agent provides (`run_command`, Shell, Bash, etc.).

## When to use

User says “batch”, “migrate across the codebase”, “bulk rename”, or asks for a large sweeping change that should be split into independent units.

## Instructions

### Phase 1: Research and plan

1. **Understand the scope** — find all files, patterns, and call sites. Match existing conventions.
2. **Decompose into independent units** — each unit must be:
   - Independently implementable
   - Mergeable/committable alone
   - Roughly uniform in size (prefer per-directory / per-module slices)
3. **Define an e2e verify recipe** — tests, `curl`, browser check, existing CI. Ask if unclear.
4. **Write a plan** — numbered units + verify recipe in `implementation_plan.md` (or equivalent). Wait for approval when the change is large.

### Phase 2: Execute

For each unit:

1. Apply the changes
2. Run a **simplify** review on what you touched (`skills/simplify`)
3. Verify with the e2e recipe / test suite
4. Commit per unit only if the user wants that

### Phase 3: Track progress

Keep a `task.md` (or ticket context file) updated until every unit is done. Summarize results.

## Outputs

- Plan artifact
- Per-unit commits or a single PR (per user preference)
- Brief final summary of what changed and how it was verified

## See also

- Detailed original notes: [`artifacts/batch.md`](./artifacts/batch.md)
- Pair with: `skills/simplify`
