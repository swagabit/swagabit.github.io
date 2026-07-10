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
  telegram: "https://t.me/taranov4",
  instagram: "https://instagram.com/swagaeb",
};

export const SHOWREEL = {
  id: "showreel",
  src: "media/videos/show-expert.mp4", // поменян местами с плиткой «Эксперт» в витрине
  poster: null,
};

// Разборы работ. У каждого: фоновая цифра (metric) + до 3 роликов (videos).
// Пустой слот в videos (src: null) рендерится заглушкой — так и задумано,
// пока не добавлены все ролики.
export const WORKS = [
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
      en: "The audience was stuck at 10,000. The author shot chaotic talking-head videos with no growth.",
    },
    did: {
      ru: "Проанализировали контент и поняли, в чём главная фишка. Сделали акцент на органичном образе автора: русская девушка рассказывает треш-истории со свиданий на английском, с сигаретой в руке и отборным матом. Обернули эту искренность в формат yapping и начали брать объёмом без сложного монтажа.",
      en: "We analyzed the content and found the core hook. We leaned into the author's organic character: a Russian girl telling trashy dating stories in English, cigarette in hand and plenty of swearing. We wrapped that honesty into a yapping format and went for volume without heavy editing.",
    },
    result: {
      ru: "Образ идеально зацепил аудиторию, ролики пробили алгоритмы. Блог вырос на 100 000 подписчиков без копейки вложений в трафик.",
      en: "The character clicked with the audience and the reels broke through the algorithm. The blog grew by 100,000 followers without a cent spent on traffic.",
    },
    videos: [
      { src: "media/videos/lb1.mp4", poster: null },
      { src: "media/videos/lb2.mp4", poster: null },
      { src: "media/videos/lb3.mp4", poster: null },
    ],
  },
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
      en: "The clinic needed reach, recognition in Dubai and new inquiries.",
    },
    did: {
      ru: "Проанализировали нишу и поняли, что вылизанная медицинская картинка тут не сработает. Сняли пять разных форматов и зашли через острые темы и разборы внешности известных людей.",
      en: "We analyzed the niche and realized a polished medical look wouldn't work here. We shot five different formats and came in through edgy topics and breakdowns of well-known people's looks.",
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
      en: "An unstable flow of patients. They needed content that would steadily attract people.",
    },
    did: {
      ru: "Сделали ставку на экспертный формат, бьющий точно в боли пациентов. Полностью забрали на себя производство: от идей до финального монтажа и выпуска.",
      en: "We bet on an expert format aimed straight at patients' pain points. We took over production end to end: from ideas to final edit and release.",
    },
    result: {
      ru: "Аудитория клиники выросла в три раза (с 3 до 11+ тысяч). Instagram стал стабильным источником лидов на процедуры.",
      en: "The clinic's audience tripled (from 3,000 to 11,000+). Instagram became a steady source of leads for procedures.",
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
      num: { ru: "600 000+", en: "600K+" },
      unit: { ru: "просмотров", en: "views" },
    },
    task: {
      ru: "Эксперт уже снимал видео сам, но упирался в потолок просмотров в своей узкой нише.",
      en: "The expert already shot videos himself but kept hitting a view ceiling in his narrow niche.",
    },
    did: {
      ru: "Договорились на пять тестовых роликов. Докрутили подачу, добавили живого процесса (гаражи, осмотры, сделки) и внедрили агрессивный динамичный монтаж, чтобы держать внимание.",
      en: "We agreed on five test reels. We sharpened the delivery, added live process (garages, inspections, deals) and brought in aggressive, fast-paced editing to hold attention.",
    },
    result: {
      ru: "Из пяти тестовых рилсов ролики залетели на сотни тысяч просмотров. Эксперт забрал формат в постоянную работу.",
      en: "Out of five test reels, videos took off to hundreds of thousands of views. The expert took the format into ongoing work.",
    },
    videos: [
      { src: "media/videos/work4-1.mp4", poster: null },
      { src: "media/videos/work4-2.mp4", poster: null },
      { src: "media/videos/work4-3.mp4", poster: null },
    ],
  },
];

// Отзывы. Скрин переписки (img) или текст (quote). tag — что делали.
// Секция сама прячется, пока все отзывы — заглушки "Здесь будет отзыв клиента".
// ВНИМАНИЕ: сейчас тут 3 ВРЕМЕННЫХ ПРИМЕРА, чтобы показать секцию.
// Заменить на реальные (скрины переписок в media/reviews/ через img, либо текст).
export const REVIEWS = [
  {
    id: "review-1",
    img: null, // "media/reviews/1.jpg"
    quote: {
      ru: "Кирилл забрал весь контент на себя, от меня только съёмочный день. Через месяц пошли заявки из директа.",
      en: "Kirill took all the content off my hands, all I did was show up for the shoot. A month later inquiries started coming from DMs.",
    },
    name: { ru: "Клиника, Дубай", en: "Clinic, Dubai" },
    tag: { ru: "Продюсирование", en: "Full production" },
  },
  {
    id: "review-2",
    img: null,
    quote: {
      ru: "Снял нам ивент так, что ролики разошлись по сторис половины гостей. Кайф.",
      en: "He shot our event so well the reels ended up in half the guests' stories. Loved it.",
    },
    name: { ru: "Ресторан, Дубай", en: "Restaurant, Dubai" },
    tag: { ru: "Съёмка ивента", en: "Event shooting" },
  },
  {
    id: "review-3",
    img: null,
    quote: {
      ru: "Отдал сырые материалы, вернул готовые рилсы с монтажом и субтитрами. Быстро и чётко.",
      en: "I handed over raw footage and got back finished reels with editing and subtitles. Fast and clean.",
    },
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
