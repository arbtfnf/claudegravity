# Debug Skill

When asked to "debug your current session", or when encountering unexpected tool failures, stalls, or system errors, you must read the current session's log.

## Instructions

1. **Locate the Log**: Identify your `Conversation ID` from the persistent context and use `list_dir` or `view_file` to read `<appDataDir>/brain/<conversation-id>/.system_generated/logs/overview.txt`.
2. **Review Operations**: Look back at the last several turns to see what tools were called, what errors were returned, and where the system got stuck.
3. **Analyze**: Use grep_search or manually read the last 50-100 lines to find exact failure traces, permission errors, or context length warnings.
4. **Explain**: Explain what you found to the user in plain language. Note any instances where a tool returned an unexpected error or where your logic looped.
5. **Suggest Fixes**: Suggest concrete fixes or next steps. If a background command failed, read its output via `command_status`. If a file edit failed, review the target content again to ensure it matches the actual file content.
