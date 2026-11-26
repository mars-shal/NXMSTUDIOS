/* ============================================================
   Fluid interactions: cursor, smooth scroll, parallax, wipes,
   overlay menu, reveals, lightbox, renderers
   ============================================================ */

/* ---------- preloader (Landonorris-style counter, pixelated NXM) ---------- */
(function () {
  const pl = document.querySelector(".preloader");
  if (!pl) return;
  const num = pl.querySelector(".pl-count");
  const bar = pl.querySelector(".pl-bar span");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DUR = reduced ? 0 : 1500;
  const start = performance.now();

  // draw "NXM" hi-res, then sample it into a block grid = crisp pixel letters
  function drawLogo() {
    const cv = pl.querySelector(".pl-logo");
    if (!cv) return;
    const fontStack = '600 64px "SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif';
    const off = document.createElement("canvas");
    const octx = off.getContext("2d");
    octx.font = fontStack;
    const wN = octx.measureText("N").width;
    const wX = octx.measureText("X").width;
    const wM = octx.measureText("M").width;
    const gap = 10;
    const W = Math.ceil(wN + wX + wM + gap * 2) + 4;
    const H = 90;
    off.width = W; off.height = H;
    octx.font = fontStack; // reset by resize
    octx.textBaseline = "alphabetic";
    const y = 74;
    let x = 2;
    octx.fillStyle = "#f2f1ea";
    octx.fillText("N", x, y); x += wN + gap;
    octx.fillStyle = "#e0361e";
    octx.fillText("X", x, y); x += wX + gap;
    octx.fillStyle = "#f2f1ea";
    octx.fillText("M", x, y);

    // sample into a block grid
    const B = 6; // source pixels per block
    const cols = Math.floor(W / B);
    const rows = Math.floor(H / B);
    const data = octx.getImageData(0, 0, W, H).data;
    cv.width = cols;
    cv.height = rows;
    const dctx = cv.getContext("2d");
    for (let cy = 0; cy < rows; cy++) {
      for (let cx = 0; cx < cols; cx++) {
        const px = cx * B + (B >> 1), py = cy * B + (B >> 1);
        const i = (py * W + px) * 4;
        const a = data[i + 3];
        if (a > 48) {
          dctx.fillStyle = `rgba(${data[i]},${data[i + 1]},${data[i + 2]},${(a / 255).toFixed(2)})`;
          dctx.fillRect(cx, cy, 1, 1);
        }
      }
    }
  }

  function tick(now) {
    const t = Math.min((now - start) / DUR, 1);
    const eased = 1 - Math.pow(1 - t, 2.4);
    num.textContent = String(Math.floor(eased * 100)).padStart(3, "0");
    if (bar) bar.style.transform = `scaleX(${eased})`;
    if (t < 1) return requestAnimationFrame(tick);
    finish();
  }

  function finish() {
    // don't hold the page hostage — reveal on count end or shortly after
    const go = () => {
      pl.classList.add("exit");
      setTimeout(() => pl.remove(), 900);
    };
    if (document.readyState === "complete" || reduced) go();
    else setTimeout(go, 150);
  }

  // wait briefly for the display font so the pixel grid matches the letterforms
  const fontsReady = document.fonts && document.fonts.load
    ? Promise.race([document.fonts.load('600 64px Inter'), new Promise((r) => setTimeout(r, 350))])
    : Promise.resolve();

  fontsReady.then(() => {
    drawLogo();
    if (reduced) finish();
    else requestAnimationFrame(tick);
  }).catch(() => {
    drawLogo();
    if (reduced) finish();
    else requestAnimationFrame(tick);
  });
})();

/* ---------- custom cursor ---------- */
(function () {
  const dot = document.createElement("div");
  dot.className = "cursor";
  const label = document.createElement("div");
  label.className = "cursor-label";
  label.textContent = "View";
  document.body.append(dot, label);

  let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;

  addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  (function loop() {
    x += (tx - x) * 0.2;
    y += (ty - y) * 0.2;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    label.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();

  const bind = () => {
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => dot.classList.add("-link"));
      el.addEventListener("mouseleave", () => dot.classList.remove("-link"));
    });
    document.querySelectorAll("[data-cursor='view']").forEach((el) => {
      el.addEventListener("mouseenter", () => dot.classList.add("-view"));
      el.addEventListener("mouseleave", () => dot.classList.remove("-view"));
    });
  };
  bind();
  window.__cursorBind = bind;
})();

