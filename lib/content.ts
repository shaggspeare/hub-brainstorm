import { photos } from './photos';

/* Single source of facts for all nine variants.
 *
 * Everything here is lifted from the live site
 * (hub-remontu-website: src/constants/business.ts, src/data/services.tsx,
 * src/data/projectsShortInfo.tsx, src/components/Pricing/DepartmentPricing.tsx,
 * src/components/ArchitectureHome/*, src/components/Layout/{Navbar,Footer}.tsx).
 * Nothing in this file may be invented: the variants are shown to the client,
 * so a number that does not exist on the real site is a claim they would have
 * to defend. The full pages used to hold their own inline copies of these
 * values, which is exactly how "180+ проєктів", "3 роки гарантії",
 * "від $290 / м²" and "92% здано в строк" got in. Import from here instead.
 */

export type Stat = { value: string; label: string };
/* `dept` drives the circular brand badge the live site stamps on every
   portfolio thumbnail (RecentProjects.tsx + projectBrand.ts). It defaults to
   builds there, same as here. */
export type Project = {
  name: string;
  area: string;
  src: string;
  alt: string;
  pos?: string;
  dept?: 'architects' | 'builds';
};

/* business.ts BUSINESS + Navbar.tsx */
export const site = {
  brand: { mark: 'HUB', sub: 'REMONTU' },
  logo: '/images/logo_en.svg',
  /* Real nav, in the real order. The site also nests Послуги by department. */
  nav: ['Головна', 'Про нас', 'Портфоліо', 'Послуги', 'Ціни', 'Команда', 'FAQ', 'Контакти'],
  /* Short form for variants whose header cannot hold eight items. */
  navShort: ['Про нас', 'Портфоліо', 'Послуги', 'Ціни', 'Контакти'],
  navCta: 'Заповнити анкету',
  navCtaHref: '/anketa-form',
  slogan: 'Ремонт та дизайн інтерʼєру під ключ у Києві',
  phone: '+38 (068) 383 38 88',
  phoneHref: 'tel:+380683833888',
  email: 'hubremontu@gmail.com',
  address: 'м. Київ, Дніпровська набережна, 15Ж, офіс 5, ЖК Great',
};

/* Footer.tsx socialLinksData + HeroBanner.tsx defaultSocialLinks */
export const socials = [
  { name: 'Telegram', icon: 'tg', href: 'https://t.me/HUB_GROUP_BOT' },
  { name: 'Facebook', icon: 'fb', href: 'https://www.facebook.com/profile.php?id=61555825405999' },
  { name: 'Instagram Builds', icon: 'ig', href: 'https://www.instagram.com/hub_builds' },
  { name: 'Instagram Architects', icon: 'ig', href: 'https://www.instagram.com/hub_architects' },
];

/* HeroBanner.tsx defaults — the brand's own headline and lede. */
export const heroOriginal = {
  titleLead: 'Дизайн зі змістом.',
  titleAccent: 'Ремонт зі смаком.',
  lede:
    'Вітаємо! Ми — студія дизайну інтерʼєру та комплексного ремонту. У нас можна створити оселю мрії від її концепції до келиха шампанського на честь вашого новосілля!',
  cta: 'Отримати консультацію',
  ctaHref: '/contact-us',
};

/* The 2a proposition being tested — deliberately new copy, not from the site. */
export const hero = {
  eyebrow: 'ОДНА КОМАНДА · ДВА НАПРЯМКИ · ОДИН ДОГОВІР',
  titleLead: 'Хтось малює красиво. Хтось будує надійно.',
  titleAccent: 'Ми робимо обидва — і відповідаємо за стик.',
  lede:
    'Від першого ескізу до келиха шампанського на новосіллі. Без «дизайнер намалював — будівельники не змогли».',
  primaryCta: 'Заповнити анкету',
  secondaryCta: 'Дивитись портфоліо',
  photo: photos.livingPendants,
  caption: { title: 'ЖК Great · 66 м²', note: 'дизайн + ремонт + меблювання' },
};

export const seamLine = 'Ми робимо обидва — і відповідаємо за стик.';
export const seamLineInline = 'Разом: один договір, одна відповідальність, один менеджер на весь цикл';

/* business.ts DEPARTMENTS + SERVICES, DepartmentPricing.tsx FALLBACK.
 * Architects has no per-m² price on the real site — the plan literally reads
 * "Індивідуальний розрахунок". Builds is "від 1000 $/м²". Do not substitute
 * a rounder-looking number. */
