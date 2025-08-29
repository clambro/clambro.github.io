---
title: '2048 Genetic Algorithm'
description: 'A neural network for solving 2048, trained by a micro-genetic algorithm.'
date: '2021-06'
github: 'https://github.com/clambro/2048-Micro-Genetic'
image: './genetic-2048.jpg'
image_alt: 'An image of the game 2048.'
---

## Overview

This project explores an unconventional (and honestly silly) approach to solving the game 2048 by training a neural network with a micro-genetic algorithm. A simple feed-forward neural network was built in Python to take the game board as input and decide the next move. Instead of traditional training methods, its weights were evolved over 2000 generations using a micro-genetic algorithm, which uses a small population, high mutation rates, and elitism to efficiently explore the solution space. The final trained network outperformed several baseline strategies, including random, corner-focused, and greedy algorithms, demonstrating the viability of this ridiculous method.

## Links

- [Full code on GitHub](https://github.com/clambro/2048-Micro-Genetic)
