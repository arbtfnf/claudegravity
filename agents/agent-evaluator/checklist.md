# Agent grade checklist (15 points)

Use during PR review or when you don’t want to run the script. Tick = 1 point toward a gut-check (not the full /100).

**Article:** [We Had 20+ AI Agents…](https://medium.com/@anrgbndhu/we-had-20-ai-agents-and-no-way-to-know-if-they-were-any-good-so-i-built-one)

## Wiring

- [ ] 1. Tools are an **explicit list** (not a catch-all)
- [ ] 2. `allowedTools` (or equivalent) is a **whitelist**
- [ ] 3. No unscoped write/merge on tracker or GitHub
- [ ] 4. Every prompt claim has a matching tool/capability
- [ ] 5. Resources / knowledge files load on startup when needed

## Enforcement

- [ ] 6. Hooks exist for rules that must not depend on model mood
- [ ] 7. Hook scripts are **external files** (not fragile inline `bash -c`)
- [ ] 8. Critical rules use **MUST / NEVER** on irreversible actions
- [ ] 9. Verify-before-claim for PRs, tickets, and external state
- [ ] 10. Destructive actions require confirmation

## Continuity & cost

- [ ] 11. State file + archive if this is a workflow archetype
- [ ] 12. Line/token budget for always-loaded context
- [ ] 13. Prompt is lean (no unused procedures inlined)
- [ ] 14. User-facing commands / UX are documented
- [ ] 15. Graded against the **right archetype** (don’t force state on analyzers)

**Score:** ___ / 15  

**Top fix:** _________________________________
