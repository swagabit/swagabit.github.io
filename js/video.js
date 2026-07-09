// Видео-движок: ленивый автоплей 9:16 роликов + звук по клику.
//   src === null -> премиальная заглушка «здесь будет видео».
//   src задан    -> <video muted loop playsinline>, автоплей без звука в зоне
//                   видимости. Клик по кадру включает звук (и глушит остальные),
//                   повторный клик — выключает. Уход из зоны видимости — пауза + mute.

import { DICT } from "./i18n.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = navigator.connection && navigator.connection.saveData;
const autoplayAllowed = !reduceMotion && !saveData;
const MAX_PLAYING = 4;
const playing = new Set();
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
  const frame = document.createElement("div");
  frame.className = "reel" + (opts.className ? " " + opts.className : "");

  if (!entry.src) {
    frame.innerHTML = `
      <div class="reel-badge">
        ${playIcon()}
        <span data-i18n="reel.soon">${DICT[lang]["reel.soon"]}</span>
      </div>`;
  } else {
    const video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.preload = "none";
    if (entry.poster) video.poster = entry.poster;
    video.dataset.src = entry.src;
    frame.appendChild(video);

    const sound = document.createElement("div");
    sound.className = "reel-sound is-muted";
    sound.setAttribute("aria-hidden", "true");
    sound.innerHTML = soundIcons();
    frame.appendChild(sound);

    const tap = document.createElement("button");
    tap.className = "reel-tap";
    tap.setAttribute("aria-label", DICT[lang]["reel.sound"] || "Звук");
    tap.innerHTML = playIcon();
    frame.appendChild(tap);

    const ctrl = { video, tap };
    ctrl.setMuted = (m) => {
      video.muted = m;
      sound.classList.toggle("is-muted", m);
    };
    controllers.add(ctrl);
    frame._ctrl = ctrl;

    tap.addEventListener("click", () => {
      ensureSrc(video);
      tap.classList.add("playing");
      if (video.muted) {
        controllers.forEach((c) => { if (c !== ctrl) c.setMuted(true); });
        ctrl.setMuted(false);
      } else {
        ctrl.setMuted(true);
      }
      video.play().catch(() => {});
    });

    observe(frame);
  }

  if (opts.meta) {
    const meta = document.createElement("div");
    meta.className = "reel-meta";
    meta.innerHTML = opts.meta;
    frame.appendChild(meta);
  }
  return frame;
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
    const { video, tap } = ctrl;
    if (e.isIntersecting) {
      ensureSrc(video);
      if (autoplayAllowed && e.intersectionRatio >= 0.25 && playing.size < MAX_PLAYING) {
        ctrl.setMuted(true);
        video.play().then(() => {
          playing.add(video);
          tap.classList.add("playing");
        }).catch(() => {
          // iOS Low Power Mode и т.п.: остаётся кнопка воспроизведения
          tap.classList.remove("playing");
        });
      }
    } else {
      if (!video.paused) video.pause();
      ctrl.setMuted(true); // вернётся в кадр без звука
      playing.delete(video);
    }
  }
}
