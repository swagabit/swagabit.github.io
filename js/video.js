// Видео-движок. Два режима:
//   autoplay (шоурил): превью без звука по кругу; клик по кадру включает/выключает звук.
//   click-to-play (все остальные): постер + кнопка play, БЕЗ автоплея. Клик запускает
//     ролик с самого начала, со звуком и системным плеером (перемотка). Остальные при
//     этом останавливаются и сбрасываются в начало.

import { DICT } from "./i18n.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = navigator.connection && navigator.connection.saveData;
const autoplayAllowed = !reduceMotion && !saveData;
const controllers = new Set();

function playIcon() {
  return '<div class="reel-play" aria-hidden="true"></div>';
}

function soundIcons() {
  return `
    <svg class="ic-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
    <svg class="ic-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M18.8 6a9 9 0 010 12"/></svg>`;
}

export function createReel(entry, lang, opts = {}) {
  const autoplay = !!opts.autoplay;
  const frame = document.createElement("div");
  frame.className = "reel" + (opts.className ? " " + opts.className : "");

  if (!entry.src) {
    frame.innerHTML = `
      <div class="reel-badge">
        ${playIcon()}
        <span data-i18n="reel.soon">${DICT[lang]["reel.soon"]}</span>
      </div>`;
    if (opts.meta) appendMeta(frame, opts.meta);
    return frame;
  }

  const video = document.createElement("video");
  video.muted = true;
  video.loop = autoplay; // превью крутится по кругу, полноценный просмотр — один раз
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.preload = "none";
  // постер: явный из data.js либо из имени видео (videos/x.mp4 -> posters/x.jpg)
  const poster = entry.poster || entry.src.replace("/videos/", "/posters/").replace(/\.mp4$/, ".jpg");
  if (poster) video.poster = poster;
  video.dataset.src = entry.src;
  frame.appendChild(video);

  const tap = document.createElement("button");
  tap.className = "reel-tap";
  tap.innerHTML = playIcon();
  frame.appendChild(tap);

  const ctrl = { video, tap, frame, autoplay };

  if (autoplay) {
    // ----- превью со звуком по клику -----
    const sound = document.createElement("div");
    sound.className = "reel-sound is-muted";
    sound.setAttribute("aria-hidden", "true");
    sound.innerHTML = soundIcons();
    frame.appendChild(sound);
    tap.setAttribute("aria-label", DICT[lang]["reel.sound"] || "Звук");

    ctrl.setMuted = (m) => { video.muted = m; sound.classList.toggle("is-muted", m); };
    ctrl.reset = () => { ctrl.setMuted(true); };

    tap.addEventListener("click", () => {
      ensureSrc(video);
      tap.classList.add("playing");
      if (video.muted) {
        controllers.forEach((c) => { if (c !== ctrl) c.reset(); });
        ctrl.setMuted(false);
      } else {
        ctrl.setMuted(true);
      }
      video.play().catch(() => {});
    });
  } else {
    // ----- клик = запуск с начала, со звуком, системный плеер -----
    tap.setAttribute("aria-label", DICT[lang]["reel.play"] || "Смотреть");

    ctrl.reset = () => {
      video.pause();
      try { video.currentTime = 0; } catch (e) {}
      video.muted = true;
      video.controls = false;
      frame.classList.remove("playing");
      tap.classList.remove("playing");
    };

    tap.addEventListener("click", () => {
      controllers.forEach((c) => { if (c !== ctrl) c.reset(); });
      ensureSrc(video);
      try { video.currentTime = 0; } catch (e) {}
      video.muted = false;
      video.controls = true;
      frame.classList.add("playing");
      tap.classList.add("playing");
      video.play().catch(() => {});
    });
  }

  controllers.add(ctrl);
  frame._ctrl = ctrl;
  observe(frame);

  if (opts.meta) appendMeta(frame, opts.meta);
  return frame;
}

function appendMeta(frame, html) {
  const meta = document.createElement("div");
  meta.className = "reel-meta";
  meta.innerHTML = html;
  frame.appendChild(meta);
}

function ensureSrc(video) {
  if (!video.src && video.dataset.src) video.src = video.dataset.src;
}

let io = null;
function observe(frame) {
  if (!io) {
    io = new IntersectionObserver(onIntersect, { rootMargin: "200px 0px", threshold: [0, 0.25] });
  }
  io.observe(frame);
}

function onIntersect(entries) {
  for (const e of entries) {
    const ctrl = e.target._ctrl;
    if (!ctrl) continue;
    const { video, tap, autoplay } = ctrl;
    if (e.isIntersecting) {
      ensureSrc(video);
      if (autoplay && autoplayAllowed && e.intersectionRatio >= 0.25) {
        ctrl.setMuted(true);
        video.play().then(() => tap.classList.add("playing")).catch(() => tap.classList.remove("playing"));
      }
    } else {
      // ушёл из зоны видимости — останавливаем (клик-ролики сбрасываем в начало)
      if (!video.paused) video.pause();
      if (autoplay) ctrl.reset();
      else ctrl.reset();
    }
  }
}
