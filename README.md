# Alex Mercer — Photographer Portfolio

A static, no-build-step portfolio website blending the **Lens** (Framer) structure
with the **editorial minimal** styling of justinle.xyz.

## Pages

| File            | What it is                                            |
| --------------- | ----------------------------------------------------- |
| `index.html`    | Home — bento hero, featured projects, frames marquee, services, testimonials, contact card |
| `projects.html` | Project index with hover image previews               |
| `project.html?id=…` | Project detail (rendered from `js/data.js`) with lightbox |
| `gallery.html`  | Lens-style bento image grid with lightbox              |
| `about.html`    | Meet me — bio + capabilities                           |
| `contact.html`  | Inquiry form + contact details                         |

## Preview locally

```bash
cd photographer-portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

(A server is needed for `project.html?id=…` to work cleanly.)

## Photos

The site runs on the **November 24 session** — the real photos in
`images/photos/` (55 shots, deduped, renamed `2026-11-24_NNN.jpg`, the
WhatsApp batch from "Video …3.26.42 PM(2).mp4" through "Image …5.26.35 PM.jpeg")
and 4 clips in `images/videos/` (with auto-generated poster frames).

Everything is wired from **`js/data.js`**:

- `PROJECTS` — currently one shoot, *The November Session* (rename/retag
  freely). Remove any image by deleting its line from the `images` array;
  the projects index, detail page and gallery all update automatically.
- `VIDEOS` — the clips shown in the gallery's "Motion" section.
- `GALLERY` — every photo for the gallery grid (kept in sync automatically).

Also update:

- **Name/branding** — search for "Alex Mercer" across the HTML files and replace.
- **Contact details** — email/phone in each footer and in `contact.html`.
- **Social links** — the `href="#"` links in the footers.

## Notes

- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif)
  + Inter (body) via Google Fonts.
- **Dark bento theme** inspired by lens.framer.photos — rounded cards, floating
  pill nav with avatar + lime "Menu" overlay, lime accent + lime copyright bar.
- Fluid motion: Lenis smooth scrolling, image parallax, hero drift/fade,
  blur-in reveals, page-wipe transitions between pages.
- Demo images are seeded from picsum.photos — consistent across reloads, but
  remember to swap them before going live.
- Interactions: custom cursor (desktop only), scroll reveals, seamless
  marquees (pause on hover), FAQ accordion, keyboard-navigable lightbox
  (←/→/Esc), overlay menu.
- No dependencies, no build step — host on any static host (Netlify, GitHub
  Pages, Vercel).