export const directions = {
  architects: {
    name: 'Hub Architects',
    tag: 'ДИЗАЙН',
    tagline: 'Дизайн та архітектура',
    /* WhatWeDo.tsx departmentCta */
    href: '/posluhy/dyzajn-interieru/',
    logo: '/images/logos/HUB_ARCHITECT_HOUSE_white.png',
    body: 'Дизайн-проєкти квартир, будинків і комерційних приміщень — з 3D-візуалізаціями та повною технічною документацією.',
    shortBody: 'Планування, 3D-візуалізації, технічна документація, авторський супровід.',
    price: 'Індивідуальний розрахунок',
    prices: [
      { label: 'Дизайн інтерʼєру', value: 'індивідуальний розрахунок' },
      { label: 'Дизайн комерції', value: 'індивідуальний розрахунок' },
    ],
    features: [
      'Вартість залежить від площі та обсягу документації',
      'Розрахунок після безкоштовної консультації',
      '3D-візуалізації та повна технічна документація',
      'Авторський супровід реалізації проєкту',
    ],
    cta: 'Хочу дизайн-проєкт',
    photo: photos.kitchenIsland,
  },
  builds: {
    name: 'Hub Builds',
    tag: 'РЕМОНТ',
    tagline: 'Ремонт та будівництво',
    href: '/posluhy/remont-kvartyr-pid-kliuch/',
    logo: '/images/logos/HUB_BUILDS_white.png',
    body: 'Ремонт квартир, будинків, офісів і комерційних приміщень під ключ власною командою — без субпідрядників.',
    shortBody: 'Чорнові, оздоблення, інженерія, меблювання. Від 1000 $/м².',
    price: 'від 1000 $/м²',
    prices: [
      { label: 'Ремонт квартир під ключ', value: 'від 1000 $/м²' },
      { label: 'Ремонт будинків і котеджів', value: 'від 1000 $/м²' },
      { label: 'Офіси та комерція', value: 'за запитом' },
    ],
    features: [
      'Фіксована ціна в договорі',
      'Поетапна оплата за фактом виконаних робіт',
      'Гарантія на всі виконані роботи',
      'Авторський нагляд на кожному етапі',
    ],
    cta: 'Хочу ремонт під ключ',
    photo: photos.livingTv,
  },
};

/* business.ts SERVICES — the six real service pages, with their real slugs. */
export const services = [
  { slug: 'dyzajn-interieru', dept: 'architects', name: 'Дизайн інтерʼєру', note: 'Індивідуальний дизайн-проєкт під ваш стиль і бюджет. 3D-візуалізації, авторський супровід.' },
  { slug: 'dyzajn-komertsii', dept: 'architects', name: 'Дизайн комерції', note: 'Офіси, ресторани, клініки, шоуруми. Реалістичні 3D-візуалізації, реалізація під ключ.' },
  { slug: 'remont-kvartyr-pid-kliuch', dept: 'builds', name: 'Ремонт квартир під ключ', note: 'Повний цикл: дизайн, ремонт, комплектація. Фіксована ціна в договорі, авторський нагляд.' },
  { slug: 'dyzajnerskyj-remont', dept: 'builds', name: 'Дизайнерський ремонт', note: 'Ремонт за дизайн-проєктом з авторським наглядом. Один підрядник — повний цикл.' },
  { slug: 'remont-budynkiv-ta-kotedzhiv', dept: 'builds', name: 'Ремонт будинків і котеджів', note: 'Будинки, котеджі й таунхауси під ключ. Прозора звітність. Київ та область.' },
  { slug: 'remont-ofisiv-ta-komertsii', dept: 'builds', name: 'Ремонт офісів та комерції', note: 'Офіси, ресторани, клініки, салони, магазини. Запускаємо бізнес вчасно.' },
] as const;

/* WhatWeDo.tsx — the section title pattern is "Що <span>ми робимо</span> для Вас",
   with the span rendered as outline-stroke text. */
export const servicesHeading = { lead: 'Що ', stroke: 'ми робимо', tail: ' для Вас' };

/* services.tsx / faqAnswerEngine.ts: "13 років досвіду, 300+ реалізованих
   обʼєктів, фіксована ціна в договорі та гарантія на роботи." The site never
   publishes a guarantee term in years or an on-time percentage. */
export const statsCore: Stat[] = [
  { value: '300+', label: 'реалізованих обʼєктів' },
  { value: '13', label: 'років досвіду' },
  { value: 'Фікс', label: 'ціна закріплена в договорі' },
];

export const statsWide: Stat[] = [
  { value: '300+', label: 'реалізованих обʼєктів' },
  { value: '13', label: 'років досвіду' },
  { value: 'Фікс', label: 'ціна закріплена в договорі' },
  { value: 'Гарантія', label: 'на всі виконані роботи' },
];

export const statsMarket: Stat[] = [
  { value: '300+', label: 'обʼєктів у Києві та області' },
  { value: '13', label: 'років досвіду' },
  { value: 'Своя', label: 'команда, без субпідрядників' },
  { value: 'Фікс', label: 'ціна закріплена в договорі' },
];

/* projectsShortInfo.tsx — real titles and the site's naming convention
   («N-к квартира, NN м2 у ЖК …»). Photos are still the ten interiors in
   public/images/backgrounds, so a title and its photo are not the same object. */