/* ---------- smooth scroll (Lenis, graceful fallback) ---------- */
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (window.Lenis && !REDUCED) {
  const lenis = new Lenis({ lerp: 0.09 });
  (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0);
}

/* ---------- fluid parallax + hero drift ---------- */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const els = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
    el: el.matches("img") ? el : el.querySelector("img"),
    speed: parseFloat(el.dataset.speed || "10"),
  })).filter((x) => x.el);

  const heroCollage = document.querySelector(".hero-collage");
  const heroTitle = document.querySelector(".hero-title");
  const heroTag = document.querySelector(".hero-tag");
  const heroBtn = document.querySelector(".hero-copy .btn-main");

  (function loop() {
    const vh = innerHeight;
    els.forEach(({ el, speed }) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -80 || r.top > vh + 80) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      // clamp the shift so the scale(1.12) overscan never exposes edges
      const ty = Math.max(-6, Math.min(6, p * speed));
      el.style.transform = `translateY(${ty.toFixed(2)}%) scale(1.12)`;
    });
    const y = scrollY;
    if (y < vh * 1.2 && heroCollage) {
      const t = `translate3d(0, ${(y * 0.14).toFixed(1)}px, 0)`;
      if (heroCollage) heroCollage.style.transform = t;
      if (heroTitle) {
        heroTitle.style.transform = `translate3d(0, ${(y * 0.08).toFixed(1)}px, 0)`;
        heroTitle.style.opacity = Math.max(0, 1 - y / (vh * 0.85));
      }
      if (heroTag) heroTag.style.opacity = Math.max(0, 1 - y / (vh * 0.6));
      if (heroBtn) heroBtn.style.opacity = Math.max(0, 1 - y / (vh * 0.55));
    }
    requestAnimationFrame(loop);
  })();
})();

/* ---------- scroll reveals ---------- */
(function () {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal, .reveal-img").forEach((el) => io.observe(el));
})();

/* ---------- page wipe transitions ---------- */
(function () {
  const wipe = document.createElement("div");
  wipe.className = "wipe";
  document.body.append(wipe);
  setTimeout(() => wipe.classList.add("exit"), 150);

  document.querySelectorAll('a[href*=".html"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      wipe.classList.remove("exit");
      setTimeout(() => (location.href = href), 620);
    });
  });
})();

/* ---------- overlay menu (Menu pill) ---------- */
(function () {
  const UI_ELS = ".cursor, .cursor-label, .wipe, .lightbox, .proj-preview";

  // blur + darken the page sections themselves while the menu is open,
  // so the frosted effect doesn't depend on backdrop-filter support
  function setDim(nav, menu, on) {
    [...document.body.children].forEach((el) => {
      if (el === nav || el === menu || el.matches(UI_ELS)) return;
      el.classList.toggle("menu-dim", on);
    });
  }

  document.querySelectorAll(".nav").forEach((nav) => {
    const btn = nav.querySelector(".menu-btn");
    const menu = nav.querySelector(".menu");
    if (!btn || !menu) return;
    // reparent to <body> so the overlay covers the viewport instead of
    // being clipped to the nav pill (its backdrop-filter creates a
    // containing block for fixed descendants)
    menu.classList.add("site-menu");
    document.body.append(menu);
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.textContent = open ? "Close" : "Menu";
      document.body.style.overflow = open ? "hidden" : "";
      setDim(nav, menu, open);
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.textContent = "Menu";
        document.body.style.overflow = "";
        setDim(nav, menu, false);
      })
    );
  });
})();

/* ---------- FAQ accordion (kept for reuse) ---------- */
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  if (!q || !a) return;
  q.addEventListener("click", () => {
    const open = item.classList.toggle("open");
    a.style.maxHeight = open ? a.scrollHeight + "px" : "0";
  });
});

/* ---------- seamless marquees ---------- */
document.querySelectorAll(".img-marquee-track").forEach((track) => {
  track.innerHTML += track.innerHTML;
});

