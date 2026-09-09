# STATE — Jonah's Website
Last updated: 2026-09-08  ·  Load profile: low  ·  Type: web (Jekyll / al-folio)

## Purpose
Personal academic website (al-folio theme, GitHub Pages, https://jkudlerflam.github.io/)
+ a `paper_notes/` subsystem: detailed technical notes on 45 papers (2018–2026).
**Rich existing docs — see `CLAUDE.md` and `paper_notes/INDEX.md` before editing.**

## Map — key files
- `CLAUDE.md` — project context, stack, conventions (**start here**)
- `_config.yml` — Jekyll/Jekyll-Scholar/MathJax config, collections
- `_bibliography/papers.bib` — publications (Jekyll Scholar renders these)
- `_data/{cv,coauthors,venues,socials,repositories}.yml` — structured site data
- `_pages/` (about, cv.md, publications, talks.md); `_news/` (announcement posts)
- `paper_notes/INDEX.md` — index of the 45 notes (themes, collaborators, methods, timeline) — read this, not all notes
- `assets/pdf/CV.pdf` — CV mirrored from Overleaf

## Active threads
- [ ] **The bibliography drifts behind the CV, and it has now bitten four times (2026-09-08).**
  `_bibliography/papers.bib` is maintained by hand and does not learn about publication from the
  Overleaf CV. Entries found stale so far: *Emergent Mixed States* (keyed `2026JHEP...05..090K`
  while `journal={arXiv e-prints}`), *Randomized Measurement Toolbox* ("(accepted)" after PRL
  publication), *Algebraic Observational Cosmology* ("Physical Review D (accepted)" after
  PRD 114, 045007), and *It costs nothing to teleport...* (`arXiv e-prints` after IJMPD 34, 2543002).
  **Check with:** compare `journal` here against the trailing reference in
  `cv-mirror/papers_slac.tex` per `eprint` — a CV entry with a volume/page while the bib says
  arXiv or "(accepted)" is stale. Do this whenever a paper is published.
  **Resolving a new DOI:** Crossref (`api.crossref.org/works/<doi>`) is the fastest source, but
  **new-style APS DOIs may be absent from it** (`10.1103/gbv2-n513` was); INSPIRE
  (`inspirehep.net/api/arxiv/<id>`) covers those. **APS itself returns 403 to scripted fetches.**
  Also set `month` — several entries kept the arXiv posting month and displayed the wrong date.
  As of 2026-09-08 exactly three entries correctly lack a journal reference: the Ouyang student
  paper and *Vacua and infrared radiation* (under review) and *Wormholes and Averaging over N*
  (preprint, and one of the six selected).
- [ ] **Prettier workflow now passes (2026-08-14, commit b2e98d8).** It had failed on every push
  since at least 14 July, always for reasons unrelated to the triggering commit, so a red X on a
  push here has been meaningless noise. Two causes, both handled:
  1. **`assets/json/resume.json` is invalid JSON** — seven keys (`highlights` x2, `courses` x5) have
     no value, so `prettier --check` aborts with exit 2. **Do NOT repair it.** `_layouts/cv.liquid`
     branches on `site.data.resume` (line 4 `{% unless site.data.resume %}`, line 82 the JSON-Resume
     loop), so a parseable file would replace the `/cv/` PDF-download page with a rendered
     JSON-Resume built from that stale, half-empty data. It is in `.prettierignore` with the reason
     written inline. If the JSON-Resume path is ever wanted, populate the file properly *and* expect
     the CV page to change.
  2. Eight tracked files were genuinely unformatted; formatted.
  **`_pages/talks.md` is also in `.prettierignore`, deliberately.** Prettier parses it as CommonMark
  and escapes Kramdown inline attribute lists, turning `{:target="_blank"}` into `{:target="\_blank"}`
  on every recording link. Verified post-deploy: 32 `target="_blank"` intact, zero escaped. Do not
  remove that exclusion or run `prettier --write` on that file.
  **Local `prettier --check` reports ~50 extra failures in `paper_notes/`, `STATE.md`, `CLAUDE.md`
  and `website-update/` — all untracked, so CI never sees them.** Intersect with `git ls-files`
  before believing the count.
- [ ] **Selected publications rebalanced for the faculty search (2026-08-14).** `selected={true}` in
  `_bibliography/papers.bib` now marks six, chosen so every claim in his cover letters has a paper
  on the landing page behind it: **Chen** (PRB 111, 014311 — undergraduate first author, published,
  prize), **Ouyang** (arXiv:2607.01320 — second undergraduate paper), **Witten** (JHEP 05 090),
  **solo PRL** (126, 171603), **Vijay/Raj/Kudler-Flam** (PRL accepted — experiment-facing, and the
  project promised in the 2023 Williams application), and **Generalized black hole entropy** (PRD
  111, 025013 — program flagship). Two undergraduate papers, one Witten, one solo, one
  experiment-facing, one flagship; five of six published or accepted.
  **Of the two Witten papers, only *Wormholes and Averaging over N* is selected** (settled
  2026-08-14 after going 5 -> 6 -> 7 -> 6). JKF rates it the best paper of his career and it is his
  colloquium centerpiece; *Emergent Mixed States* (JHEP 05 090) is deselected despite being the
  published one. He judged seven too many and chose the paper he values over the one with a journal
  reference. Do not "correct" this by swapping in the published paper. Consequence accepted: two of
  the six are preprints (Ouyang, Wormholes).
  **Bug fixed in the same pass:** the Emergent Mixed States entry was still `journal={arXiv
  e-prints}, year=2025` although published as JHEP 05 090 (2026), so the front page displayed a
  published Witten paper as a preprint. **Watch for this class of staleness: bib entries keyed to a
  journal (e.g. `2026JHEP...05..090K`) whose `journal` field still says arXiv.**
- [ ] **The published CV is now the LIBERAL-ARTS variant (2026-08-14).** `assets/pdf/CV.pdf` is built
  from `main_slac.tex`, not `main.tex`, because all four of JKF's live applications are to liberal
  arts colleges and the CV a committee finds when it looks him up should corroborate his letters:
  undergraduate research mentorship and teaching first, undergraduate coauthors daggered. Same
  publications and talks, reordered. **If he applies to R1s, revisit this.** Rebuild with
  `pdflatex main_slac.tex` (×2) in the Overleaf CV repo, then copy `main_slac.pdf` →
  `assets/pdf/CV.pdf`. The previous PDF was a 13 July build of `main.tex` and had five wrong
  publication statuses, including the Witten paper as "Under Review" when it was in JHEP 05 090.
- [ ] **`_data/cv.yml` is EMPTY (0 bytes).** The `/cv/` page therefore renders no structured content
  and is purely the PDF download button. Swapping the PDF is the whole job; do not hunt for a
  rendered CV to update. (The Faculty Applications `STATE.md` says to keep cv.yml in sync with the
  CV, which is stale advice while the file is empty.)
- [ ] **The about page's student invitation is load-bearing for the Williams application.** It reads
  "If you're a student interested in theoretical physics, I'm always happy to chat, so please feel
  free to reach out." Two students found it and wrote cold, and JKF's Williams letter, research
  statement, and teaching statement all cite it. **JKF chose to keep this wording (2026-08-14) and
  had the application text changed to match it** rather than the reverse. Do not soften or remove
  this line while those applications are live.
- [ ] PTI paragraph says "Since 2023, I've been volunteering". Accurate as intended: JKF took Spring
  and Fall 2026 off for parental leave and plans to return Spring 2027, so the present tense stands.
- [ ] talks.md maintenance (new recorded talks); CV updates (synced from Overleaf)
- [ ] bibliography expansion (new papers → papers.bib); _news/ release posts
- [ ] paper_notes is a May-2026 snapshot — papers after that not yet added
- [ ] Teaser previews: ~all papers now have `preview=` in papers.bib → `assets/img/publication_preview/{arxivID}.png`. Specific figures were hand-picked per Jonah's requests and rendered **from each paper's PDF** (PyMuPDF crop) — NOT from LaTeXML SVG, which drops in-figure text labels. Equations/tables also rendered from PDF/HTML. Scripts in scratchpad: `pdf_fig.py` (figure N by caption→drawings cluster), `fig_extract.py` (old SVG path, superseded). Preview display height capped via `.preview{max-height:9rem}` in `_sass/_base.scss`.
- [ ] News is its own page: `_pages/news.md` (nav_order 3) renders ALL items via `_includes/news.liquid`; homepage news disabled (`about.md` announcements.enabled:false). Nav order: about, publications(2), news(3), talks(4), cv(5).
- [ ] News teasers live in the LEFT column under the date: each `_news/*.md` has `image:`/`image_alt:` frontmatter (not inline `<img>`); `news.liquid` renders date+thumbnail in the `<th>`. Height capped via `.news img{max-height:8rem}`. Emoji scheme: 🚨 arXiv, 📄 journal pub, 🥈/🏅 awards, 🎉 congrats, 💭 IAS video. People photos: `assets/img/hyaline.png` (name links hyalinec.wordpress.com), `assets/img/brandeis.jpg` (Bowen→Brandeis), `assets/img/ias_glimpse.jpg`.
- [ ] Social icons on: `social:true` in about.md; RSS icon removed by COMMENTING OUT `rss_icon` in `_data/socials.yml` (social.liquid renders on key presence, so `false` doesn't hide it).

## ⚠️ Git gotcha (read before pushing)
- 2026-07-13: local checkout was a **stale detached HEAD** (April state) while remote `main` was far ahead (published-JHEP updates, CV date, talks/news fixes). ALWAYS `git fetch origin main` and reconcile onto it before editing/pushing — do not push the local base blindly. Deploy = GitHub Action `deploy.yml` on push to `main` (builds → `gh-pages`). Local `bundle exec jekyll build` FAILS here (system Ruby 2.6 < bundler 2.6.6's Ruby ≥3.1 requirement) — rely on the Action for build verification.
- Overleaf CV repo: `git clone https://git.overleaf.com/5b0226fc9598c51beab8b79d` works (creds cached), push works. CV built with `pdflatex main.tex` (×2); copy `main.pdf` → `assets/pdf/CV.pdf` to sync the website mirror. Modular tex: `papers.tex`, `talks.tex` (main.tex includes `papers.tex`, NOT `list_of_publications.tex`).

## Invariants & conventions
- Build: `jekyll serve` (port 4000); deploy: auto on push to GitHub Pages
- New paper: add to `_bibliography/papers.bib` → auto-renders publications
- CV: update `_data/cv.yml` (+ mirror `assets/json/resume.json`)
- Content markdown w/ `$…$`/`$$…$$` (MathJax site-wide)

## Do NOT re-read unless changed
- `_site/**`, `assets/img/**`, `assets/js/**`, `node_modules/**`, `readme_preview/**`, `lighthouse_results/**`
- `README.md` is upstream al-folio boilerplate (not Jonah-specific) — skip

## Run / build
- `jekyll serve`

## Depends on / overlaps
- `paper_notes/INDEX.md` is a **shared knowledge base** for every physics project — reuse it for paper context instead of re-deriving. CV overlaps **Faculty Applications** `cv-mirror`.

## Deeper memory
- `CLAUDE.md` (conventions, paper_notes template); `paper_notes/INDEX.md` then a single `{arXiv_ID}.md` on demand.
