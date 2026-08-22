# Planning Lessons
This file contains lessons learned from previous tasks to improve future planning.
Read this file before starting a new ticket.
---
## Lessons
- Using a stable symlink (current-work.md) allows hooks to remain path-agnostic while supporting multiple tasks.
- Extracting gotchas to Agent Skills reduces context token weight and makes them reusable across sessions.
- After a work prompt, ask Implement now vs Show thought process — do not assume code, and do not dump rationale unless asked (or the change is hard to undo).
