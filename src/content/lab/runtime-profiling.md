---
title: Runtime profiling for content pipelines
description: Measured bottlenecks in a markdown-to-PDF workflow and trimmed build time.
date: 2024-06-14
tags: ["performance", "tooling"]
status: published
featured: false
hypothesis: Most latency lives in image processing, so caching and parallelization should unlock quick wins.
build_notes: Added simple timing hooks, swapped sync operations for async batches, and cached remote images locally.
next_iteration: Replace the PDF generator with a streaming renderer to avoid blocking the queue.
---
After instrumentation on twenty sample documents, about sixty percent of the delay came from repeated image fetches. Caching brought the build down by roughly half before any deeper optimizations.
