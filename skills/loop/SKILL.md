# Loop — recurring maintenance / polling

**Works with:** Cursor · Claude Code · Junie · Antigravity · any agent with background shell + status checks.

## When to use

User says “loop”, “poll”, “babysit CI”, “watch this PR”, or wants recurring maintenance until a condition is met.

## Instructions

1. **Define the trigger** — CI green, file appears, server healthy, PR comment, etc.
2. **Write a small poll script** (temp file or project `scripts/`) with a clear exit condition and sleep interval.
3. **Run it in the background** via your agent’s shell/background tool; keep the job id.
4. **Poll status** — check output periodically; don’t block the chat forever without updates.
5. **Act** — on success/failure, investigate and take the requested action (notify, fix, re-run tests).
6. **Default maintenance mode** (if unspecified) — watch the branch for new commits, CI failures, and review comments; optionally run `skills/simplify` when idle.

## Platform notes

| Agent | Typical background mechanism |
|-------|------------------------------|
| Cursor | Shell with background / `block_until_ms: 0`, then poll |
| Claude Code | Bash background + status |
| Junie | Shell + hooks |
| Antigravity | `run_command` + `command_status` |

Keep scripts portable: no hard-coded home-directory paths.

## See also

- Detailed original notes: [`artifacts/loop.md`](./artifacts/loop.md)
