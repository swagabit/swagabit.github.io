// ============================================================
// ЕДИНЫЙ ФАЙЛ КОНТЕНТА.
// Видео: положи файл в media/videos/ и впиши путь в src.
// src: null -> премиальная заглушка «здесь будет видео».
// Постер (превью): media/posters/, поле poster.
// ============================================================

export const CONTACTS = {
  whatsappNumber: "971503107247",
  whatsappText: {
    ru: "Привет! Пишу с сайта, хочу обсудить проект.",
    en: "Hi! Found you through the website. I'd like to discuss a project.",
  },
  // отдельный текст для кнопки «бесплатный разбор профиля»
  whatsappAuditText: {
    ru: "Привет! Пишу с сайта, хочу бесплатный разбор профиля. Вот ссылка: ",
    en: "Hi! Coming from your website. I'd like the free profile review, here's my profile: ",
  },
  telegram: "https://t.me/taranov4",
  instagram: "https://instagram.com/swagaeb",
};

export const SHOWREEL = {
  id: "showreel",
  src: "media/videos/show-expert.mp4", // поменян местами с плиткой «Эксперт» в витрине
  poster: null,
};

// Разборы работ. У каждого: фоновая цифра (metric) + до 3 роликов (videos).
export const WORKS = [
  {
    id: "work-2",
    brand: { ru: "Антиэйдж-клиника", en: "Anti-age clinic" },
    niche: { ru: "Медицина · Дубай", en: "Medical · Dubai" },
    metric: {
      num: { ru: "4 000 000+", en: "4M+" },
      unit: { ru: "просмотров", en: "views" },
    },
    task: {
      ru: "Клинике нужны были охваты, узнаваемость в Дубае и новые заявки.",
      en: "The clinic wanted reach, recognition around Dubai and new leads.",
    },
    did: {
      ru: "Проанализировали нишу и поняли, что стандартный обзор процедур не работает. Сняли пять разных форматов и зашли через острые темы и разборы внешности известных людей.",
      en: "We looked at the niche and realized a standard rundown of procedures was never going to land. We shot five different formats and went in through edgy topics and breakdowns of famous people's faces.",
    },
    result: {
      ru: "Ролик с разбором набрал 4 миллиона просмотров. Только с этого видео пришло 5 000 новых подписчиков.",
      en: "A single breakdown reel hit 4 million views. That one video alone brought 5,000 new followers.",
    },
    videos: [
      { src: "media/videos/work2-1.mp4", poster: null },
      { src: "media/videos/work3-1.mp4", poster: null },
      { src: "media/videos/work3-3.mp4", poster: null },
    ],
  },
  {
    id: "work-3",
    brand: { ru: "Клиника эстетической медицины", en: "Aesthetic medicine clinic" },
    niche: { ru: "Бьюти · Дубай", en: "Beauty · Dubai" },
    metric: {
      num: { ru: "×3", en: "×3" },
      unit: { ru: "аудитория", en: "audience" },
    },
    task: {
      ru: "Нестабильный поток пациентов. Нужен был контент, который будет стабильно привлекать людей.",
      en: "Patient flow was unpredictable. They needed content that brings people in consistently.",
    },
    did: {
      ru: "Сделали ставку на экспертный формат, бьющий точно в боли пациентов. Полностью забрали на себя производство: от идей до финального монтажа и выпуска.",
      en: "We went with an expert format aimed straight at what patients actually worry about, and took production off their hands end to end, from ideas to the final edit and posting.",
    },
    result: {
      ru: "Аудитория клиники выросла в три раза (с 3 до 11+ тысяч). Instagram стал стабильным источником лидов на процедуры.",
      en: "The clinic tripled its audience, from 3,000 to over 11,000. Instagram turned into a steady source of bookings.",
    },
    videos: [
      { src: "media/videos/med1.mp4", poster: null },
      { src: "media/videos/med2.mp4", poster: null },
      { src: "media/videos/med3.mp4", poster: null },
    ],
  },
  {
    id: "work-4",
    brand: { ru: "Автоподбор", en: "Car sourcing" },
    niche: { ru: "Авто · Дубай", en: "Auto · Dubai" },
    metric: {
      num: { ru: "800 000+", en: "800K+" },
      unit: { ru: "просмотров", en: "views" },
    },
    task: {
      ru: "Эксперт уже снимал видео сам, но упирался в потолок просмотров в своей узкой нише.",
      en: "He was already shooting videos himself, but kept hitting a ceiling on views in a narrow niche.",
    },
    did: {
      ru: "Договорились на пять тестовых роликов. Докрутили подачу, добавили живого процесса (гаражи, осмотры, сделки) и внедрили агрессивный динамичный монтаж, чтобы держать внимание.",
      en: "We agreed on five test reels. I sharpened his delivery, put the real work on camera (garages, inspections, deals) and brought in aggressive, fast-paced editing to hold attention.",
    },
    result: {
      ru: "Ролики в сумме набрали 800 000 просмотров. Эксперт забрал формат в постоянную работу.",
      en: "The reels pulled 800,000 views between them. He kept the format for ongoing work.",
    },
    videos: [
      { src: "media/videos/work4-1.mp4", poster: null },
      { src: "media/videos/work4-2.mp4", poster: null },
      { src: "media/videos/work4-3.mp4", poster: null },
    ],
  },
  {
    id: "work-1",
    brand: { ru: "Личный блог", en: "Personal blog" },
    niche: { ru: "Стратегия и консалтинг", en: "Strategy & consulting" },
    metric: {
      num: { ru: "100 000+", en: "100K+" },
      unit: { ru: "подписчиков", en: "followers" },
    },
    task: {
      ru: "Аудитория висела на 10 тысячах. Автор снимала хаотичные разговорные видео, роста не было.",
      en: "Her audience had been stuck at 10,000. She was posting chaotic talking-head videos and nothing moved.",
    },
    did: {
      ru: "Разобрал её контент и показал, в чём главная фишка. Посоветовал сделать акцент на органичном образе: русская девушка рассказывает треш-истории со свиданий на английском, с сигаретой в руке и отборным матом. Эту искренность она обернула в формат yapping и начала брать объёмом, без сложного монтажа.",
      en: "I went through her content and showed her where the real hook was. I told her to lean into who she already is on camera: a Russian girl telling trashy dating stories in English, cigarette in hand, swearing like a sailor. She wrapped that honesty into a yapping format and went for volume instead of heavy editing.",
    },
    result: {
      ru: "Образ идеально зацепил аудиторию, ролики пробили алгоритмы. Блог вырос на 100 000 подписчиков без копейки вложений в трафик.",
      en: "The persona clicked instantly and the reels broke through the algorithm. The account grew by 100,000 followers without a cent spent on ads.",
    },
    videos: [
      { src: "media/videos/lb1.mp4", poster: null },
      { src: "media/videos/lb2.mp4", poster: null },
      { src: "media/videos/lb3.mp4", poster: null },
    ],
  },
];

