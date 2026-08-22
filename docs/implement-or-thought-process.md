# Implement now, or show thought process?

After a work prompt, the workflow agent **asks before it writes code**. Rationale is optional, not a mandatory essay — and not something the agent may skip in silence.

This is a durable decision record, not a dump of model chain-of-thought. Chat thinking traces disappear; `## Why this approach` in the plan does not.

---

## The fork

The agent restates the change in one or two sentences, then offers:

| You pick | Agent does |
|----------|------------|
| **Implement now** | Developer phase. Skip the rationale write-up. Persist a **5-line note** (goal + files to touch) in `.workflow/plans/<TASK-ID>.md` or `current-work.md` so the next session is not blind. |
| **Show thought process** | Stay in **Architect**. Write `## Why this approach` (no code). Wait for `approved, implement` / `go ahead`. |

Example turn:

> I can add a shared `buildSearchUrl` helper and wire Find on X to plain-code search.
>
> **Implement now**, or **show why this approach first** (including what I rejected)?

---

## When to ask, skip, or force

| Situation | Behaviour |
|-----------|-----------|
| New feature, more than one reasonable approach, or more than one file | **Ask** |
| `status`, typos / one-line copy, already-approved slice | **Do not ask** — do the work |
| Scoring, auth, data model, public API / contracts, anything hard to undo | **Force thought process** — do not offer Implement now |
| Obvious, tight bugfix | Ask, but **recommend Implement now** |
| New feature / ambiguous design | Ask, but **recommend Show thought process** |

---

## Thought-process shape (when chosen or forced)

Write this in `.workflow/plans/<TASK-ID>.md` **before any implementation**:

```markdown
## Why this approach
**Chosen:** shared helper in `xPost.ts`, not a one-off in the modal.

**Because:**
- Find-on-X and compose already share the same ledger code
- X truncates `#BLR-R-…` at the hyphen, so search must be plain text

**Rejected:**
- Keep `#BLR-R-…` as a hashtag — X cannot index it
- Scrape the X API to verify posts — out of scope (auth + rate limits)

**Revisit if:** we get a real X API integration or change the ledger code shape.
```

Also add one line under `### Decisions` in `current-work.md`: `Chose X over Y because …`

Do **not** persist raw chain-of-thought. Persist the decision.

---

## User commands

| You say | Agent does |
|---------|------------|
| `implement now` / `just code` / `skip the why` | Implement-now path (unless the change is forced-rationale) |
| `show thought process` / `why first` / `show why` | Write `## Why this approach`, wait |
| `approved, implement` / `go ahead` | Developer: code the approved plan |

If the why is wrong, reject the plan. Cheaper than reverting code.

---

## Plan template

See [`.workflow/plans/PLAN-TEMPLATE.md`](../.workflow/plans/PLAN-TEMPLATE.md). `## Why this approach` is required on the thought-process path; omit it on implement-now (keep the 5-line note).
