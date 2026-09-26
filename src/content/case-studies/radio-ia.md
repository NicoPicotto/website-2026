---
title: "Radio IA: a 24/7 AI Radio Station"
summary: "A personal project born from a simple frustration — no good calm-music streams left with the news check-ins I used to enjoy — solved by building an autonomous radio station run entirely by two AI-generated hosts."
client: "Personal Project"
cover: "/images/radio-ai.png"
year: 2026
tags: ["Liquidsoap", "Gemini", "Kokoro TTS", "Docker"]
draft: false
liveUrl: "https://stream.nicopicotto.dev/"
---

## The Problem

I like listening to calm, license-free music while I work, and every once in a while I want a quick news check-in without having to open a browser tab. The internet radio streams I used to rely on for exactly that had disappeared one by one, and nothing quite replaced them.

Rather than settle for a generic playlist app, I saw an opportunity: what if the "hosts" who introduced songs, gave the time, and commented on the weather and the news weren't recordings or a live DJ, but a fully autonomous system generating fresh content on its own, forever? It was also, honestly, an excuse to learn a stack that was almost entirely new to me — real-time audio streaming, text-to-speech pipelines, and orchestrating multiple services to work together without anyone at the console.

The result was **Radio IA**: a non-commercial, 24/7 online radio station soundtracked by royalty-free music, with two synthetic radio hosts — Dora and Cacho — who banter between songs using real, live context.

## The Process

### Designing the hosts

Radio needs personality, so before writing any code I designed two characters instead of a generic text-to-speech voice. Dora is a chatty, opinionated woman from a small town in Córdoba who hosts the show and doesn't know she's an AI. Cacho is her husband, just as gossipy, who can't resist a bad dad joke that Dora tolerates but always laughs at anyway. Giving them a clear dynamic mattered more than any single line of dialogue — it's what makes generated banter feel like an actual show instead of narration.

### Building the content pipeline

The core of the project is a generator that stays a step ahead of the live broadcast, always keeping a fresh segment ready to go. Each cycle:

1. Gathers real-world context: the local time, current weather from Open-Meteo, and occasionally a news headline pulled from Google News RSS for Córdoba.
2. Sends that context to **Gemini 2.5 Flash**, which writes a short back-and-forth script between Dora and Cacho reacting to it in character.
3. Converts each line into speech with **Kokoro**, a self-hosted TTS engine, using a distinct voice for each host.
4. Stitches the resulting clips into a single audio file, ready to be picked up by the broadcast engine.

### Orchestrating the whole pipeline

The hardest part wasn't any single integration — it was making the full chain (context gathering → script generation → voice synthesis → live streaming) run indefinitely, unattended, without ever going silent. Any one of the external dependencies (the weather API, the news feed, or the LLM) could fail on a given cycle, so the system needed to degrade gracefully at every step rather than crash the whole loop. If a source isn't available, Radio IA simply skips that piece of context and keeps producing dialogue instead of interrupting the broadcast.

On the audio side, **Liquidsoap** handles the actual radio engine — mixing music with the dynamically generated segments and handling clean transitions between them — while **Icecast** takes care of the live stream itself. The two run as Docker services alongside Kokoro, keeping the whole audio stack self-contained and reproducible.

## The Outcome

Radio IA is live and running 24/7, deployed to a VPS, streaming continuously at [stream.nicopicotto.dev](https://stream.nicopicotto.dev/). Two AI hosts introduce music, react to the weather, and comment on the news around them in real time, with no human operating the console.

Beyond the working product, the project doubled as a hands-on crash course in a stack largely new to me: real-time audio engines, self-hosted TTS, and building systems resilient enough to keep running gracefully even when one of their moving parts fails. It's a small, playful project, but one that's been running non-stop since deployment — proof that the pipeline holds up outside of a local dev environment.
