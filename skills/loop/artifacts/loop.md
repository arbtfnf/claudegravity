# Loop Skill: Recurring Maintenance and Polling

When asked to "loop", "poll for status", "babysit a workflow", or run a recurring maintenance task, you must establish a continuous background process to monitor conditions and alert the user or take autonomous action.

## Instructions

1. **Understand the trigger condition**: Determine what you are looping or waiting for (e.g., CI to finish, a file to be written, a server to become healthy).
2. **Write a script**: Write a robust shell script (`script.sh` in a temporary directory or scratch pad) that implements the loop. For example:
   ```bash
   while true; do
       if [ condition ]; then
           echo "Condition met!" >> /path/to/status.log
           break
       fi
       sleep 10
   done
   ```
3. **Execute in Background**: Use the `run_command` tool with `WaitMsBeforeAsync` set to a small value (e.g., 500) so the script runs in the background. Note the returned `CommandId`.
4. **Monitor via Command Status**: Periodically use the `command_status` tool to check if the loop has completed or generated output.
5. **Act on Results**: If the loop detects a failure or a trigger condition, investigate it and apply the requested action (e.g., notify the user, run tests, fix the code).
6. **Maintenance Mode**: If no explicit prompt is provided, treat it as a maintenance loop. Automatically poll the git branch for new changes, review PR comments, check for failed CI runs, or run cleanup passes (like simplification) when nothing else is pending.
