# Simplify Skill: Code Review and Cleanup

When asked to "simplify" or perform a "simplify review", you must review all changed files for reuse, quality, and efficiency, and fix any issues found.

## Phase 1: Identify Changes
Check what has changed. If there are staged/unstaged changes, review them. Otherwise, review the most recently modified files that the user mentioned or that you edited earlier in this conversation.

## Phase 2: Parallel Perspective Review
Mentally switch between three distinct review personas and identify issues for each:

### Persona 1: Code Reuse Review
1. **Search for existing utilities**: Look for similar patterns elsewhere in the codebase (utility directories, shared modules, adjacent files) that could replace newly written code.
2. **Flag duplicate functionality**: Identify new functions that duplicate existing ones and suggest using the existing ones.
3. **Flag inline logic**: Identify hand-rolled string manipulation, manual path handling, custom environment checks, ad-hoc type guards, etc., that could use an existing utility.

### Persona 2: Code Quality Review
Review for hacky patterns:
1. **Redundant state**: State that duplicates existing state, cached values that could be derived, observers/effects that could be direct calls.
2. **Parameter sprawl**: Adding new parameters instead of generalizing or restructuring.
3. **Copy-paste**: Near-duplicate code blocks that should be unified.
4. **Leaky abstractions**: Exposing internal details.
5. **Stringly-typed code**: Using raw strings instead of constants/enums.
6. **Unnecessary nesting**: E.g. wrapper boxes in UI that add no value.
7. **Unnecessary comments**: Comments explaining WHAT the code does rather than WHY.

### Persona 3: Efficiency Review
Review for efficiency:
1. **Unnecessary work**: redundant computations, repeated file reads, duplicate network calls, N+1 patterns.
2. **Missed concurrency**: Independent operations running sequentially.
3. **Hot-path bloat**: New blocking work added to startup or hot paths.
4. **Recurring no-op updates**: Unconditional state updates inside polling loops/intervals.
5. **Memory**: Unbounded data structures, missing cleanup, event listener leaks.
6. **Overly broad operations**: Reading entire files when only a portion is needed.

## Phase 3: Fix Issues
Aggregate the findings across the three personas. Fix each issue directly using your file editing tools. If a finding is a false positive or not worth addressing, ignore it.

When done, briefly summarize what was fixed (or confirm the code was already clean).
