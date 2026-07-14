import { CONTACTS, SHOWREEL, WORKS, SHOWCASE, REVIEWS } from "./data.js";
import { DICT, getLang, applyLang } from "./i18n.js";
import { createReel } from "./video.js";

let lang = getLang();

// ---------- контакты ----------
function wireContacts() {
  const wa = `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(CONTACTS.whatsappText[lang])}`;
  const waAudit = `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(CONTACTS.whatsappAuditText[lang])}`;
  document.querySelectorAll("[data-contact]").forEach((a) => {
    const kind = a.getAttribute("data-contact");
    if (kind === "whatsapp") a.href = wa;
    else if (kind === "whatsapp-audit") a.href = waAudit;
    else if (CONTACTS[kind]) a.href = CONTACTS[kind];
    if (kind !== "instagram") a.removeAttribute("target");
  });
}

// ---------- рендер видео-секций ----------
function renderReels() {
  const heroWrap = document.getElementById("hero-reel");
  heroWrap.querySelectorAll(".reel").forEach((n) => n.remove());
  heroWrap.appendChild(createReel(SHOWREEL, lang, { autoplay: true }));

  const worksList = document.getElementById("works-list");
  worksList.innerHTML = "";
  WORKS.forEach((w) => {
    const card = document.createElement("article");
    card.className = "case-card reveal";

    const num = document.createElement("div");
    num.className = "case-num";
    num.setAttribute("aria-hidden", "true");
    num.innerHTML = `<b class="display">${w.metric.num[lang]}</b><span>${w.metric.unit[lang]}</span>`;

    const info = document.createElement("div");
    info.className = "case-info";
    info.innerHTML = `
      <h3 class="display">${w.brand[lang]}</h3>
      <div class="case-niche">${w.niche[lang]}</div>
      <div class="work-block">
        <h4>${DICT[lang]["works.task"]}</h4>
        <p>${w.task[lang]}</p>
      </div>
      <div class="work-block">
        <h4>${DICT[lang]["works.did"]}</h4>
        <p>${w.did[lang]}</p>
      </div>
      <div class="work-block">
        <h4>${DICT[lang]["works.result"]}</h4>
        <p>${w.result[lang]}</p>
      </div>`;

    const reels = document.createElement("div");
    reels.className = "case-reels";
    w.videos.forEach((v) => reels.appendChild(createReel(v, lang, {})));

    card.appendChild(num);
    card.appendChild(info);
    card.appendChild(reels);
    worksList.appendChild(card);
    revealIO.observe(card);
  });

  // Показываем отзыв, только если он реальный: есть скрин (img)
  // или текст, отличный от заглушки. Пустые заглушки бьют по доверию,
  // поэтому пока реальных нет — прячем всю секцию целиком.
  const placeholderQuotes = new Set(["Здесь будет отзыв клиента", "Client review goes here"]);
  const realReviews = REVIEWS.filter((r) => r.img || (r.quote && !placeholderQuotes.has(r.quote.ru)));
  const revSection = document.getElementById("reviews");
  if (revSection) revSection.classList.toggle("hidden", realReviews.length === 0);
  const revGrid = document.getElementById("reviews-grid");
  revGrid.innerHTML = "";
  realReviews.forEach((r) => {
    const card = document.createElement("figure");
    card.className = "review-card reveal";
    // Есть скрин переписки — показываем его; нет — показываем текст.
    if (r.img) {
      card.classList.add("has-shot");
      card.innerHTML = `
        <div class="review-shot"><img src="${r.img}" alt="${r.name[lang]}" loading="lazy"></div>
        <figcaption class="review-cap"><b>${r.name[lang]}</b><span>${r.tag[lang]}</span></figcaption>`;
    } else {
      card.innerHTML = `
        <blockquote>${r.quote[lang]}</blockquote>
        <figcaption class="review-cap"><b>${r.name[lang]}</b><span>${r.tag[lang]}</span></figcaption>`;
    }
    revGrid.appendChild(card);
    revealIO.observe(card);
  });

  const grid = document.getElementById("showcase-grid");
  grid.innerHTML = "";
  SHOWCASE.forEach((s) => {
    const cell = document.createElement("div");
    cell.className = "showcase-cell reveal";
    // бейдж просмотров показываем только у реальных видео:
    // цифра рядом с заглушкой «здесь будет видео» выглядит как фейк
    const metric = s.src && s.metric[lang] ? `<i>${s.metric[lang]}</i>` : "";
    cell.appendChild(createReel(s, lang, { meta: `<b>${s.tag[lang]}</b>${metric}` }));
    grid.appendChild(cell);
    revealIO.observe(cell);
  });
  initTilt();
}

// ---------- эффекты ----------
const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Цифры в полосе доказательств набегают от нуля при появлении.
// Разбираем строку на префикс + число + суффикс, чтобы работало и с
// «100+ млн», и с «$200 000+», и с английскими «150K+».
function animateCount(el) {
  const text = el.dataset.countText || el.textContent;
  el.dataset.countText = text;
  const m = text.match(/\d[\d\s  ,]*/);
  if (!m) return;
  const target = parseInt(m[0].replace(/\D/g, ""), 10);
  if (!isFinite(target) || target === 0) return;
  const prefix = text.slice(0, m.index);
  const suffix = text.slice(m.index + m[0].length);
  const grouped = /[\s  ,]/.test(m[0]);
  const fmt = (n) => prefix + (grouped ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") : String(n)) + suffix;
  const dur = 1200;
  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = text;
  };
  requestAnimationFrame(step);
}

