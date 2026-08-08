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
