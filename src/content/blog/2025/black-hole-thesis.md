---
title: 'A Spaghettification Down Memory Lane'
subtitle: 'Revisiting my undergraduate thesis after nearly a decade.'
date: '2025-10-27'
tags: ['black-hole-thesis']
---

Coming from a non-software background sometimes makes me feel insecure in my career. There are tons of things that I had to learn the hard way, or never learned at all, like low-level languages. My only previous experience with them was the trauma of using C++ for one of my algorithms courses in university. This was before I learned what an IDE is, and needless to say I did not enjoy the experience.

More recently, one of my coworkers was talking about a Rust project that he was working on. The language's mathematical foundations piqued my interest. I thought it might be fun and good for my own personal development to build my own little Rust project. Perhaps I could pick up some of those skills that I never properly learned in school.

## Ancient History

I was debating what exactly to build when I remembered an anecdote from my university days. For my undergraduate thesis, I built computer simulations of black hole formation. Before I started the work, my professor gave me the choice of writing my code in MATLAB or C. He strongly recommended C, suggesting that it would run about 10x faster than MATLAB if I coded it right. I retorted that with my programming skills, even if it did run 10x faster it would take me 100x longer to write it. So I went with MATLAB.

That was the right decision at the time. The project went well, and at its conclusion my professor offered me the chance to stay on with him and do a masters and a PhD. I told him that I'd love to, but that I was flat broke and needed to get a job. He responded with "ah, once you start making money you'll never come back."

He was right, of course. I've worked in tech since graduating and never looked back, but I'll always love physics, and there is a part of me that misses it. Reminiscing about those times, I thought it would be a great idea to try re-implementing my thesis project in Rust. I still had my godawful MATLAB code; I had my thesis itself to guide me through the half-remembered math and physics, and I now had nearly a decade of professional programming experience under my belt. How hard could it be?

![We do this, not because it is easy, but because we thought it would be easy.](../../../images/blog/2025/black-hole-thesis/thought-it-would-be-easy.jpg)

## Raising the Stakes

To help plan out the project, I plugged my thesis into ChatGPT and asked it for feedback. It pointed out a dozen or so mistakes that I'd made and potential improvements, many of which I had been acutely aware of at the time of writing. Out of curiosity, I then asked it to consider a problem that neither my prof, nor I, nor the researcher whose work my thesis was based on had been able to solve at the time.

The details of this would take us too far afield, but briefly, there are multiple valid forms that the equations of motion for this black hole simulation can take depending on your choice of variables and coordinates. There's one set of equations that is well-behaved numerically, which would be the obvious choice for the solution. The problem is that there's no way to enforce the required boundary conditions using that nice set of equations. For my thesis, this forced me to swap to a less well-behaved set of equations that slowed down and destabilized the simulation, leading to worse final results.

ChatGPT considered the problem for about four minutes and came up with a change of variables that kept the equations well-behaved, but made the boundary conditions trivial to enforce. I asked it to break down its analysis in detail and it looked legitimate, at least to my amateur eyes. I couldn't stop thinking about it. I now _had_ to re-implement the whole thesis if only to check whether or not ChatGPT's solution was right!

## Building the Solver

The whole "learning Rust" part of the process wasn't too hard, though that's largely because the structure of the code isn't very complex. I tried to minimize my use of LLM auto-complete to drill the syntax into my brain, and I stuck closely to a "Clean Architecture" style layer-based separation to improve my software design skills.

I started, as I did in my thesis, with a warm up project to build a basic solver for a 1D wave equation. This warm up allowed me to iron out the overall structure of the code, as well as most of the error analysis. The black hole equations are much more complicated than this simple wave equation, but the high level architecture required to solve both is very similar.

Once I'd gotten over my residual trauma from university, I found myself impressed by the speed and safety of Rust. It took me a couple of days to get the solver working to the required degree of accuracy, but I didn't run into any major roadblocks. The borrow checker flagged a bunch of issues that would have taken me ages to track down in C, and the code ran about 100x faster than my MATLAB solver ever did. Here's a video of the working wave equation solver in action:

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/6SsDkPbTrOk" title="Wave simulation video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Was ChatGPT Right?

Once I verified that the basic solver was working properly, I immediately tried to implement ChatGPT's version of the black hole equations.

It _almost_ worked.

The equations were valid, and the simulation looked stable, but no black holes ever formed. Deeper analysis showed that energy was leaking out of the system, thus invalidating the physics. The equations were right, but the simulation error was way too high.

To confirm that I hadn't made some other mistake, I implemented the uglier equations that I used in my original thesis code, and things worked a little better. Black holes were forming, but I was seeing high frequency noise in the energy conservation, and the simulation accuracy was oscillating up and down over time. I spent days obsessively debugging both versions. I must have swapped the two sets of equations a half-dozen times, and I tried several different workarounds, numerical tricks, and stabilization techniques proposed by ChatGPT.

After much reverting, re-reverting, and swearing at my LLM assistants, I did manage to get the ugly equations working properly. As it turned out, the two issues I was seeing weren't really issues at all. The high frequency noise was just floating point error, which was actually a good thing because it meant that my equations were converging to the limits of my precision. The oscillation in quality was due to an artifact of the coordinates, and proper convergence was restored once that was accounted for.

Unfortunately, I was never able to solve the energy leak in ChatGPT's version of the equations. I really wanted it to work, but eventually had to remind myself that I wasn't _actually_ defending a thesis and gave up for the sake of my own sanity. In theory its solution was valid, and in theory there's no difference between theory and practice, but in practice, alas, there is.

## Results

ChatGPT's solution didn't pan out, but the project was still an overall success. I resolved multiple issues from my original thesis, got much better final results, and even learned a bit about low-level programming. Between better hardware and better code, I now have a simulation that runs at 4x the level of accuracy and about 100x faster than my thesis simulations ever did, and the code is much more readable.

Here's a video of black hole formation that's far flashier than anything I showed at my final thesis presentation. The sharp ring you see at the end is the event horizon forming. For a more detailed description of what's going on (and more videos!) you can check out [the full documentation here](https://github.com/clambro/black-hole-thesis/blob/main/docs/description.md).

<div class="video-container">
  <iframe src="https://youtube.com/embed/Eq4IcRezF-0" title="Wave simulation video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

My professor was right that I'd never go back after I started making money, but no one said I couldn't drop by for a visit. Nine years ago, I chose MATLAB because I knew my limits. This time around, I chose Rust because I'd grown past them. I did get more than I bargained for though. Instead of a quick learning exercise with an element of nostalgia, I fell into a month-long battle with overconfident language models and finicky simulations that may or may not converge depending on which side of the bed you woke up on. And I finally got an answer to that conversation from all those years ago: Yes, the compiled language approach was worth it; I just needed a decade of experience first.
