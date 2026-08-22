#!/bin/bash
# install-workflow-blueprint.sh
# Run this inside any repository to install the 100/100 Workflow Agent Blueprint.

echo "🏗 Installing 100/100 Workflow Agent Blueprint..."

# 1. Create directory structure
mkdir -p .workflow/{context,archive,lessons,plans}
mkdir -p .junie/hooks

# 2. Create AGENTS.md
cat <<EOF > .junie/AGENTS.md
# Workflow Guidelines

Follow these rules to ensure continuity across sessions and avoid state hallucinations.

## Context Management
- **Primary State:** Always use \`.workflow/context/current-work.md\` (a symlink to the active ticket) to track state.
- **Update Frequency:** Update the context file after every significant action or decision.
- **Phase Discipline:** Maintain the \`## Phase:\` field (Architect | Developer | QA | SRE | Investigator).
- **Line Limit (80 Lines):**
  - Keep the context file under 80 lines.
  - If it exceeds 60 lines, start compressing.
  - Move deep details to overflow files (e.g., \`TASK-ID-investigation.md\`) which are uncapped.
  - Enforce compression immediately if the \`spawn_check.sh\` hook warns you.

## Verification over Memory
- **External State:** NEVER claim a PR is merged or a ticket is closed without running a tool to verify (e.g., \`gh pr view\`, \`jira get\`).
- **Staleness:** If the \`spawn_check.sh\` hook reports the file is stale (> 3 days), re-verify all assumptions about PRs and tickets before taking action.

## Closing the Learning Loop
- **Lessons:** Read \`.workflow/lessons/planning-lessons.md\` at the start of every new task.
- **Retrospective:** When a task is done, run \`.junie/hooks/retrospective.sh\` and append 1-2 learned planning lessons to the lessons file.

## Personas by Phase
- **Architect:** Focus on design docs, schema, and API contracts. No code until the user picks a path (below) or says \`approved, implement\`.
- **Developer:** Focus on implementation, tests, and minimal code changes.
- **QA:** Focus on edge cases, failure modes, and verification scripts.
- **Investigator:** Focus on logs, traces, and root cause analysis.

## Before implementation: ask
After a work prompt and **before any code edit**, offer a choice:
1. **Implement now** — skip the rationale write-up; go to Developer. Persist a 5-line note (goal + files).
2. **Show thought process** — stay in Architect. Write \`## Why this approach\` (Chosen / Because / Rejected / Revisit if). No code until \`approved, implement\`.

Skip the question for: \`status\`, typos / one-line fixes, already-approved slices.
Force thought process (do not offer a skip) for: scoring, auth, data model, public API/contracts, anything hard to undo.
Recommend thought process on new features; recommend implement now on obvious bugfixes.
EOF

# 3. Create spawn_check.sh
cat <<'EOF' > .junie/hooks/spawn_check.sh
#!/bin/bash
CONTEXT_FILE=".workflow/context/current-work.md"
if [ ! -L "$CONTEXT_FILE" ] && [ ! -f "$CONTEXT_FILE" ]; then
    echo "⚠ No active context file found at $CONTEXT_FILE"
    exit 0
fi
LINE_COUNT=$(wc -l < "$CONTEXT_FILE" | xargs)
if [ "$LINE_COUNT" -gt 80 ]; then
    echo "❌ ACTION REQUIRED: Context file is $LINE_COUNT lines (max 80). You MUST compress it in your next response."
elif [ "$LINE_COUNT" -gt 60 ]; then
    echo "⚠ WARNING: Context file is $LINE_COUNT lines. Consider compressing to maintain focus."
fi
PHASE=$(grep "## Phase:" "$CONTEXT_FILE" | head -n 1 | cut -d':' -f2 | xargs)
echo "📍 Current Phase: ${PHASE:-Unknown}"
LAST_UPDATED=$(grep "## Last Updated:" "$CONTEXT_FILE" | head -n 1 | cut -d':' -f2 | xargs)
if [ -n "$LAST_UPDATED" ]; then
    NOW=$(date +%s)
    DATE_PART=$(echo "$LAST_UPDATED" | cut -d' ' -f1)
    THEN=$(date -j -f "%Y-%m-%d" "$DATE_PART" "+%s" 2>/dev/null)
    if [ -n "$THEN" ]; then
        DIFF=$(( (NOW - THEN) / 86400 ))
        if [ "$DIFF" -gt 3 ]; then
            echo "⚠ STALE: Last updated $DIFF days ago. Verify external state before trusting this file."
        fi
    fi
fi
echo "✅ Context loaded: $(readlink "$CONTEXT_FILE" || echo "$CONTEXT_FILE") ($LINE_COUNT lines)"
EOF

# 4. Create retrospective.sh
cat <<'EOF' > .junie/hooks/retrospective.sh
#!/bin/bash
CONTEXT_FILE=".workflow/context/current-work.md"
LESSONS_FILE=".workflow/lessons/planning-lessons.md"
if [ ! -L "$CONTEXT_FILE" ] && [ ! -f "$CONTEXT_FILE" ]; then
    echo "❌ No active context file to retrospective."
    exit 1
fi
REAL_FILE=$(readlink "$CONTEXT_FILE" || echo "TASK-$(date +%s).md")
if [ ! -L "$CONTEXT_FILE" ]; then
    REAL_FILE=".workflow/context/$REAL_FILE"
else
    REAL_FILE=".workflow/context/$REAL_FILE"
fi
echo "📊 Initiating Retrospective for $(basename "$REAL_FILE")..."
sed -i '' 's/## Status:.*/## Status: Completed/' "$REAL_FILE" 2>/dev/null || sed -i 's/## Status:.*/## Status: Completed/' "$REAL_FILE"
ARCHIVE_PATH=".workflow/archive/$(basename "$REAL_FILE")"
mv "$REAL_FILE" "$ARCHIVE_PATH"
rm "$CONTEXT_FILE"
echo "✅ Task archived to $ARCHIVE_PATH"
echo "💡 INSTRUCTION: You must now identify 1-2 key planning lessons from this task and append them to $LESSONS_FILE."
EOF

# 5. Create planning-lessons.md
cat <<EOF > .workflow/lessons/planning-lessons.md
# Planning Lessons
This file contains lessons learned from previous tasks to improve future planning.
Read this file before starting a new ticket.
---
## Lessons
- Using a stable symlink (current-work.md) allows hooks to remain path-agnostic while supporting multiple tasks.
- Extracting gotchas to Agent Skills reduces context token weight and makes them reusable across sessions.
- After a work prompt, ask Implement now vs Show thought process — do not assume code, and do not dump rationale unless asked (or the change is hard to undo).
EOF

# 6. Plan template (implement-now vs thought-process)
mkdir -p .workflow/plans
cat <<'EOF' > .workflow/plans/PLAN-TEMPLATE.md
# <TASK-ID> Plan

## Goal (1 sentence)

## Why this approach
**Chosen:** …

**Because:**
- …

**Rejected:**
- … — why not

**Revisit if:** …

> Omit this section on the **Implement now** path. Keep a 5-line note (goal + files) instead.

## Out of scope

## Files to touch (exact paths)

## Steps (numbered, each ≤3 files)

## Acceptance criteria

## Risks / open questions
EOF

# 7. Set permissions
chmod +x .junie/hooks/*.sh

echo "✅ 100/100 Workflow Blueprint installed successfully."
echo "💡 Next steps:"
echo "1. Update your CLAUDE.md to reference .junie/AGENTS.md and .workflow/context/current-work.md"
echo "2. Add a 'retrospective' command to your CLI that runs .junie/hooks/retrospective.sh"
echo "3. Start your first task in .workflow/context/TASK-ID.md and symlink it to current-work.md"
