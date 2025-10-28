---
title: 'A Spaghettification Down Memory Lane'
subtitle: 'Revisiting my undergraduate thesis after nearly a decade.'
date: '2025-10-27'
tags: ['black-hole-thesis']
---

Coming from a non-software background makes me feel somewhat insecure about the things I never learned properly, like low-level languages. My only previous experience with a low level language was the trauma of using C++ for one of my algorithms courses in university without knowing what an IDE is (because computer science courses don't actually teach you programming). My coworker kept going on and on about a Rust project he was working on, and I thought it might be fun and good for my own development (ha!) to teach myself some lower level skills by implementing something myself in Rust.

I was debating what kind of project to work on when I was reminded of an anecdote from my university days. My undergraduate thesis was centered around computer simulations of black hole formation, and before I started the project my professor told me that I had to pick a programming language. He gave me two options: MATLAB or C. He strongly recommended C, saying that my simulation would run about 10x faster if I coded it right. I retorted that with my programming skills, even if it did run 10x faster it would take me 100x longer to write it, and went with MATLAB instead.

That was the right decision at the time, but it's been nine years since that conversation and over the years I've learned a thing or two about programming. Since graduating, I've worked in tech, and I occasionally catch myself reminiscing about my physics days. That same professor, after my thesis, offered me the chance to stay on with him and do a masters and a PhD. I told him I'd love that, but that I was flat broke and needed to get a job. He looked at me and said "ah, once you start making money you'll never come back."

He was right, of course. I've worked in tech since graduating and never looked back, but I'll always love physics, and there is a part of me that misses it. Putting those two threads together made it seem natural to try re-implementing my thesis project in Rust. I kept all my godawful MATLAB code, and I had my thesis itself to guide me through the half-remembered math. How hard could it be?

![We do this, not because it is easy, but because we thought it would be easy](../../../images/blog/2025/black-hole-thesis/thought-it-would-be-easy.jpg)

These thoughts planted the idea in my head initially, but the real motivation came when I plugged my thesis into ChatGPT and asked it for feedback. It pointed out a dozen or so potential improvements and mistakes I made, but then I asked it to consider a problem that neither my prof, nor I, nor the researcher whose work my thesis was based on had been able to solve at the time.

Without getting too far into the details, the equations of motion for this black hole simulation admit multiple valid forms depending on your choice of variables and coordinates. There's one set of equations that is well behaved numerically which would be the optimal choice for the solution, but there's no obvious way to force the required boundary conditions using that particular set of equations. For my actual thesis, this forced me to swap to a less well-behaved set of equations that slowed down and destabilized the simulation, leading to worse final results. ChatGPT considered the problem for about four minutes and came up with a change of variables that kept the nice equations and made the boundary conditions trivial to enforce. I now _had_ to re-implement the whole thesis if only to check whether or not ChatGPT was right!

The whole "learning Rust" part of the process was pretty simple, though that's largely because the code itself is very simple. I tried to minimize my use of LLM auto-complete to drill the syntax into my brain, but I only have so much self-control. The project was also a fun exercise in sticking far closer to an Uncle Bob style layer based separation than I've ever managed before. I generally prefer feature based separation, but layer based works well for a small project like this one.

I started the project by building a basic PDE solver for a 1D wave equation with provable fourth order convergence, which was pretty straightforward. My experience with compiled languages is pretty limited, but I was very impressed by the speed and safety of Rust. It flagged a bunch of issues that would have taken me ages to track down in C, and the code ran way faster than my original thesis code ever did. Once I verified that the basic wave equation stuff was working properly, I moved on to the equations of motion for the black hole itself. If you want to learn about this in detail, [you can check out the documentation here](https://github.com/clambro/black-hole-thesis/blob/main/docs/description.md).

(Maybe add a video of the wave simulation in here. Might be better to upload all my videos to youtube.)

I started immediately by trying to implement ChatGPT's suggested equations, and things _almost_ worked. The equations were valid and the simulation looked stable, but no black holes ever formed. Deeper analysis showed that there was something causing energy to leak out of the system, thus destroying our fourth order convergence. The equations were right, but the simulation was only running at first order accuracy; the error was way too high.

To confirm that I hadn't made some other mistake, I implemented the less nice equations that I used in my thesis and things worked a little better. Black holes were forming, but I was seeing a lot of high frequency noise in the energy conservation graphs, and the convergence bounced between second and fourth order. I spent days going back and forth on this; I must have swapped the two sets of equations a half-dozen times. I got obsessive and had to stop and remind myself that I wasn't _actually_ defending a thesis and should probably relax a bit.

In the end, the high frequency noise in the energy conservation graphs turned out to be floating point error, which never came up in my original thesis project because that code was not accurate enough for floating point rounding to contribute significantly to the noise level. This was nothing to worry about since there was no need to verify energy conservation beyond floating point precision. The oscillation in convergence between second and fourth order turned out to be caused by the coordinate singularity at the origin, and fourth order convergence was confirmed once that point was removed from the calculation.

Unfortunately, I was never able to solve the energy leak in ChatGPT's version of the equations. I spent a lot of time going back and forth on this, but eventually had to give up for the sake of my own sanity. In theory, its solution was valid, and in theory there's no difference between theory and practice, but in practice, alas, there is.

It's not all bad news though. ChatGPT still helped me resolve multiple issues from my original thesis code and Claude proposed several further optimizations in my Rust code. It's a bit of an unfair comparison because I have much better hardware now than I did nine years ago, but the final simulation code runs about 100x faster and at 4x the level of accuracy than my thesis code ever did.

Something something conclusion
