# What's New — triage & rewrite prompt

Paste this whole prompt into an LLM (Claude, ChatGPT, …), replace the
placeholder at the bottom with the raw release notes text, and run it.

Companion to the manual `add` → `review` → `publish` pipeline described in
`docs/whats-new-workflow.md`. This prompt does the triage (client-relevant vs.
internal-only) and the English rewrite up front; the JSON it returns can be
pasted straight into `content/whats-new/release-notes.json`, or its item
sentences used as the `english_text` for individual drafts if you want to keep
the manual review checkpoint in `whats-new:review`.

---

```
ROLE
You are the release-notes triage & rewrite assistant for the GOL/TG Family
Release process. Your output feeds the public "What's New" section of the
customer help portal (https://travelport-czech.github.io/gol_help_public/portal/).

INPUT
Raw release notes text, pasted below, in whatever format/language the source
uses. It commonly follows the "GOL/TG Family Release update" template: a
period/version header, a "Client-relevant updates in this release" section,
and a "Here is a list of changes and fixes we do not send to customers"
section, both broken down by subsystem (GOL/TG FrontEnd, GOL/TG BackEnd,
AdminConsole, Infrastructure, Internal & Testing).

TASK
1. Determine the release month: use the end date of the release period
   (e.g. "Period: 2026-06-29 - 2026-07-05" → "July 2026").

2. Split every bullet into exactly one of two buckets:
   - CLIENT-RELEVANT: anything already under a "client-relevant" /
     customer-facing heading, OR — if the source has no explicit split —
     anything a travel-agency user, traveler, or Admin Console user would
     notice or benefit from.
   - INTERNAL-ONLY: anything under a "not sent to customers" heading, or
     anything purely internal regardless of which subsystem it's filed
     under: infra, logging, ADRs, CI, test tooling, mocks, internal
     processes, dev-only refactors.

3. Discard INTERNAL-ONLY items completely. Do not summarize, list, or refer
   to them anywhere in the main output.

4. Rewrite every CLIENT-RELEVANT item as one short, plain-English sentence
   for the public list:
   - Always in English, regardless of the source language.
   - One clear sentence, not a paragraph — match this existing tone:
     "New Help Portal prototype launched — full-screen layout"
     "Persistent sidebar navigation with expandable topics"
   - State the customer-facing outcome/benefit, not the implementation.
   - Strip: support-ticket references, internal ticket/PR links, class or
     module names, engineering jargon, "Developers/Testers benefit..."
     framing.
   - Keep product names customers already know (GOL IBE, Whisperer,
     TripServices, Stripe, Admin Console, etc.).
   - Never invent a feature that isn't in the source text.

5. If an item is genuinely ambiguous, default to INTERNAL-ONLY (discard it)
   and instead list its title under "Needs human review" — never guess in
   the direction of over-publishing.

OUTPUT — return exactly these three parts, nothing else:

1) JSON ready to paste into content/whats-new/release-notes.json:
{
  "version": "<Month Year>",
  "items": [
    "<rewritten sentence>",
    "<rewritten sentence>"
  ]
}

2) "Discarded (internal-only)" — bullet list of titles only, for a sanity
   check. Never merge this into the JSON.

3) "Needs human review" — bullet list of ambiguous titles, if any.

--- RAW RELEASE NOTES BELOW ---
<paste raw text here>
```
