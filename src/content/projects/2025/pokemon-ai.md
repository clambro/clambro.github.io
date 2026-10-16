---
title: 'Pokémon AI Agent'
description: 'A Pokémon AI agent combining LLM decisions with deterministic gameplay tools.'
publishedDate: '2025-08-24'
updatedDate: '2026-10-15'
github: 'https://github.com/clambro/ai-plays-pokemon'
image: '../../../images/projects/2025/pokemon-ai.jpg'
image_alt: 'The Pokémon AI dashboard showing its agent log, goals, and team after defeating Lance.'
is_featured: true
blog_tag: 'pokemon-ai'
---

## Overview

This is a fully autonomous AI agent designed to play Pokémon Yellow Legacy on hard mode. Written in Python using Pydantic AI, it operates asynchronously with the PyBoy emulator, with dedicated agents for overworld exploration, battles, and dialogue. The guiding philosophy is one of "freedom within constraints," where the LLM makes the strategic decisions while deterministic tools validate its requests and handle navigation, menus, and other game mechanics. The system uses hierarchical rolling memory to retain recent events and summarize older history, alongside persistent text maps and A* search for navigation. The project streamed live on Twitch.

## Links

- [Full code on GitHub](https://github.com/clambro/ai-plays-pokemon)
- [Philosophy and design article](https://github.com/clambro/ai-plays-pokemon/blob/main/docs/philosophy.md)
- [A deep-dive into the architecture](https://github.com/clambro/ai-plays-pokemon/blob/main/docs/architecture.md)
