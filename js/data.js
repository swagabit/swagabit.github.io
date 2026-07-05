// ============================================================
// ЕДИНЫЙ ФАЙЛ КОНТЕНТА.
// Заменить заглушку на видео: кинь файл в media/videos/
// и поменяй src: null на src: "media/videos/имя-файла.mp4".
// Постер (превью): media/posters/, поле poster.
// ============================================================

export const CONTACTS = {
  whatsappNumber: "971503107247",
  whatsappText: {
    ru: "Привет! Пишу с сайта, хочу обсудить проект.",
    en: "Hi! Found you through the website. I'd like to discuss a project.",
  },
  telegram: "https://t.me/taranov4",
  instagram: "https://instagram.com/swagaeb",
};

export const SHOWREEL = {
  id: "showreel",
  src: null, // например: "media/videos/showreel.mp4"
  poster: null, // например: "media/posters/showreel.jpg"
};

// Разборы работ. Все клиенты анонимны (решение Кирилла).
// Структура: задача → что делали (список) → что получилось (словами).
export const WORKS = [
  {
    id: "work-1",
    src: null,
    poster: null,
    brand: { ru: "Антиэйдж-клиника", en: "Anti-age clinic" },
    niche: { ru: "Медицина · Дубай", en: "Medical · Dubai" },
    task: {
      ru: "Клиника хотела понять, дают ли рилсы что-то кроме красивой ленты.",
      en: "The clinic wanted to know if reels bring anything beyond a pretty feed.",
    },
    did: [
      { ru: "Идеи на актуальных трендах ниши", en: "Ideas built on live niche trends" },
      { ru: "Сценарии с хуками под каждую тему", en: "Scripts with hooks for every topic" },
      { ru: "Съёмка в клинике за один день", en: "One-day shoot at the clinic" },
      { ru: "Монтаж: субтитры, обложки, ритм", en: "Editing: subtitles, covers, pacing" },
    ],
    result: {
      ru: "Один из первых же роликов разлетелся на миллионы просмотров по всему Дубаю и привёл клинике волну новых подписчиков. Дальше клиника выкупила три полных пакета продолжения.",
      en: "One of the very first reels spread to millions of views across Dubai and brought the clinic a wave of new followers. The clinic then bought three full follow-up packages.",
    },
  },
  {
    id: "work-2",
    src: null,
    poster: null,
    brand: { ru: "Клиника эстетической медицины", en: "Aesthetic medicine clinic" },
    niche: { ru: "Бьюти · Дубай", en: "Beauty · Dubai" },
    task: {
      ru: "Нужен стабильный контент, который приводит пациентов, пока клиника занимается пациентами.",
      en: "Steady content that brings patients in while the clinic takes care of patients.",
    },
    did: [
      { ru: "Контент-план и сценарии каждый месяц", en: "Monthly content plan and scripts" },
      { ru: "Регулярные съёмочные дни", en: "Regular shooting days" },
      { ru: "Монтаж и публикации под ключ", en: "Turnkey editing and publishing" },
      { ru: "Разбор цифр и корректировка тем", en: "Metrics review and topic tuning" },
    ],
    result: {
      ru: "Полтора года постоянного ведения. Аудитория выросла втрое, пациенты записываются прямо из директа после роликов, без бюджета на рекламу.",
      en: "A year and a half of ongoing production. The audience tripled, patients book straight from DMs after watching reels, with zero ad budget.",
    },
  },
  {
    id: "work-3",
    src: null,
    poster: null,
    brand: { ru: "Автоподбор", en: "Car sourcing expert" },
    niche: { ru: "Авто · Дубай", en: "Auto · Dubai" },
    task: {
      ru: "Эксперт по подбору машин без упаковки: знаний много, аудитории нет.",
      en: "A car sourcing expert with deep knowledge and no audience.",
    },
    did: [
      { ru: "Распаковка экспертности и позиционирование", en: "Expertise unpacking and positioning" },
      { ru: "Темы, которые цепляют широкую аудиторию", en: "Topics that hook a wide audience" },
      { ru: "Съёмка живьём: гаражи, осмотры, сделки", en: "Live shooting: garages, inspections, deals" },
      { ru: "Динамичный монтаж под нишу", en: "Fast-paced editing for the niche" },
    ],
    result: {
      ru: "Из первых же пробных роликов два разлетелись на сотни тысяч просмотров. Эксперт заказал полный пакет и получил узнаваемость в своей нише.",
      en: "Two of the very first trial reels spread to hundreds of thousands of views. The expert ordered a full package and became recognizable in his niche.",
    },
  },
];

// Витрина роликов. tag: подпись слева; metric: бейдж просмотров.
// Бейдж опционален: залетел ролик — ставим цифру, просто красивый — оставляем пустым.
export const SHOWCASE = [
  { id: "showcase-1", src: null, poster: null, tag: { ru: "Медицина", en: "Medical" }, metric: { ru: "4 млн", en: "4M" } },
  { id: "showcase-2", src: null, poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "500 тыс", en: "500K" } },
  { id: "showcase-3", src: null, poster: null, tag: { ru: "Бьюти", en: "Beauty" }, metric: { ru: "", en: "" } },
  { id: "showcase-4", src: null, poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "300 тыс", en: "300K" } },
  { id: "showcase-5", src: null, poster: null, tag: { ru: "Эксперт", en: "Expert" }, metric: { ru: "", en: "" } },
  { id: "showcase-6", src: null, poster: null, tag: { ru: "Лайфстайл", en: "Lifestyle" }, metric: { ru: "", en: "" } },
];
