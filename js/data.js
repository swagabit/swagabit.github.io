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

// Разборы работ. Структура: Точка А → что делали → результат.
export const WORKS = [
  {
    id: "work-1",
    src: null,
    poster: null,
    brand: { ru: "Личный блог", en: "Personal blog" },
    niche: { ru: "Стратегия и консалтинг", en: "Strategy & consulting" },
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
  },
  {
    id: "work-2",
    src: null,
    poster: null,
    brand: { ru: "Антиэйдж-клиника", en: "Anti-age clinic" },
    niche: { ru: "Медицина · Дубай", en: "Medical · Dubai" },
    task: {
      ru: "Клинике нужны были охваты, узнаваемость в Дубае и новые заявки.",
      en: "The clinic needed reach, recognition in Dubai and new inquiries.",
    },
    did: {
      ru: "Проанализировали нишу и поняли, что вылизанная медицинская картинка здесь не сработает. Зашли через острые темы и разборы внешности известных людей.",
      en: "We analyzed the niche and realized a polished medical look wouldn't work here. We came in through edgy topics and breakdowns of celebrities' looks.",
    },
    result: {
      ru: "Ролик с разбором Асхаба Тамаева порвал алгоритмы и набрал 4 миллиона просмотров. Только с этого видео пришло 5 000 новых подписчиков, а директ забился целевыми вопросами.",
      en: "A reel breaking down Askhab Tamaev tore through the algorithm and hit 4 million views. That single video brought 5,000 new followers, and the DMs filled up with qualified questions.",
    },
  },
  {
    id: "work-3",
    src: null,
    poster: null,
    brand: { ru: "Клиника эстетической медицины", en: "Aesthetic medicine clinic" },
    niche: { ru: "Бьюти · Дубай", en: "Beauty · Dubai" },
    task: {
      ru: "Нестабильный поток пациентов, нужен был контент, который будет приводить людей регулярно.",
      en: "An unstable flow of patients; they needed content that brings people in regularly.",
    },
    did: {
      ru: "Сделали ставку на экспертный формат, бьющий точно в боли пациентов. Полностью забрали на себя производство: от идей до финального монтажа и выпуска.",
      en: "We bet on an expert format aimed straight at patients' pain points. We took over production end to end: from ideas to final edit and release.",
    },
    result: {
      ru: "Аудитория клиники выросла в три раза (с 3 до 11+ тысяч). Instagram стал стабильным источником лидов на процедуры.",
      en: "The clinic's audience tripled (from 3,000 to 11,000+). Instagram became a steady source of leads for procedures.",
    },
  },
  {
    id: "work-4",
    src: null,
    poster: null,
    brand: { ru: "Автоподбор", en: "Car sourcing" },
    niche: { ru: "Авто · Дубай", en: "Auto · Dubai" },
    task: {
      ru: "У эксперта огромный опыт, он уже снимал видео, но хотел пробить потолок просмотров в своей узкой нише.",
      en: "The expert had huge experience and already shot videos, but wanted to break his view ceiling in a narrow niche.",
    },
    did: {
      ru: "Договорились на пять тестовых роликов. Докрутили подачу, добавили живого процесса (гаражи, осмотры, сделки) и внедрили агрессивный динамичный монтаж, чтобы держать внимание.",
      en: "We agreed on five test reels. We sharpened the delivery, added live process (garages, inspections, deals) and brought in aggressive, fast-paced editing to hold attention.",
    },
    result: {
      ru: "Из пяти тестовых рилсов два узкоспециализированных ролика залетели на 500 000 и 200 000 просмотров. Эксперт забрал формат в постоянную работу.",
      en: "Out of five test reels, two highly specialized ones took off to 500,000 and 200,000 views. The expert took the format into ongoing work.",
    },
  },
];

// Отзывы. Два режима на выбор для каждого:
//   1) СКРИН переписки — положи картинку в media/reviews/ и укажи img.
//      Это самый честный вариант: живую переписку не подделаешь.
//   2) ТЕКСТ — если скрина нет, оставь img: null и заполни quote/name.
// tag — что именно делали для человека (продюсирование / съёмка / монтаж).
// Так честно: видно, что не у всех было полное ведение.
export const REVIEWS = [
  {
    id: "review-1",
    img: null, // "media/reviews/1.jpg"
    quote: { ru: "Здесь будет отзыв клиента", en: "Client review goes here" },
    name: { ru: "Клиент, Дубай", en: "Client, Dubai" },
    tag: { ru: "Продюсирование", en: "Full production" },
  },
  {
    id: "review-2",
    img: null,
    quote: { ru: "Здесь будет отзыв клиента", en: "Client review goes here" },
    name: { ru: "Клиент, Дубай", en: "Client, Dubai" },
    tag: { ru: "Съёмка ивента", en: "Event shooting" },
  },
  {
    id: "review-3",
    img: null,
    quote: { ru: "Здесь будет отзыв клиента", en: "Client review goes here" },
    name: { ru: "Клиент, Дубай", en: "Client, Dubai" },
    tag: { ru: "Монтаж материалов", en: "Footage editing" },
  },
];

// Витрина роликов. tag: подпись слева; metric: бейдж просмотров.
// Бейдж опционален: залетел ролик — ставим цифру, просто красивый — оставляем пустым.
export const SHOWCASE = [
  { id: "showcase-1", src: null, poster: null, tag: { ru: "Лайфстайл", en: "Lifestyle" }, metric: { ru: "+100к подписчиков", en: "+100K followers" } },
  { id: "showcase-2", src: null, poster: null, tag: { ru: "Медицина", en: "Medical" }, metric: { ru: "4 млн", en: "4M" } },
  { id: "showcase-3", src: null, poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "500 тыс", en: "500K" } },
  { id: "showcase-4", src: null, poster: null, tag: { ru: "Бьюти", en: "Beauty" }, metric: { ru: "", en: "" } },
  { id: "showcase-5", src: null, poster: null, tag: { ru: "Авто", en: "Auto" }, metric: { ru: "300 тыс", en: "300K" } },
  { id: "showcase-6", src: null, poster: null, tag: { ru: "Эксперт", en: "Expert" }, metric: { ru: "", en: "" } },
];
