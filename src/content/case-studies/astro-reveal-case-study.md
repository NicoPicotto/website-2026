---
title: "astro-reveal"
summary: "An open-source Astro integration for scroll reveal animations — zero JS by default, published on npm."
cover: "/images/astro-reveal.png"
client: "Personal · Open source"
year: 2026
tags: ["open source", "astro", "developer tools", "npm"]
draft: false
liveUrl: "https://astro-reveal.nicopicotto.dev/"
---

## The problem

I build a lot of sites with Astro, and I kept running into the same small friction. I wanted to animate sections on scroll — fades, slide-ins, the usual entrance movement — quickly and consistently across projects. But I didn't want to give up the reason I reach for Astro in the first place: it's light, and it ships almost no JavaScript to the client.

The existing options never quite fit that. The framework-agnostic libraries didn't really know about Astro — flashes of unstyled content, no re-initialization with View Transitions, animations that quietly broke after the first navigation. The other path was wiring up every animation by hand in GSAP, which is powerful but means re-solving the same problem on every project. Neither felt right for "I just want this to be light and work."

So instead of reaching for one of them again, I decided to build the thing I kept wishing existed.

## The process

The starting point was a bet: that modern CSS could carry most of this on its own. Native scroll-driven animations (`animation-timeline: view()`) let you tie an animation's progress to an element's position in the viewport — no library, no `IntersectionObserver`, no runtime JavaScript at all. That became the heart of the project and its strongest opinion: **the default mode ships zero JS.**

But a purist CSS approach has real limits — it can't do the classic "appear once and stay," and browser support is still uneven. Rather than pick a side, I designed the library around **two engines behind a single API**: a purist CSS mode by default, and an opt-in `IntersectionObserver` engine (~0.6KB) for when you need "reveal once and stay" or universal support. The same `data-reveal` attribute and `<Reveal>` component drive both, so switching is a one-line config change.

The interesting part wasn't the `fade-up` — it was the unglamorous problems underneath. Making flash-of-unstyled-content structurally impossible by keeping the hidden state inside a CSS feature query. Re-initializing on Astro's View Transitions so animations survive navigation. Watching for late-hydrated islands with a `MutationObserver`. Respecting `prefers-reduced-motion` by default, not as an afterthought. Those four are the headaches you'd otherwise re-fight in every project, and folding them into something installable was the actual value.

Then came the half of the work that has nothing to do with animation: turning a folder of code into a real product. A TypeScript build, a proper Astro integration that configures itself with `astro add`, a CI pipeline with automated versioning and changelogs, publishing to npm with provenance. And to prove the thesis rather than just claim it, I built the demo site **with the library itself**, running in purist mode — so the page that sells "zero JS" genuinely ships none. I added an interactive playground on top, where you can tweak every value live and copy the generated snippet.

## The outcome

`astro-reveal` is live on npm, installable with a single command:

```
npx astro add astro-reveal
```

It's open source under MIT, with a demo that shows every animation in motion and a playground to experiment with the values. What started as a personal itch is now a public artifact — something anyone building animated Astro sites can drop in and adjust, and something other developers can read, fork, or open issues against.

I'm honest about its scope: this solves a focused problem for a specific kind of project, not a universal need. The win I care about isn't a vanity download count — it's that the whole thing exists end to end, from a private annoyance to a maintained package with a real release pipeline and a site that demonstrates its own claim. If it saves another developer an afternoon, even better. And if someone tells me something feels off, that's exactly the kind of feedback that makes the next version better.

More than the library, this project is the clearest example I have of taking an idea all the way to production on my own — the design, the engineering, the tradeoffs, the publishing, and the small craft of explaining it well.
