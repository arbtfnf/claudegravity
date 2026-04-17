# Antigravity Skills & AI Workflows

![Antigravity Skills](https://img.shields.io/badge/AI-Antigravity-blue) ![Workflows](https://img.shields.io/badge/Automation-Agentic-green)

A powerful collection of autonomous AI agent skills and workflows, ported from Claude Code, designed specifically for the **Antigravity AI Coding Assistant**. This repository supercharges your agentic coding experience with automated batch processing, deep code reviews, and background maintenance polling.

## 🚀 Key Features

* **Batch Migration & Orchestration**: Break down large-scale refactors into parallel, independently verifiable git worktrees. (The `batch` skill)
* **Comprehensive AI Code Review**: Perform rigorous multi-perspective code reviews focusing on Code Reuse, Quality, and Efficiency, followed by autonomous cleanup. (The `simplify` skill)
* **Continuous Background Polling**: Establish robust, automated background tasks and maintenance loops to monitor CI and trigger actions based on repository events. (The `loop` skill)
* **Agent Self-Diagnosis**: Equip the AI with the ability to read its own session logs to troubleshoot stalled tasks and system errors. (The `debug` skill)

## 🛠 Usage

These skills are natively compatible with the Antigravity Knowledge Item (KI) system. By integrating these artifacts into your local `<appDataDir>/knowledge` directory, Antigravity automatically inherits these advanced capabilities in all future coding sessions.

### Invoking Skills
Once installed, simply instruct the AI in natural language:
* *"Simplify these code changes"*
* *"Batch process this framework migration..."*
* *"Start a maintenance loop to watch the PR"*
* *"Debug your current session"*
