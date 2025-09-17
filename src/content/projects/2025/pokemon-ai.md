---
title: 'Pokémon AI Workflow'
description: 'An AI agent that plays Pokémon using a Gemini powered Junjo workflow.'
date: '2025-08-24'
github: 'https://github.com/clambro/ai-plays-pokemon'
image: '../../../images/projects/2025/pokemon-ai.jpg'
image_alt: 'A screenshot showing the Pokémon AI workflow in action.'
is_featured: true
blog_tag: 'pokemon-ai'
---

## Overview

This is a fully autonomous AI workflow designed to play Pokémon Yellow Legacy on hard mode. The workflow, written in Python and orchestrated by Junjo, operates asynchronously with the PyBoy emulator to play the game. The guiding philosophy is one of "freedom with constraint," where the LLM makes the high-level strategic decisions, while safe, deterministic algorithms handle the low-level execution. To support this, the system features a three-tier memory system with RAG retrieval from a SQLite database and an ASCII map renderer with A\* search for overworld navigation. The AI streamed live on Twitch for several days, but is currently paused for upgrades to its high-level planning capabilities.

## Links

- [Full code on GitHub](https://github.com/clambro/ai-plays-pokemon)
- [Philosophy and design article](https://github.com/clambro/ai-plays-pokemon/blob/main/docs/philosophy.md)
- [A deep-dive into the workflow](https://github.com/clambro/ai-plays-pokemon/blob/main/docs/workflow.md)
- [Watch the AI fight the first gym leader](https://m.twitch.tv/videos/2544749106)
