---
title: 'Black Hole Simulation'
description: 'A redo of my undergraduate thesis simulating black hole formation.'
date: '2025-10-25'
github: 'https://github.com/clambro/black-hole-thesis'
image: '../../../images/projects/2025/black-hole-thesis.jpg'
image_alt: 'The Gargantua black hole from Interstellar.'
blog_tag: 'black-hole-thesis'
is_featured: true
---

## Overview

This is a redo of my undergraduate thesis simulating the gravitational collapse of a massless scalar field in a confined space. If the field has enough energy to begin with, it will immediately collapse into a black hole. If it does not have enough energy, it will start diffusing out to the boundary of our simulation, at which point it will be redirected back towards the center. The idea is that every time the field collapses through the center its own self-gravity focuses it to be denser and denser, until it inevtiably forms a black hole.

This was my first ever Rust project, and I also tried to stick to an Uncle Bob style architecture with layer based separation.

## Links

- [Full code on GitHub](https://github.com/clambro/black-hole-thesis)
- [A detailed explanation of how it works](https://github.com/clambro/black-hole-thesis/blob/main/docs/description.md)