let countIO = null;
function initCounters() {
  if (noMotion) return;
  if (!countIO) {
    countIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animateCount(e.target); countIO.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
  }
  document.querySelectorAll(".proof-item b").forEach((el) => {
    delete el.dataset.countText; // после смены языка считаем новое значение
    countIO.observe(el);
  });
}

// Свет за курсором в первом экране
function initSpotlight() {
  const heroEl = document.querySelector(".hero");
  const spot = document.querySelector(".hero-spot");
  if (!heroEl || !spot || !finePointer || noMotion) return;
  heroEl.addEventListener("pointermove", (e) => {
    const r = heroEl.getBoundingClientRect();
    spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
    spot.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
}

// Лёгкий 3D-наклон плиток витрины за курсором (только мышь)
function initTilt() {
  if (!finePointer || noMotion) return;
  document.querySelectorAll("#showcase-grid .showcase-cell").forEach((cell) => {
    if (cell.dataset.tilt) return;
    const reel = cell.querySelector(".reel");
    if (!reel) return;
    cell.dataset.tilt = "1";
    cell.addEventListener("pointermove", (e) => {
      const r = cell.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      reel.style.transform = `perspective(700px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-6px)`;
    });
    cell.addEventListener("pointerleave", () => { reel.style.transform = ""; });
  });
}

// Поле волнистых линий на фоне контактов.
// Каждая линия вертикальная, её X гуляет по сумме синусов — получается «ткань».
// Считаем только когда секция в кадре: за экраном анимация остановлена.
function initWaves() {
  const cv = document.getElementById("waves");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  let w = 0, h = 0, raf = null, t = 0, visible = false;
  // курсор отталкивает линии: держим его позицию далеко, пока мышь не зашла
  let mx = -9999, my = -9999;
  const host = cv.closest("section") || cv.parentElement;
  if (finePointer) {
    host.addEventListener("pointermove", (e) => {
      const r = cv.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    });
    host.addEventListener("pointerleave", () => { mx = -9999; my = -9999; });
  }

  const resize = () => {
    const r = cv.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, Math.round(r.width));
    h = Math.max(1, Math.round(r.height));
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const gap = 14;
    const lines = Math.ceil(w / gap) + 1;
    ctx.lineWidth = 1;
    for (let i = 0; i < lines; i++) {
      const baseX = i * gap;
      const phase = i * 0.18;
      ctx.beginPath();
      for (let y = 0; y <= h; y += 8) {
        const k = y / h;
        let x = baseX
          + Math.sin(k * 3.2 + phase + t) * 20
          + Math.sin(k * 6.1 - phase * 0.6 + t * 0.7) * 11;
        // рядом с курсором линию отводит в сторону, сила падает к краю радиуса
        const dx = x - mx, dy = y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 32400) { // радиус 180px
          const d = Math.sqrt(d2) || 1;
          const f = 1 - d / 180;
          x += (dx / d) * f * f * 46;
        }
        y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      // лёгкий оранжево-синий отлив по ширине, как во всей палитре
      const mix = i / lines;
      const r = Math.round(232 - mix * 60), g = Math.round(68 + mix * 20), b = Math.round(46 + mix * 180);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.34)`;
      ctx.stroke();
    }
  };

  const loop = () => {
    t += noMotion ? 0 : 0.006;
    draw();
    raf = visible && !noMotion ? requestAnimationFrame(loop) : null;
  };

  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible && !raf) loop();
    else if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
  }, { threshold: 0 });

  resize();
  draw();
  io.observe(cv);
  window.addEventListener("resize", () => { resize(); draw(); });
}

// ---------- язык ----------
function setLang(next) {
  lang = next;
  applyLang(lang);
  renderReels();
  wireContacts();
  initCounters();
}
document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
});

// ---------- развилка аудитории ----------
document.querySelectorAll(".aud-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-aud");
    document.querySelectorAll(".aud-tab").forEach((t) => {
      const on = t === tab;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.querySelectorAll("[data-aud-panel]").forEach((p) => {
      p.classList.toggle("hidden", p.getAttribute("data-aud-panel") !== target);
    });
  });
});

// ---------- появление секций ----------
const revealIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealIO.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));

// ---------- липкая мобильная CTA ----------
const sticky = document.getElementById("sticky-cta");
const hero = document.querySelector(".hero");
const contact = document.getElementById("contact");
const stickyIO = new IntersectionObserver(
  () => {
    const heroGone = hero.getBoundingClientRect().bottom < 0;
    const contactVisible = contact.getBoundingClientRect().top < window.innerHeight;
    sticky.classList.toggle("show", heroGone && !contactVisible);
  },
  { threshold: [0, 0.1, 1] }
);
stickyIO.observe(hero);
stickyIO.observe(contact);

// ---------- старт ----------
if (document.documentElement.getAttribute("data-lang-pending") === "en") {
  setLang("en");
} else {
  applyLang(lang);
  renderReels();
  wireContacts();
  initCounters();
}
initSpotlight();
initWaves();
