// ============================================================
// ЕДИНЫЙ ФАЙЛ КОНТЕНТА.
// Заменить заглушку на видео: кинь файл в media/videos/
// и поменяй src: null на src: "media/videos/имя-файла.mp4".
// Постер (превью): media/posters/, поле poster.
// ============================================================

export const CONTACTS = {
  // TODO: вставить реальный номер WhatsApp (формат: 9715XXXXXXXX без плюса)
  whatsapp: "https://wa.me/00000000000?text=" + encodeURIComponent("Привет! Пишу с сайта, хочу обсудить проект."),
  // TODO: вставить реальный юзернейм Telegram
  telegram: "https://t.me/username",
  instagram: "https://instagram.com/swagaeb",
};

export const SHOWREEL = {
  id: "showreel",
  src: null, // например: "media/videos/showreel.mp4"
  poster: null, // например: "media/posters/showreel.jpg"
};

export const CASES = [
  {
    id: "case-1",
    src: null,
    poster: null,
    brand: "Beauty Concept",
    niche: { ru: "Клиника эстетической медицины · Дубай", en: "Aesthetic medicine clinic · Dubai" },
    title: {
      ru: "Пациенты приходят из рилс, без бюджета на рекламу",
      en: "Patients come from reels, with zero ad budget",
    },
    desc: {
      ru: "Веду контент клиники с января 2025 года: сценарии, съёмочные дни, монтаж и публикации. Стабильный поток заявок напрямую из видео.",
      en: "Running the clinic's content since January 2025: scripts, shooting days, editing and publishing. A steady flow of inquiries straight from video.",
    },
    metrics: [
      { b: { ru: "с 01.2025", en: "since 01.2025" }, s: { ru: "на постоянном ведении", en: "ongoing production" } },
      { b: { ru: "15+", en: "15+" }, s: { ru: "роликов ежемесячно", en: "reels every month" } },
      { b: { ru: "заявки", en: "leads" }, s: { ru: "напрямую из рилс", en: "straight from reels" } },
    ],
  },
];

// Витрина роликов. tag: подпись слева, metric: цифра справа.
// Просмотры вписывай реальные, когда добавишь видео.
export const SHOWCASE = [
  { id: "showcase-1", src: null, poster: null, tag: { ru: "Медицина", en: "Medical" }, metric: { ru: "", en: "" } },
  { id: "showcase-2", src: null, poster: null, tag: { ru: "Бьюти", en: "Beauty" }, metric: { ru: "", en: "" } },
  { id: "showcase-3", src: null, poster: null, tag: { ru: "Эксперт", en: "Expert" }, metric: { ru: "4 млн", en: "4M views" } },
  { id: "showcase-4", src: null, poster: null, tag: { ru: "Бизнес", en: "Business" }, metric: { ru: "", en: "" } },
  { id: "showcase-5", src: null, poster: null, tag: { ru: "Лайфстайл", en: "Lifestyle" }, metric: { ru: "", en: "" } },
  { id: "showcase-6", src: null, poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "", en: "" } },
];
