---
title: Incident communications that calm the room
description: Built a reusable playbook and tooling for exec-ready updates during critical incidents.
date: 2024-07-22
tags: ["operations", "communications", "process"]
status: published
featured: true
problem: Incident updates were noisy, inconsistent, and hard for executives to trust.
approach: Design a simple template, automate status pulls, and set a cadence that teams can follow under pressure.
outcome: Pilot runs brought time to first clear update from 30 minutes to under 10 for high-severity incidents, with higher confidence across stakeholders.
tools: ["Notion", "Slack", "Figma", "Python"]
links:
  - label: Update template
    url: https://example.com/template
  - label: Slack bot snippet
    url: https://example.com/slackbot
---
I drafted a message architecture that separated facts, risks, and asks. Every update fit on a single screen so executives could scan without scrolling.

To avoid manual status gathering, I wired a lightweight bot that pulled service health, on-call status, and customer impact notes into the template. The bot also nudged incident leads at the agreed cadence and blocked posts that missed required fields.

The combination of structure and automation cut noise, created trust, and freed engineers to focus on mitigation instead of reporting.
