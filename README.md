# 🌌 ClaudeGravity

**Transform technical "slop" into high-conversion landing pages automatically.**

[![Skill.Fish](https://img.shields.io/badge/Install-Skill.Fish-brightgreen)](https://skill.fish/add/tsilva/claude-skills/project-readme-author)
[![Claude Code](https://img.shields.io/badge/Claude-Code-purple)](https://anthropic.com/claude-code)

ClaudeGravity is a specialized **Claude Code Skill** designed for developers who want their GitHub repositories to look as professional as a VC-backed startup’s landing page—without the manual work.

## 🚀 The Hook: Why ClaudeGravity?
Most READMEs are ignored because they are too dense. ClaudeGravity uses the **Hook-Prove-Enable-Extend** framework to ensure users understand your value proposition in under 10 seconds.

* **Batch Migration & Orchestration**: Break down large-scale refactors into parallel, independently verifiable git worktrees. (The `batch` skill)
* **Comprehensive AI Code Review**: Perform rigorous multi-perspective code reviews focusing on Code Reuse, Quality, and Efficiency, followed by autonomous cleanup. (The `simplify` skill)
* **Continuous Background Polling**: Establish robust, automated background tasks and maintenance loops to monitor CI and trigger actions after a push. (The `loop` skill)
* **Agent Self-Diagnosis**: Equip the AI with the ability to read its own session logs to troubleshoot stalled tasks and system errors. (The `debug` skill)
* **100/100 Workflow Agent Blueprint**: High-continuity task management with state tracking, context compression, and automated retrospectives.

## 🏗 Workflow Agent Blueprint
This repository now includes the **100/100 Workflow Agent Blueprint** for Junie. This system ensures your agent:
1. **Remembers** exactly where you left off across sessions.
2. **Verifies** external state (GitHub, Jira) before claiming progress.
3. **Learns** from every completed task via an automated retrospective loop.

### Quick Start
1. Run `./install-workflow-blueprint.sh` to initialize the directories and hooks.
2. Follow the rules in `.junie/AGENTS.md`.
3. Track work in `.workflow/context/current-work.md`.

## ⚡ Key Features
- 🏗 **Template Engine:** Project-specific layouts for CLI, AI/ML, and Web apps.
- 🧠 **Prose Preservation:** Updates your docs without overwriting your custom manual notes.
- 🎨 **Retina-Ready Visuals:** Integrated support for automated logos and formatting.
- 📈 **Virality Scoring:** Validates your docs against Essential, Professional, and Elite tiers.

## 🛠 Installation
Install via [Skill.Fish](https://skill.fish):
```bash
npx skillfish add tsilva/claude-skills project-readme-author
