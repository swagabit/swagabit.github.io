// Видео-движок: ленивый автоплей 9:16 роликов.
// Каждая карточка создаётся через createReel(entry, lang):
//   src === null  -> премиальная заглушка «здесь будет видео»
//   src задан     -> <video muted loop playsinline preload="none">,
//                    src вешается при приближении, play/pause по видимости.

import { DICT } from "./i18n.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = navigator.connection && navigator.connection.saveData;
const autoplayAllowed = !reduceMotion && !saveData;
const MAX_PLAYING = 4;
const playing = new Set();

function playIcon() {
  return '<div class="reel-play" aria-hidden="true"></div>';
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

    const tap = document.createElement("button");
    tap.className = "reel-tap";
    tap.setAttribute("aria-label", "Play");
    tap.innerHTML = playIcon();
    tap.addEventListener("click", () => {
      ensureSrc(video);
      video.muted = true;
      video.play().then(() => tap.classList.add("hidden")).catch(() => {});
    });
    frame.appendChild(tap);
    observe(frame, video, tap);
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
function observe(frame, video, tap) {
  if (!io) {
    io = new IntersectionObserver(onIntersect, { rootMargin: "200px 0px", threshold: [0, 0.25] });
  }
  frame._video = video;
  frame._tap = tap;
  io.observe(frame);
}

function onIntersect(entries) {
  for (const e of entries) {
    const video = e.target._video;
    const tap = e.target._tap;
    if (!video) continue;
    if (e.isIntersecting) {
      ensureSrc(video);
      if (autoplayAllowed && e.intersectionRatio >= 0.25 && playing.size < MAX_PLAYING) {
        video.muted = true;
        video.play().then(() => {
          playing.add(video);
          tap.classList.add("hidden");
        }).catch(() => {
          // iOS Low Power Mode и т.п.: остаётся постер + кнопка
          tap.classList.remove("hidden");
        });
      }
    } else {
      if (!video.paused) video.pause();
      playing.delete(video);
    }
  }
}
