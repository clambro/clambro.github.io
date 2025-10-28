---
title: 'A Spaghettification Down Memory Lane'
subtitle: 'Revisiting my undergraduate thesis after nearly a decade'
date: '2025-10-27'
tags: ['black-hole-thesis']
---

Coming from a non-software background makes me feel somewhat insecure about the things I never learned properly, like low-level languages. My only previous experience with a low level language was the trauma of using C++ for one of my algorithms courses in university without knowing what an IDE is (because computer science courses don't actually teach you programming). My coworker kept going on and on about a Rust project he was working on, and I thought it might be fun and good for my own development (ha!) to teach myself some lower level skills by implementing something myself in Rust.

I was debating what kind of project to work on when I was reminded of an anecdote from my university days. My undergraduate thesis was centered around computer simulations of black hole formation, and before I started the project my professor told me that I had to pick a programming language. He gave me two options: MATLAB or C. He strongly recommended C, saying that my simulation would run about 10x faster if I coded it right. I retorted that with my programming skills, even if it did run 10x faster it would take me 100x longer to write it, and went with MATLAB instead.

That was the right decision at the time, but it's been nine years since that conversation and over the years I've learned a thing or two about programming. Since graduating, I've worked in tech, and I occasionally catch myself reminiscing about my physics days. That same professor, after my thesis, offered me the chance to stay on with him and do a masters and a PhD. I told him I'd love that, but that I was flat broke and needed to get a job. He looked at me and said "ah, once you start making money you'll never come back."

He was right, of course. I've worked in tech since graduating and never looked back, but I'll always love physics, and there is a part of me that misses it. Putting those two threads together made it seem natural to try re-implementing my thesis project in Rust. I kept all my godawful MATLAB code, and I had my thesis itself to guide me through the half-remembered math. How hard could it be?

![We do this, not because it is easy, but because we thought it would be easy](../../../images/blog/2025/black-hole-thesis/thought-it-would-be-easy.jpg)

Miss physics sometimes, thought it would be fun to redo my thesis now that I know how to code
Fed ChatGPT my thesis and it pointed out a bunch of potential improvements
Asked about the 1st order BCs and it suggested the characteristic equations
Rust was pretty easy to pick up and quite enjoyable, though the code is very simple. Was very OCD about maintaining clean architecture
Got a working PDE solver spun up relatively quickly and started implementing the BH equations
Could not get 4th order convergence on the characteristic equations despite multiple days of effort
Ran into a bunch of other problems with floating point errors and boundary conditions, had to remind myself that I was not actually defending a thesis
In the end I got it working about 100x faster and 4x more accurate than my original thesis code. Results look way better
