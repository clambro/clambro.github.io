---
title: 'Graph Reconstruction Conjecture'
description: 'An evolutionary search for a counterexample to the graph reconstruction conjecture.'
date: '2026-07-27'
github: 'https://github.com/clambro/graph-reconstruction-conjecture'
image: '../../../images/projects/2026/graph-reconstruction-conjecture.png'
image_alt: 'Three disconnected clusters of graph vertices found by the evolutionary search.'
is_featured: false
blog_tag: 'graph-reconstruction'
---

## Overview

This was a computational attempt to find a counterexample to the graph reconstruction conjecture: two nonisomorphic graphs with identical collections of vertex-deleted subgraphs (decks). Instead of searching graphs directly, it uses a genetic algorithm to evolve graph-generating programs, with exact deck overlap providing the fitness signal. It did not find a counterexample, but it independently rediscovered the known two-thirds construction and found several other high-overlap graph families. I provided the research direction, but the code was entirely written and reviewed by GPT-5.6 Sol.

## Links

- [Full code on GitHub](https://github.com/clambro/graph-reconstruction-conjecture)
- [Graph showcase](https://github.com/clambro/graph-reconstruction-conjecture/tree/main/showcase)
