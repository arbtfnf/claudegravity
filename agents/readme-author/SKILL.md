# README Author (original ClaudeGravity pitch)

Rewrite a project README so it lands like a product page — clear value in ~10 seconds — without erasing the author’s real content.

## What this was

Early ClaudeGravity branding positioned this repo as a **Claude Code skill** that turns dense “technical slop” into high-conversion READMEs using **Hook → Prove → Enable → Extend**.

A May 2026 README commit also pointed install at an external Skill.Fish package (`tsilva/claude-skills` / `project-readme-author`). **That external package is inspiration/reference only** — this folder is the portable, in-repo skill you can use in Cursor, Claude Code, Junie, or Antigravity without Skill.Fish.

## When to use

- New repo needs a landing-quality README
- Existing README is accurate but unreadably dense
- You want structure + scoring, not a total rewrite of custom notes

## Framework: Hook → Prove → Enable → Extend

| Stage | Job | README placement |
|-------|-----|------------------|
| **Hook** | One-line promise a stranger understands | Title + first paragraph |
| **Prove** | Evidence it works (demo, badges, metrics, screenshots) | Immediately under the hook |
| **Enable** | Fastest path to first success | Install / Quick start |
| **Extend** | Depth for people who stayed | Features, architecture, API, contributing |

## Instructions

1. **Read the repo** — purpose, stack, how to run, real features (don’t invent).
2. **Inventory existing prose** — bullets, warnings, and custom sections to **preserve**.
3. **Draft structure** using Hook → Prove → Enable → Extend.
4. **Prose preservation** — merge; do not wipe author notes, licenses, or accurate caveats.
5. **Templates by project type**
   - **CLI** — install, one command, flags, examples
   - **Library / AI-ML** — install, minimal snippet, model/API notes
   - **Web app** — stack, env, local run, deploy
6. **Virality score (self-check)** before finishing:

| Tier | Bar |
|------|-----|
| Essential | Hook + install + one working example |
| Professional | + proof (badge/demo/screenshot) + clear features |
| Elite | + visuals, comparison/why-us, excellent scan hierarchy |

7. **Write or update `README.md`** — concise, scannable, no emoji spam unless the project already uses that voice.

## Inputs

- Repo root (or path to existing README)
- Optional: brand name, one-sentence pitch, target audience

## Outputs

- Updated `README.md`
- Short note: what was preserved vs restructured
- Tier self-score (Essential / Professional / Elite)

## How to run

Point your agent at this file and say:

> “Rewrite this README with Hook-Prove-Enable-Extend; preserve my custom notes.”

## Related

- Coding skills that often follow a README pass: `skills/simplify`
- Continuity for long doc tasks: `agents/workflow-agent`
