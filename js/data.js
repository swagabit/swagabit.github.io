// ============================================================
// ЕДИНЫЙ ФАЙЛ КОНТЕНТА.
// Заменить заглушку на видео: кинь файл в media/videos/
// и поменяй src: null на src: "media/videos/имя-файла.mp4".
// Постер (превью): media/posters/, поле poster.
// ============================================================

export const CONTACTS = {
  whatsapp: "https://wa.me/971503107247?text=" + encodeURIComponent("Привет! Пишу с сайта, хочу обсудить проект."),
  telegram: "https://t.me/taranov4",
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
    brand: "Молодость",
    niche: { ru: "Клиника · Дубай", en: "Clinic · Dubai" },
    title: {
      ru: "4 000 000 просмотров на одном ролике",
      en: "4,000,000 views on a single reel",
    },
    desc: {
      ru: "Зашёл с пяти пробных рилс: один набрал 4 миллиона просмотров и привёл клинике около трёх тысяч подписчиков. Дальше клиника выкупила три полных пакета роликов.",
      en: "Started with five trial reels: one hit 4 million views and brought the clinic around three thousand followers. The clinic then bought three full production packages.",
    },
    metrics: [
      { b: { ru: "4 млн", en: "4M" }, s: { ru: "просмотров на ролике", en: "views on one reel" } },
      { b: { ru: "+3 тыс", en: "+3K" }, s: { ru: "подписчиков с 5 роликов", en: "followers from 5 reels" } },
      { b: { ru: "3", en: "3" }, s: { ru: "пакета продолжения", en: "follow-up packages" } },
    ],
  },
  {
    id: "case-2",
    src: null,
    poster: null,
    brand: "Beauty Concept",
    niche: { ru: "Клиника эстетической медицины · Дубай", en: "Aesthetic medicine clinic · Dubai" },
    title: {
      ru: "Аудитория выросла в 3 раза, пациенты приходят из рилс",
      en: "Audience tripled, patients come from reels",
    },
    desc: {
      ru: "Веду контент клиники с января 2025 года: сценарии, съёмочные дни, монтаж и публикации. Аудитория выросла с 3 до 10 тысяч, заявки идут напрямую из видео, без бюджета на рекламу.",
      en: "Running the clinic's content since January 2025: scripts, shooting days, editing and publishing. The audience grew from 3K to 10K, inquiries come straight from video with zero ad budget.",
    },
    metrics: [
      { b: { ru: "3 → 10 тыс", en: "3K → 10K" }, s: { ru: "подписчиков", en: "followers" } },
      { b: { ru: "с 01.2025", en: "since 01.2025" }, s: { ru: "на постоянном ведении", en: "ongoing production" } },
      { b: { ru: "15+", en: "15+" }, s: { ru: "роликов ежемесячно", en: "reels every month" } },
    ],
  },
  {
    id: "case-3",
    src: null,
    poster: null,
    brand: "Автоподбор",
    niche: { ru: "Подбор автомобилей · Дубай", en: "Car sourcing · Dubai" },
    title: {
      ru: "Два залёта из первых пяти роликов, вхолодную",
      en: "Two viral reels out of the first five, from a cold pitch",
    },
    desc: {
      ru: "Клиент пришёл с холодного захода. Из пяти пробных рилс два набрали 300 и 500 тысяч просмотров, дальше сняли полный пакет из 15 роликов.",
      en: "The client came from a cold pitch. Two of the five trial reels hit 300K and 500K views, then we shot a full 15-reel package.",
    },
    metrics: [
      { b: { ru: "500 тыс", en: "500K" }, s: { ru: "просмотров, лучший ролик", en: "views, best reel" } },
      { b: { ru: "300 тыс", en: "300K" }, s: { ru: "просмотров, второй залёт", en: "views, second hit" } },
      { b: { ru: "15", en: "15" }, s: { ru: "роликов в пакете", en: "reels in the package" } },
    ],
  },
];

// Витрина роликов. tag: подпись слева, metric: цифра справа.
// Просмотры вписывай реальные, когда добавишь видео.
export const SHOWCASE = [
  { id: "showcase-1", src: null, poster: null, tag: { ru: "Медицина", en: "Medical" }, metric: { ru: "4 млн", en: "4M" } },
  { id: "showcase-2", src: null, poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "500 тыс", en: "500K" } },
  { id: "showcase-3", src: null, poster: null, tag: { ru: "Бьюти", en: "Beauty" }, metric: { ru: "", en: "" } },
  { id: "showcase-4", src: null, poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "300 тыс", en: "300K" } },
  { id: "showcase-5", src: null, poster: null, tag: { ru: "Эксперт", en: "Expert" }, metric: { ru: "", en: "" } },
  { id: "showcase-6", src: null, poster: null, tag: { ru: "Лайфстайл", en: "Lifestyle" }, metric: { ru: "", en: "" } },
];
