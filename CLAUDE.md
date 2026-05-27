# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Framework

This site is built with **Fumadocs**. Before changing layout, navigation, themes, or MDX/content config, consult the official documentation:

- **Fumadocs docs:** https://www.fumadocs.dev/docs

Do not invent or modify Fumadocs configuration based on guesses or by reading `node_modules/`. Use the official docs above as the source of truth.

## Agent skills

### Issue tracker

Issues live in GitHub Issues on `MattiaIppoliti/ai-for-global-public-diplomacy-and-sustainable-development`, accessed via the `gh` CLI. See `src/agents/issue-tracker.md`.

### Triage labels

Canonical triage vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `src/agents/triage-labels.md`.

### Domain docs

Single-context repo: one `CONTEXT.md` and one `docs/adr/` at the repo root. See `src/agents/domain.md`.