// Отзывы. Скрин переписки (img) или текст (quote). tag — что делали.
// Секция сама прячется, пока все отзывы — заглушки «Здесь будет отзыв клиента».
// Сейчас СКРЫТА по просьбе Кирилла: ждём реальные скрины переписок.
// Чтобы включить: положи скрин в media/reviews/ и укажи img (или впиши реальный quote).
export const REVIEWS = [
  {
    id: "review-1",
    img: null, // "media/reviews/1.jpg"
    quote: { ru: "Здесь будет отзыв клиента", en: "Client review goes here" },
    name: { ru: "Клиника, Дубай", en: "Clinic, Dubai" },
    tag: { ru: "Продюсирование", en: "Full production" },
  },
  {
    id: "review-2",
    img: null,
    quote: { ru: "Здесь будет отзыв клиента", en: "Client review goes here" },
    name: { ru: "Ресторан, Дубай", en: "Restaurant, Dubai" },
    tag: { ru: "Съёмка ивента", en: "Event shooting" },
  },
  {
    id: "review-3",
    img: null,
    quote: { ru: "Здесь будет отзыв клиента", en: "Client review goes here" },
    name: { ru: "Эксперт", en: "Expert" },
    tag: { ru: "Монтаж материалов", en: "Footage editing" },
  },
];

// Витрина роликов. tag: подпись; metric: бейдж просмотров (только у реальных видео).
export const SHOWCASE = [
  { id: "showcase-1", src: "media/videos/showreel.mp4", poster: null, tag: { ru: "Эксперт", en: "Expert" }, metric: { ru: "", en: "" } },
  { id: "showcase-2", src: "media/videos/work3-2.mp4", poster: null, tag: { ru: "Бьюти", en: "Beauty" }, metric: { ru: "", en: "" } },
  { id: "showcase-3", src: "media/videos/show-lifestyle.mp4", poster: null, tag: { ru: "Лайфстайл", en: "Lifestyle" }, metric: { ru: "", en: "" } },
  { id: "showcase-4", src: "media/videos/show-event.mp4", poster: null, tag: { ru: "Ивент", en: "Event" }, metric: { ru: "", en: "" } },
  { id: "showcase-5", src: "media/videos/show-reel1.mp4", poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "", en: "" } },
  { id: "showcase-6", src: "media/videos/show-med.mp4", poster: null, tag: { ru: "Медицина", en: "Medical" }, metric: { ru: "", en: "" } },
];
