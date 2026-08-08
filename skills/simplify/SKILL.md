# Simplify — multi-perspective code review + cleanup

**Works with:** Cursor · Claude Code · Junie · Antigravity · any coding agent.

Portable skill for a three-persona review (reuse, quality, efficiency), then fix issues in place.

## When to use

User says “simplify”, “simplify review”, or after a batch of edits before commit/PR.

## Instructions

### Phase 1: Identify changes

Review staged/unstaged diffs, or the files just edited in this session.

### Phase 2: Parallel perspective review

#### Persona 1 — Code reuse
- Search for existing utilities that could replace new code
- Flag duplicate functionality and hand-rolled logic that already exists elsewhere

#### Persona 2 — Code quality
- Redundant/derived state, parameter sprawl, copy-paste
- Leaky abstractions, stringly-typed values, useless nesting/comments

#### Persona 3 — Efficiency
- Redundant work, missed concurrency, hot-path bloat
- Unbounded structures, missing cleanup, overly broad reads

### Phase 3: Fix

Aggregate findings and fix real issues with edit tools. Skip false positives. Summarize what changed (or confirm already clean).

## Outputs

- Cleaned code
- Short summary of fixes by persona

## See also

- Detailed original notes: [`artifacts/simplify.md`](./artifacts/simplify.md)
