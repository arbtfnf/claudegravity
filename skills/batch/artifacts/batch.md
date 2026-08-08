# Batch Skill: Large-Scale Work Orchestration

When you are asked to "batch" a change, or when you are orchestrating a large, sweeping change (e.g., migrations, refactors, bulk renames) across many files, you must follow this systematic process.

## Phase 1: Research and Plan

1. **Understand the scope**: Deeply research what this instruction touches. Find all the files, patterns, and call sites that need to change. Understand the existing conventions so the migration is consistent.
2. **Decompose into independent units**: Break the work into self-contained units. Each unit must:
   - Be independently implementable.
   - Be mergeable/committable on its own without depending on another unit.
   - Be roughly uniform in size. Prefer per-directory or per-module slicing over arbitrary file lists.
3. **Determine the e2e test recipe**: Figure out how to verify changes end-to-end. (e.g., CLI app? dev server + curl? browser subagent? existing test suite?). If you are unsure, ask the user before proceeding.
4. **Write the Plan**: Create an `implementation_plan.md` artifact (if not already created) detailing the numbered list of work units, and the exact e2e recipe. Wait for user approval.

## Phase 2: Execute

Once the plan is approved, create a `task.md` with each of the units.
For each unit, systematically:
1. Apply the required changes to the target files using your editing tools.
2. **Simplify**: Perform a simplify review (check for reuse, quality, and efficiency) on your changes.
3. **Verify**: Run the project's test suite via `run_command` in the background, or follow the e2e test recipe. Fix any failing tests.
4. **Commit**: If the user wants the changes committed per-unit, run `git commit` for that unit's changes.

## Phase 3: Track Progress

Continuously update `task.md` as each unit is completed. Do not stop until all units in the batch have been processed. Summarize the final results to the user.
