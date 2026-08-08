# Debug — agent self-diagnosis

**Works with:** Cursor · Claude Code · Junie · Antigravity · any agent that can read session/tool logs.

## When to use

User says “debug your session”, or the agent is stalled / tools are failing unexpectedly.

## Instructions

1. **Locate evidence**
   - Recent tool errors in the conversation
   - Agent/session logs if available (Cursor transcripts, Claude Code logs, Antigravity `brain/<id>/.../overview.txt`, etc.)
   - Failed background command output
2. **Review the last several turns** — which tools ran, what returned, where it looped.
3. **Analyze** — permission errors, wrong paths, context limits, mismatched file state before edits.
4. **Explain** in plain language what failed and why.
5. **Suggest next steps** — retry with corrected args, re-read the file, shrink context, etc.

## Do not

- Invent log paths that don’t exist on the current platform
- Claim a fix without verifying the underlying error again

## See also

- Antigravity-oriented notes (legacy): [`artifacts/debug.md`](./artifacts/debug.md)
