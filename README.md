# NXM STUDIO — Photographer Portfolio

A static, no-build-step portfolio website blending the **Lens** (Framer) structure
with the **editorial minimal** styling of justinle.xyz.

## Pages

| File            | What it is                                            |
| --------------- | ----------------------------------------------------- |
| `index.html`    | Home — full-bleed hero, featured banner, frames card, services strip |
| `projects.html` | Project index with hover image previews               |
| `project.html?id=…` | Project detail (rendered from `js/data.js`) with lightbox |
| `gallery.html`  | Video grid + full-width masonry gallery with lightbox  |
| `about.html`    | Studio bio + capabilities                             |

Contact is handled by email (`hello@nxmstudio.com`) from the footer and the
"Say hello" strip — there is no contact page.

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
WhatsApp batch from "Video …3.26.42 PM(2).mp4" through "Image …5.27.35 PM.jpeg")
and 4 clips in `images/videos/` (with auto-generated poster frames).

Everything is wired from **`js/data.js`**:

- `PROJECTS` — currently one shoot, *The November Session* (rename/retag
  freely). Remove any image by deleting its line from the `images` array;
  the projects index, detail page and gallery all update automatically.
- `IMG_META` — natural aspect ratios so the masonry reserves space (no layout shift).
- `VIDEOS` — the clips shown in the gallery's "Motion" section.
- `GALLERY` — every photo for the gallery grid (kept in sync automatically).

Also update:

- **Name/branding** — search for "NXM STUDIO" across the HTML files and replace.
- **Contact email** — `hello@nxmstudio.com` in each footer and the home strip.
- **Social links** — add them back when the studio's accounts exist.

## Notes

- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif)
  + SF Pro Display / Inter (body) via Google Fonts.
- **Dark bento theme** inspired by lens.framer.photos — rounded cards, floating
  pill nav with avatar + "Menu" overlay, red accent (`#e0361e`) and copyright bar.
- Lando-Norris-style preloader with a counting counter and slide-up reveal.
- Fluid motion: Lenis smooth scrolling, image parallax, hero drift/fade,
  blur-in reveals, page-wipe transitions between pages.
- Every gallery image is full width, uncropped, lazy-loaded with a skeleton shimmer.
- Accessibility: visible focus rings, 4.5:1+ button contrast, and
  `prefers-reduced-motion` disables scrolling/parallax/reveals.
- Interactions: custom cursor (desktop only), scroll reveals, seamless
  marquees (pause on hover), keyboard-navigable lightbox (←/→/Esc), overlay menu.
- No dependencies, no build step — host on any static host (Netlify, GitHub
  Pages, Vercel).