export const projectsSetA: Project[] = [
  { name: '3-к квартира у ЖК Файна Таун', area: '72 М²', dept: 'builds', ...photos.fireplace },
  { name: '2-к квартира у ЖК Сирецькі Сади', area: '62 М²', dept: 'architects', ...photos.livingGreenery },
  { name: 'Простора квартира у ЖК Медовий', area: '—', dept: 'builds', ...photos.kitchenOval },
];

export const projectsSetB: Project[] = [
  { name: '2-рівнева квартира у ЖК Зарічний', area: '140 М²', dept: 'builds', ...photos.loungeColumn },
  { name: '2-к квартира у ЖК Campus', area: '70 М²', dept: 'architects', ...photos.kitchenMarble },
  { name: 'Світла квартира в ЖК Central Park', area: '—', dept: 'builds', ...photos.kitchenBar },
];

/* The commercial half of the portfolio — all nine variants used to show only
   apartments, while the business also does офіси, ресторани, клініки. */
export const projectsCommercial: Project[] = [
  { name: 'Офісне приміщення, ЖК New York Concept House', area: '700 М²', ...photos.livingOpenPlan },
  { name: 'Піцерія «Люта Піца»', area: '75 М²', ...photos.kitchenBar },
  { name: 'Клініка-косметологія', area: '—', ...photos.loungeColumn },
];

export const diptych = {
  left: {
    eyebrow: '01 · HUB ARCHITECTS',
    title: ['Хтось малює', 'красиво.'],
    body: 'Планування, 3D-візуалізації, робочі креслення, специфікації матеріалів і меблів.',
    stamp: 'Дизайн та архітектура',
    photo: photos.kitchenIsland,
  },
  right: {
    eyebrow: '02 · HUB BUILDS',
    title: ['Хтось будує', 'надійно.'],
    body: 'Чорнові й оздоблювальні роботи, інженерія, меблювання, здача під ключ.',
    stamp: 'Ремонт та будівництво',
    photo: photos.livingOpenPlan,
  },
};

/* Process.tsx — the four real steps, verbatim titles. */
export const process = [
  { n: '1', name: 'Знайомство', note: 'Звʼяжіться з нами будь-яким зручним способом або завітайте до студії у ЖК Great.' },
  { n: '2', name: 'Виїзд спеціаліста', note: 'Спеціаліст приїде на обʼєкт, щоб оцінити стан і узгодити план майбутніх робіт.' },
  { n: '3', name: 'Дизайн-проєкт та кошторис', note: 'Після замірів складаємо детальний кошторис, підписуємо договір і графік робіт.' },
  { n: '4', name: 'Початок робіт', note: 'Закуповуємо матеріали, завозимо обладнання, майстри приступають до робіт.' },
];

/* TextSlide.tsx — the marquee band, verbatim. Odd items render as outline text. */
export const marquee = [
  'Студія дизайнерського ремонту',
  'Проєктування комерційних приміщень',
  'Надiйний партнер у бiзнесi',
  'Професіонали з досвідом у будівництві',
  'Ремонт під ключ',
];

/* ClientsFeedbackSlider.tsx — real reviews, trimmed to a pull-quote length.
   Names are as published on the site. */
export const testimonials = [
  {
    quote:
      'Одна з небагатьох компаній, яка реально подивилась на мій дизайн-проєкт та запропонувала цінову пропозицію відповідно до необхідних робіт. Більшість компаній просто дають середню ціну робіт/матеріалів за м².',
    name: 'Ольга Данилець',
    role: 'клієнтка',
  },
  {
    quote:
      'Первинний розрахунок вартості був максимально близьким до реальних витрат — і роботи, і матеріали. Завжди на звʼязку по питаннях під час ремонту і навіть через довгий час після закінчення.',
    name: 'Kami',
    role: 'клієнт',
  },
  {
    quote:
      'Роботи виконувались на 100% без мого втручання, всі проєктні зміни були з легкістю погоджені. Хлопці працюють автономно та в узгоджені строки.',
    name: 'Ramil As',
    role: 'клієнт',
  },
];

/* section-title pattern: "Наші відгуки <span>говорять за нас</span>" */
export const testimonialsHeading = { lead: 'Наші відгуки ', stroke: 'говорять за нас' };
export const projectsHeadingParts = { lead: 'Останні ', stroke: 'Проєкти' };
export const processHeadingParts = { lead: '', stroke: 'Принцип', tail: ' роботи' };

export const contact = {
  title: 'Розкажіть про обʼєкт — повернемось з кошторисом і планом робіт',
  meta: `${site.address} · ${site.email}`,
  phone: site.phone,
  cta: site.navCta,
};

export const projectsHeading = 'Останні проєкти';
export const projectsNote = 'ДИЗАЙН + РЕМОНТ ОДНІЄЮ КОМАНДОЮ';
