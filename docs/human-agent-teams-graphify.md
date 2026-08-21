# Stop Paying AI to Rediscover Your Codebase

> **Source article:** Draft for Medium — *Stop Paying AI to Rediscover Your Codebase: Building Human-Agent Teams with Graphify and Slack* by Anurag Bandhu (Aug 2026)  
> **Tags:** AI Agents · Graphify · Slack · Claude Code · Knowledge Graphs  
> Not affiliated with Slack, Anthropic, or Graphify. Graphify is open source; the conversational loop is an architecture, not a product claim.

Graphify maps the code. Slack holds the conversation. Neither is knowledge until you distill it — and let the model speak from the map.

This repo already ships the **Now** layer (`current-work.md`, spawn hooks, plan-before-build). This article is how that layer sits on a structural graph and a public conversation, so agents stop paying the rediscovery tax.

---

## Core idea

Context is the most expensive tax in AI software development. Every time a developer or an agent starts a new session, they pay a toll: re-reading files, grepping for dependencies, and digging the “why” out of Slack threads.

Tools like [Graphify](https://github.com/graphify-labs/graphify) solve the structure problem by turning a repository into a queryable graph. Structure is only half the battle. The other half is intent — the decisions, rejected approaches, and handoffs that live in Slack, pull requests, and meeting notes.

If you want a persistent teammate instead of a chatty LLM, do not build another graph engine. Stack a conversational layer on a structural graph, and connect them with a human-gated distillation loop.

---

## The illusion of chat as knowledge

It is tempting to think that because the team debates architecture in Slack, that knowledge is available. [Jaime DeLanghe](https://claude.com/blog/turning-conversation-into-knowledge-how-slack-builds-human-agent-teams), Slack’s CPO, has said the opposite: early research at Slack showed that conversation sitting in a channel does not become knowledge. It hangs there as exhaust until something distills it.

Dumping raw chat into an agent’s context window is the same failure with a bigger bill. It bloats tokens and invites hallucination. You do not need the transcript. You need the decisions.

---

## Layer 1: Structure (Graphify)

Graphify — or any tree-sitter AST tool in the same family — is the baseline of the system: what exists, what calls what, where a file sits.

- **In the repo, not on one laptop.** Commit the map (Graphify writes `graphify-out/`) so the team shares one picture of the code.
- **Git keeps it fresh.** Post-commit and post-checkout hooks rebuild the AST graph when the SHA moves. Git is the clock; a nightly cron is only a backstop.
- **Code updates cost no inference.** Local tree-sitter, not an LLM. (A semantic pass over docs or PDFs is optional and *does* cost tokens.)

Graphify is the map. A map does not tell you why the road was built.

---

## Layer 2: Conversation → intent

The add-on sits on top of Graphify. It is a distiller that writes **into** the same graph, behind a human gate.

The agent should not only read code. It should operate in the channel where the work is happening: query the graph, open **one** file, then speak in the thread.

**Closed loop:** work in the open → agent drafts the decision → a human (or an emoji) promotes it → a small, evidence-linked node is attached to the code graph.

Example: someone asks, “Can we put livability weights in the home UI?” The agent queries the graph, finds that scoring already lives in one calculator module, cites that node and the file, and proposes a plan. Implementation waits until a person says the equivalent of **approved, implement**. The model’s reply is retrieval, not rediscovery.

---

## Three memories, three jobs

Keep these separate or the context window collapses.

| Layer | Source of truth | Size | Who writes |
|-------|-----------------|------|------------|
| Structure | Graph in git, keyed to a commit SHA | Large; **query**, don’t dump | CI / git hooks (AST) |
| Intent | Plan docs + distilled Slack/PRs | Uncapped in the plan | Human, or agent draft + human |
| Now | A session pointer (ClaudeGravity: `current-work.md`) | Short snapshot — if it reads like a transcript, distillation failed | Distiller, then human |
| Talk | Public channel / PRs | Ephemeral until promoted | Humans + **labeled** agents |

The session file is “what we are doing right now.” Plans are long memory. Slack (or PRs) is the working channel. None of them is the graph.

---

## How this actually saves cost

Token usage is a pulse check, not proof of ROI. Savings come from **avoided exploration**.

Without a map, an agent may grep and read dozens of files to rebuild routing logic in its head. Every developer and every new session pays that tax again.

With this stack:

- **Structure updates for code are free** after the first Graphify build.
- **Distillation is paid once per SHA** — a small pass from Slack/PRs into the session pointer or an index. That is the design; measure it, don’t assume the invoice.
- **Agents retrieve instead of rediscovering.** A few hundred tokens of subgraph beat re-reading the corpus.

You pay to *write* the knowledge once. You stop paying every agent to find it again.

Marketing compression ratios (e.g. 71× vs reading an entire mixed corpus) assume a naive baseline. Against a disciplined agent that already greps well, expect fewer orientation rounds — not a 70× invoice.

---

## Rules if you build it

Do not rebuild Graphify. Adopt it for structure. Spend engineering on distillation and handoff.

1. **Query, then read one file.** The graph is a map, not a proof. Inferred edges stay labeled.
2. **Label agent speech.** A proposal is not a graph node until a human promotes it. Otherwise the model cites itself.
3. **Don’t inject `graph.json`.** Briefing: HEAD SHA, pointer to “now,” a handful of hot nodes. Expand on demand.
4. **Keep a phase gate.** Graph-informed chat is architecture. `src/` still waits for an explicit implement signal.
5. **Respect the branch.** An agent on a feature branch must use that SHA’s graph, or a diff overlay against `main`. Otherwise the map will lie.

---

## Article → this repo

ClaudeGravity already implements the **Now** and **Intent** layers. Structure (Graphify) is adopted in consuming repos, not vendored here.

| Article | ClaudeGravity |
|---------|---------------|
| Session pointer, ≤80 lines | `.workflow/context/current-work.md` |
| Spawn / staleness check | `.junie/hooks/spawn_check.sh` |
| Long memory / lessons | `.workflow/lessons/planning-lessons.md` |
| Architect → implement gate | `.junie/AGENTS.md` + plan-before-build |
| Public work surface | GitHub PRs (Slack is optional in the consuming org) |
| Structural graph | Adopt [Graphify](https://github.com/graphify-labs/graphify) in the app repo; do not fork a second AST engine into this kit |

**Closed loop on a ClaudeGravity project:**

```text
plans / Slack / PRs
        │  distill (lossy, reviewed)
        ▼
current-work.md     ←  “what we are doing this session”
        │
        ▼
Graphify graph in the app repo   ←  “what the system is” (SHA-keyed)
        │
        ▼
Agent in the channel     ←  queries graph, then one file, then speaks
        │  human decides
        ▼
implementation (phase gate)
        │  commit
        ▼
AST graph refresh ($0) + optional promoted judgment node
```

---

## The takeaway

The goal is not to give an LLM your repo. It is a shared working memory.

Graphify in git is the map. The session file is the present. Slack and PRs are the conversation. When the model can speak in that conversation *from the map*, and humans gate what is committed back, you stop shipping chatbots and start shipping teammates.
