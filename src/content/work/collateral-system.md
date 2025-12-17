---
title: Structured collateral system for complex RFP cycles
description: Built a repeatable content system that cut RFP turnaround time and raised sales adoption.
date: 2023-06-15
tags: ["communications", "enablement", "content"]
status: published
featured: true
problem: Sales teams were spending too much time chasing the right narratives and assets for RFPs, creating inconsistent responses and slow cycles.
approach: Audit every live RFP, map questions to source truth, and build a governed library with templated narratives tied to user journeys.
outcome: Reduced RFP response time by double digits and increased use of approved collateral across teams.
tools: ["Confluence", "Notion", "Figma", "Adobe", "CMS"]
links:
  - label: Narrative library outline
    url: https://pruning-my-pothos.github.io/verse/narrative-library
  - label: Collateral templates
    url: https://pruning-my-pothos.github.io/verse/collateral-templates
---
## Context and constraint
- Enterprise RFPs spanned multiple products, industries, and compliance asks. Teams kept rewriting “source truth” because ownership was fuzzy.
- Stakeholders: Sales, Solutions, Product, Legal, Security. I needed a system that respected approval paths without slowing velocity.
- Success bar: faster response time, single-voice narrative, and higher reuse of approved collateral.

![Diagram showing RFP intake moving to question mapping, governed narratives, journey-based templates, a review cadence, and a feedback loop back to intake](/prose/images/collateral-flow.svg)

## Objectives
- Cut response time and rework by standardizing reusable narratives and evidence.
- Make ownership and freshness visible so reviewers focus on nuance, not sourcing.
- Align templates to the buyer journey to keep responses persuasive, not just compliant.

> Anchor everything to the source of truth and make ownership visible; trust follows.

## System at a glance
- **Intake → mapping:** Every question is mapped to its source doc and an accountable owner.
- **Narrative library:** Governed building blocks (value, proof, compliance, implementation).
- **Templates:** Built around buyer journey stages, not product feature lists.
- **Governance loop:** Lightweight reviews, freshness dates, and usage notes.

## Playbook: intake to publication
1) **Audit** – Reviewed the last 25 RFPs; clustered questions by theme, industry, and capability.  
2) **Source mapping** – Linked each cluster to product docs, security packs, and implementation proof points; captured the owner and review cadence.  
3) **Narrative blocks** – Wrote approved blocks with fields for `owner`, `last reviewed`, `usage notes`, and `allowed modifications`.  
4) **Journey templates** – Composed templates that track the buyer path (problem framing → differentiation → proof → delivery → risk).  
5) **Enablement loop** – One live deal, one dry run, one retro. Updated the library after each pass.  

### Template architecture (excerpt)
<table class="rich-table">
  <thead>
    <tr>
      <th>Section</th>
      <th>Purpose</th>
      <th>Evidence to attach</th>
      <th>Owner</th>
      <th>Review cadence</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Problem framing</strong></td>
      <td>Ground the ask in customer context and constraints.</td>
      <td>Industry datapoint + customer quote.</td>
      <td>Solutions</td>
      <td><span class="table-chip success">Quarterly</span></td>
      <td><span class="table-chip neutral">Fresh</span></td>
    </tr>
    <tr>
      <td><strong>Differentiation</strong></td>
      <td>Contrast with status quo and competitors.</td>
      <td>2–3 bullets + visual that shows the delta.</td>
      <td>Product Marketing</td>
      <td><span class="table-chip success">Quarterly</span></td>
      <td><span class="table-chip warning">Review scheduled</span></td>
    </tr>
    <tr>
      <td><strong>Proof</strong></td>
      <td>Make the claims credible.</td>
      <td>Case study + metric + reference contact.</td>
      <td>Customer Success</td>
      <td><span class="table-chip success">Monthly</span></td>
      <td><span class="table-chip neutral">Fresh</span></td>
    </tr>
    <tr>
      <td><strong>Delivery & risk</strong></td>
      <td>Show feasibility, controls, and who is accountable.</td>
      <td>Implementation plan + security FAQ + DPA summary.</td>
      <td>Delivery / Security</td>
      <td><span class="table-chip alert">Monthly</span></td>
      <td><span class="table-chip alert">Locked</span></td>
    </tr>
  </tbody>
</table>

### Governance and freshness
- **Review cadence:** Critical blocks monthly, standard blocks quarterly, compliance on every policy update.
- **Change log:** Each update notes why it changed and what downstream templates were touched.
- **Single owner per block:** Clear contact for escalations; avoids “who approved this?” delays.

### Enablement and navigation
- **Findability:** Library is indexed by industry, capability, and buying stage; every block links back to its source doc.
- **RFP-ready views:** Curated “packs” for common segments (enterprise SaaS, regulated industries, public sector) with pre-attached evidence.
- **Review lanes:** Legal/Security review only the scoped sections; Product reviews differentiation; Delivery reviews feasibility.

<div class="callout info">
  <strong>Review rhythm:</strong> Stagger critical content (security, compliance) with monthly checks; keep differentiation blocks on a quarterly cadence to avoid churn.
</div>

<div class="callout warning">
  <strong>Anti-pattern:</strong> Avoid copying vendor boilerplate into every response. It bloats review time and erodes trust when details drift from the source-of-truth documents.
</div>

## Outcomes
- Turnaround time dropped by ~15% in quarter one because writers pulled governed blocks instead of reinventing copy.
- Adoption rose: approved narrative reuse outpaced ad hoc copy within two cycles.
- Reviewer focus shifted to nuance (fit, risk) instead of sourcing, reducing revision loops.

## Signals I watched
- Reuse rate of approved narratives vs. ad hoc copy.
- Time from request to reviewer-ready draft.
- Revision count tied to sourcing issues vs. argument quality.
- Freshness drift (blocks past review date).

## What I’d refine next
- Automate freshness reminders tied to source-system changes (product releases, policy updates).
- Add lightweight analytics on which blocks close deals fastest per segment.
- Build a “red team” review for the most sensitive security/compliance statements.

## Assets
- Narrative library outline → [Verse: Narrative library](https://pruning-my-pothos.github.io/verse/narrative-library)
- Collateral templates → [Verse: Collateral templates](https://pruning-my-pothos.github.io/verse/collateral-templates)