/* ---------- lightbox ---------- */
(function () {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="btn close" aria-label="Close">✕</button>
    <button class="btn prev" aria-label="Previous">←</button>
    <button class="btn next" aria-label="Next">→</button>
    <img src="" alt="">
    <div class="counter"></div>
  `;
  document.body.append(lb);

  const imgEl = lb.querySelector("img");
  const counter = lb.querySelector(".counter");
  let items = [], index = 0;

  function show(i) {
    index = (i + items.length) % items.length;
    imgEl.src = items[index].src;
    counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
  }

  function open(list, i) {
    items = list;
    show(i);
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  lb.querySelector(".close").addEventListener("click", close);
  lb.querySelector(".prev").addEventListener("click", () => show(index - 1));
  lb.querySelector(".next").addEventListener("click", () => show(index + 1));
  lb.addEventListener("click", (e) => e.target === lb && close());
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  window.__bindLightbox = function (scope) {
    (scope || document).querySelectorAll("[data-lightbox]").forEach((group) => {
      const figs = [...group.querySelectorAll("figure, .lightbox-item")];
      figs.forEach((fig, i) =>
        fig.addEventListener("click", () => {
          const list = figs.map((f) => {
            const im = f.querySelector("img");
            return { src: im.dataset.full || im.src, caption: f.querySelector("figcaption")?.textContent || "" };
          });
          open(list, i);
        })
      );
    });
  };
  window.__bindLightbox();

  window.__openLightbox = open;
})();

/* ---------- image fade-in + skeleton loading ---------- */
window.__imgFade = function (scope) {
  (scope || document).querySelectorAll(".banner img, .frames-card img, .bento-grid figure img").forEach((img) => {
    const box = img.closest(".banner, .frames-card, .bento-grid figure");
    if (!box || box.classList.contains("loaded")) return;
    const done = () => box.classList.add("loaded");
    if (img.complete && img.naturalWidth) done();
    else {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    }
  });
};
window.__imgFade();

/* ---------- project index: hover preview ---------- */
(function () {
  if (typeof PROJECTS === "undefined") return;
  const preview = document.createElement("img");
  preview.className = "proj-preview";
  document.body.append(preview);

  document.querySelectorAll(".proj-row").forEach((row) => {
    const p = PROJECTS.find((x) => x.id === row.dataset.id);
    if (!p) return;
    row.addEventListener("mouseenter", () => {
      preview.src = p.cover;
      preview.classList.add("show");
    });
    row.addEventListener("mouseleave", () => preview.classList.remove("show"));
    row.addEventListener("mousemove", (e) => {
      preview.style.left = e.clientX + 40 + "px";
      preview.style.top = e.clientY - 140 + "px";
    });
  });
})();

/* ---------- project detail page renderer ---------- */
(function () {
  const root = document.querySelector("[data-project-detail]");
  if (!root || typeof PROJECTS === "undefined") return;

  const id = new URLSearchParams(location.search).get("id") || PROJECTS[0].id;
  const p = PROJECTS.find((x) => x.id === id) || PROJECTS[0];
  const idx = PROJECTS.indexOf(p);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];

  document.title = `${p.title} — NXM STUDIO`;

  root.querySelector("[data-pd-title]").textContent = p.title;
  root.querySelector("[data-pd-desc]").textContent = p.description;
  root.querySelector("[data-pd-category]").textContent = p.category;
  root.querySelector("[data-pd-year]").textContent = p.year;
  root.querySelector("[data-pd-count]").textContent = `${p.images.length} photographs`;

  const tags = root.querySelector("[data-pd-tags]");
  tags.innerHTML = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");

  const hero = root.querySelector("[data-pd-hero]");
  hero.src = p.images[0];
  hero.dataset.full = p.images[0];

  const gallery = root.querySelector("[data-pd-gallery]");
  gallery.innerHTML = p.images
    .slice(1)
    .map((src, i) => {
      const meta = typeof IMG_META !== "undefined" ? IMG_META[src] : null;
      const portrait = meta ? meta[1] > meta[0] : false;
      return `<img class="lightbox-item ${portrait ? "portrait" : "landscape"}" src="${src}" data-full="${src}" alt="${p.title} — photograph ${i + 2}" loading="lazy" data-cursor="view">`;
    })
    .join("");

  root.querySelector("[data-pd-prev]").href = `project.html?id=${prev.id}`;
  root.querySelector("[data-pd-prev] span:last-child").textContent = prev.title;
  root.querySelector("[data-pd-next]").href = `project.html?id=${next.id}`;
  root.querySelector("[data-pd-next] span:last-child").textContent = next.title;

  // hero + gallery images open in one lightbox group
  const figs = [hero, ...gallery.querySelectorAll(".lightbox-item")];
  figs.forEach((fig, i) =>
    fig.addEventListener("click", () => {
      const list = figs.map((f) => ({ src: f.dataset.full || f.src, caption: "" }));
      window.__openLightbox(list, i);
    })
  );
})();
