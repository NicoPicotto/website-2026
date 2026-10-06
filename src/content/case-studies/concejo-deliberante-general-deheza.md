---
title: "Concejo Deliberante de General Deheza"
summary: "A Webflow site for a city council in Argentina, built around a searchable archive of ordinances that non-technical staff maintain themselves."
cover: "/images/concejo-deliberante-general-deheza.png"
client: "Municipalidad de General Deheza"
year: 2025
tags: ["webflow", "finsweet attributes", "public sector"]
draft: false
liveUrl: "https://www.concejomgd.gob.ar/"
---

## The problem

General Deheza is a city in Córdoba, Argentina, and its Concejo Deliberante is the city council: the body that writes local law. Everything it passes becomes an ordinance, which is a public document by definition. In practice, none of it was online. The council had no website, so a resident had no way to look up an ordinance from home.

The Municipality reached out because of an earlier project. In 2022 I built the council site for General Cabrera, the neighbouring city, and it had been well received and made that council's work easier to follow. Deheza wanted the same thing, with two priorities: a news section and, above all, a _Digesto_ — the archive of ordinances — where anyone could search for a document and download it.

The catch was that the site had to work for two non-technical audiences at once. On one side, residents trying to find a specific ordinance, often without knowing its number. On the other, municipal staff who would upload and maintain every new ordinance themselves, with no developer in the loop. And the client was in a hurry.

## The process

I recommended **Webflow**, and the Municipality took the recommendation. The reason was the second audience. Webflow's CMS lets people who aren't technical see and manage content in a way that's simple and intuitive, and that mattered more here than any front-end preference of mine. An ordinance became a CMS item with a name, a number, a type, a topic and its PDF. Publishing a new one means filling in a form.

The timeline shaped the design decision. Rather than design the site from scratch, I guided the client toward buying a template: I looked for options that suited a public institution, proposed a shortlist, and built the site on the one they picked. It isn't the most glamorous choice, but it was the right one for a client who needed to be online quickly, and it left the time for the part that actually mattered.

That part was the _Digesto_. I built the search with **Finsweet Attributes** on top of the Webflow CMS, with no custom backend to maintain. Residents can search by name or by number, filter by type — ordinance or decree — and narrow things down by topic, from public works to transit to the municipal budget. A counter shows how many results match, one click clears every filter, and each result links straight to the PDF. Someone who only knows that an ordinance was "something about parking" can still find it.

The hardest part had nothing to do with design or code. It was the initial data entry. I was lucky in one respect: the previous administration had already digitised the archive, so every ordinance arrived as a PDF. But that was also the problem. If the records had been plain text fields, I could have prepared a CSV and imported them in bulk. Because each one carries a file, loading the archive was largely manual work. Webflow didn't have an MCP server at the time; today I'd automate most of that step.

## The outcome

The site is live at [concejomgd.gob.ar](https://www.concejomgd.gob.ar/), and the council's staff load new ordinances on their own. That was the real brief: an archive that keeps growing without anyone having to call me.

I don't have analytics or usage numbers to point to, and I won't pretend otherwise. The one signal I do have is that the Municipality got back in touch after launch to ask about adding new filters to the _Digesto_. People don't ask for more ways to search something nobody is searching, so I read that as a good sign.

What I value most about this project is how unflashy it is. There's no ambitious animation and no custom design system, just a public archive that residents can search and that the people responsible for it can keep up to date. It's also the second council site I've built, and it came to me because the first one worked. For a project whose whole purpose is making local government easier to follow, that feels like the right kind of proof.
