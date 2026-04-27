# Gemma Skill

This skill allows Antigravity to interact with local Gemma models running via Ollama. It provides capabilities for local inference, model management, and offline coding assistance.

## Capabilities

- **Local Chat**: Interact with Gemma 2/3 models for code explanation, debugging, and generation.
- **Model Management**: List, pull (download), and switch between different Gemma variants.
- **Privacy**: All processing happens locally on the user's machine.

## Usage

To use this skill, ensure Ollama is installed and running (`ollama serve`).

### Common Commands

- `ollama pull gemma:2b`: Download the lightweight Gemma 2B model.
- `ollama list`: See which models are currently available.
- `ollama run gemma:7b`: Start a chat session in the terminal.

## Integration with Antigravity

Antigravity can use the `run_command` tool to interact with the Ollama CLI or the `curl` tool to talk to the Ollama REST API (default: `http://localhost:11434/api/generate`).

### Example API Request

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "gemma:2b",
  "prompt": "Why is the sky blue?"
}'
```

### Side Panel

The "Gemma Chat" side panel in VS Code provides a visual interface for these features, allowing for streaming responses and one-click code application.
