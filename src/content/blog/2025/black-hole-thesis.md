---
title: 'A Spaghettification Down Memory Lane'
subtitle: 'Revisiting my undergraduate thesis after nearly a decade.'
date: '2025-10-27'
tags: ['black-hole-thesis']
---

Coming from a non-software background sometimes makes me feel insecure in my career about the things I never learned properly. Low-level languages are something that I was barely exposed to in school. My only previous experience was the trauma of using C++ for one of my algorithms courses in university before ever being shown what an IDE is. I never touched it again after that. Lately though, I had a coworker who kept talking about a Rust project he was working on. The language's mathematical foundations piqued my interest, and I thought it might be fun and good for my own development to teach myself some of those skills I never learned in school by building my own little Rust project.

## Ancient History

I was debating what exactly to build when I remembered an anecdote from my university days. For my undergraduate thesis I built computer simulations of black hole formation, and before I started the thesis my professor told me that I had to pick a programming language. He gave me two options: MATLAB or C. He strongly recommended C, suggesting that it would run about 10x faster than MATLAB if I coded it right. I retorted that with my programming skills, even if it did run 10x faster it would take me 100x longer to write it and went with MATLAB instead.

That was the right decision at the time, but it's been nine years since that conversation and I've learned a thing or two about programming since then. That same professor, after my thesis, offered me the chance to stay on with him and do a masters and a PhD. I told him that I'd love that, but I was flat broke and needed to get a job. He looked at me and said "ah, once you start making money you'll never come back."

He was right, of course. I've worked in tech since graduating and never looked back, but I'll always love physics, and there is a part of me that misses it. Reminiscing about those times, I thought it would be a great idea to try re-implementing my thesis project in Rust. I still had all my godawful MATLAB code, and I had my thesis itself to guide me through the half-remembered math and physics. How hard could it be?

![We do this, not because it is easy, but because we thought it would be easy.](../../../images/blog/2025/black-hole-thesis/thought-it-would-be-easy.jpg)

## Raising the Stakes

To help plan out the project, I plugged my thesis into ChatGPT and asked it for feedback. It pointed out a dozen or so potential improvements and mistakes I made, many of which I had been acutely aware of at the time of writing. For fun though, I then asked it to consider a problem that neither my prof, nor I, nor the researcher whose work my thesis was based on had been able to solve at the time.

Without getting too far into the details, the equations of motion for this black hole simulation admit multiple valid forms depending on your choice of variables and coordinates. There's one set of equations that is well-behaved numerically which would be the optimal choice for the solution, but there's no obvious way to force the required boundary conditions using that set of equations. For my actual thesis, this forced me to swap to a less well-behaved set of equations that slowed down and destabilized the simulation, leading to worse final results.

ChatGPT considered the problem for about four minutes and came up with a change of variables that kept the equations well-behaved, but made the boundary conditions trivial to enforce. I now _had_ to re-implement the whole thesis if only to check whether or not ChatGPT was right!

## Building the Solver

The whole "learning Rust" part of the process wasn't too hard, though that's largely because the code itself is very simple. I tried to minimize my use of LLM auto-complete to drill the syntax into my brain, but I only have so much self-control. As an added goal, I also stuck closely to an Uncle Bob style layer-based separation of the code to improve my architectural skills.

I started the project by building a basic PDE solver for a 1D wave equation with certain convergence guarantees, which was pretty straightforward. My experience with compiled languages is pretty limited, but I was very impressed by the speed and safety of Rust. It flagged a bunch of issues that would have taken me ages to track down in C, and the code ran about 100x faster than my MATLAB solver ever did. Here's a video of the working wave equation solver in action.

(Video of the wave simulation.)

## Was ChatGPT Right?

Once I verified that the basic solver was working properly, I immediately tried to implement ChatGPT's version of the black hole equations.

It _almost_ worked.

The equations were valid and the simulation looked stable, but no black holes ever formed. Deeper analysis showed that there was something causing energy to leak out of the system, thus invalidating the physics. The equations were right, but the simulation error was way too high.

To confirm that I hadn't made some other mistake, I implemented the uglier equations that I used in my original thesis code, and things worked a little better. Black holes were forming, but I was seeing a lot of high frequency noise in the energy conservation, and the simulation quality was oscillating up and down over time. I spent days obsessively debugging both versions; I must have swapped the two sets of equations a half-dozen times.

After much reverting, re-reverting, and swearing at Claude, the issues in my ugly equations more-or-less solved themselves. The high frequency noise turned out to be floating point error, which was actually a good thing because it meant that my equations were converging to the limits of my precision. (The issue never came up during my thesis because those simulations weren't precise enough.) The oscillation in quality was due to an artifact of the coordinates, and proper convergence was restored once that was accounted for.

Unfortunately, I was never able to solve the energy leak in ChatGPT's version of the equations. I tried multiple different approaches, but eventually had to give up for the sake of my own sanity. In theory its solution was valid, and in theory there's no difference between theory and practice, but in practice, alas, there is.

## Results

It's not all bad news though. ChatGPT still helped me resolve multiple issues from my original thesis, and Claude proposed several further optimizations in my Rust code. It's a bit of an unfair comparison because I have much better hardware now than I did nine years ago, but the current code runs at 4x the level of accuracy and about 100x faster than my thesis code ever did.

Here's a video of black hole formation that's far flashier than anything I showed at my final thesis presentation. The sharp ring you see at the end is the event horizon forming, which completes the simulation. For a more detailed description of what's going on, [check out the full documentation here](https://github.com/clambro/black-hole-thesis/blob/main/docs/description.md).

(Video of black hole formation)

My professor was right that I'd never go back after I started making money, but no one said I couldn't drop by for a visit. Nine years ago, I chose MATLAB because I knew my limits. This time around, I chose Rust because I'd grown past them. I got more than I bargained for though. Instead of a quick learning exercise with an element of nostalgia, I fell into a month-long obsession with overconfident language models and simulations that may or may not converge depending on which side of the bed you wake up on. And I finally got an answer to that conversation from all those years ago: Yes, the compiled language approach was worth it; I just needed a decade of experience first.
