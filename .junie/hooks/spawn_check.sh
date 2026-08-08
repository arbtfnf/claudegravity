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
