# Gemma — local Ollama models

**Works with:** any agent that can run shell/`curl`. Optional skill; not required for the rest of the kit.

Use local Gemma (or other Ollama models) for offline/private assist.

## Prerequisites

- [Ollama](https://ollama.com) installed and running (`ollama serve`)

## Common commands

```bash
ollama pull gemma2:2b
ollama list
ollama run gemma2:2b
```

## API example

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "gemma2:2b",
  "prompt": "Explain this error in one paragraph:",
  "stream": false
}'
```

## Agent usage

Prefer the host’s shell tool to call `ollama` or the local HTTP API. Do not assume Antigravity-only side panels exist.
