---
layout: post
title: "HTTPS on github pages"
description: ""
category: Github
tags: ['security', 'github']
---

So I got an email from Steven Goh at Kloudsec, who asked me to try Kloudsecs
new feature for GitHub Pages. GitHub Pages doesn't support HTTPS on custom
domains (yet), and having support for that would be quite nice. The configuration
was quite easy and since they use letsencrypt, completely free.

One issue is that you can mitmd by them, so I would maybe not trust this system completely,
although Steven said they are working on complete end-to-end encryption, which
solves this completely. =)
