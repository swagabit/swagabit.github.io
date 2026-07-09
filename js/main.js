import { CONTACTS, SHOWREEL, WORKS, SHOWCASE, REVIEWS } from "./data.js";
import { DICT, getLang, applyLang } from "./i18n.js";
import { createReel } from "./video.js";

let lang = getLang();

// ---------- контакты ----------
function wireContacts() {
  const wa = `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(CONTACTS.whatsappText[lang])}`;
  document.querySelectorAll("[data-contact]").forEach((a) => {
    const kind = a.getAttribute("data-contact");
    if (kind === "whatsapp") a.href = wa;
    else if (CONTACTS[kind]) a.href = CONTACTS[kind];
    if (kind !== "instagram") a.removeAttribute("target");
  });
}

// ---------- рендер видео-секций ----------
function renderReels() {
  const heroWrap = document.getElementById("hero-reel");
  heroWrap.querySelectorAll(".reel").forEach((n) => n.remove());
  heroWrap.appendChild(
    createReel(SHOWREEL, lang, {
      meta: `<b>${DICT[lang]["reel.showreel"]}</b>`,
    })
  );

  const worksList = document.getElementById("works-list");
  worksList.innerHTML = "";
  WORKS.forEach((w) => {
    const card = document.createElement("article");
    card.className = "case-card reveal in";
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
    card.appendChild(createReel(w, lang, { meta: `<b>${w.brand[lang]}</b>` }));
    card.appendChild(info);
    worksList.appendChild(card);
  });

  const revGrid = document.getElementById("reviews-grid");
  revGrid.innerHTML = "";
  REVIEWS.forEach((r) => {
    const card = document.createElement("figure");
    card.className = "review-card reveal in";
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
  });

  const grid = document.getElementById("showcase-grid");
  grid.innerHTML = "";
  SHOWCASE.forEach((s) => {
    const cell = document.createElement("div");
    cell.className = "showcase-cell reveal in";
    // бейдж просмотров показываем только у реальных видео:
    // цифра рядом с заглушкой «здесь будет видео» выглядит как фейк
    const metric = s.src && s.metric[lang] ? `<i>${s.metric[lang]}</i>` : "";
    cell.appendChild(createReel(s, lang, { meta: `<b>${s.tag[lang]}</b>${metric}` }));
    grid.appendChild(cell);
  });
}

// ---------- язык ----------
function setLang(next) {
  lang = next;
  applyLang(lang);
  renderReels();
  wireContacts();
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
}
