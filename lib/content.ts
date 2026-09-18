import { photos } from './photos';

export type Stat = { value: string; label: string };
export type Project = { name: string; area: string; src: string; alt: string; pos?: string };

export const site = {
  brand: { mark: 'HUB', sub: 'REMONTU' },
  nav: ['Проєкти', 'Послуги', 'Студія', 'Ціни', 'Контакти'],
  navCta: 'Анкета проєкту',
};

export const hero = {
  eyebrow: 'ОДНА КОМАНДА · ДВА НАПРЯМКИ · ОДИН ДОГОВІР',
  titleLead: 'Хтось малює красиво. Хтось будує надійно.',
  titleAccent: 'Ми робимо обидва — і відповідаємо за стик.',
  lede:
    'Від першого ескізу до келиха шампанського на новосіллі. Без «дизайнер намалював — будівельники не змогли».',
  primaryCta: 'Порахувати повний цикл',
  secondaryCta: 'Дивитись проєкти',
  photo: photos.livingPendants,
  caption: { title: 'ЖК Great · 66 м²', note: 'дизайн + ремонт + меблювання, 5 місяців' },
};

export const seamLine = 'Ми робимо обидва — і відповідаємо за стик.';
export const seamLineInline =
  'Разом: один договір, одна відповідальність, мінус 3–4 тижні на стиках';

export const directions = {
  architects: {
    name: 'Hub Architects',
    tag: 'ДИЗАЙН',
    body: 'Планування, візуалізації, робочі креслення, підбір матеріалів і меблів.',
    shortBody: 'Планування, візуалізації, креслення, специфікації. Від $35 / м².',
    prices: [
      { label: 'Дизайн квартири', value: 'від $35 / м²' },
      { label: 'Дизайн будинку', value: 'від $40 / м²' },
    ],
    cta: 'Хочу дизайн-проєкт',
    photo: photos.kitchenIsland,
  },
  builds: {
    name: 'Hub Builds',
    tag: 'РЕМОНТ',
    body: 'Чорнові й оздоблювальні роботи, інженерія, меблювання, здача під ключ.',
    shortBody: 'Чорнові, оздоблення, інженерія, меблювання. Від $290 / м².',
    prices: [
      { label: 'Ремонт квартири', value: 'від $290 / м²' },
      { label: 'Ремонт будинку', value: 'від $330 / м²' },
    ],
    cta: 'Хочу ремонт під ключ',
    photo: photos.livingTv,
  },
};

export const statsCore: Stat[] = [
  { value: '180+', label: 'проєктів з 2014 року' },
  { value: '3 роки', label: 'гарантії на роботи' },
  { value: 'Фікс', label: 'ціна закріплена в договорі' },
];

export const statsWide: Stat[] = [
  { value: '180+', label: 'проєктів з 2014 року' },
  { value: '92%', label: 'здано в строк за 2025' },
  { value: '3 роки', label: 'гарантії на роботи' },
  { value: 'Фікс', label: 'ціна закріплена в договорі' },
];

export const statsMarket: Stat[] = [
  { value: '180+', label: 'проєктів з 2014 року' },
  { value: '12', label: 'років на ринку Києва' },
  { value: '3 роки', label: 'гарантії на роботи' },
  { value: 'Фікс', label: 'ціна закріплена в договорі' },
];

export const projectsSetA: Project[] = [
  { name: 'Будинок у Ходосівці', area: '280 М²', ...photos.fireplace },
  { name: 'Квартира в ЖК Great', area: '66 М²', ...photos.livingGreenery },
  { name: 'San Francisco Creative', area: '99 М²', ...photos.kitchenOval },
];

export const projectsSetB: Project[] = [
  { name: 'Родинна квартира, Great', area: '78 М²', ...photos.loungeColumn },
  { name: 'Квартира Причал 8', area: '87 М²', ...photos.kitchenMarble },
  { name: 'Преміум White Lines', area: '50 М²', ...photos.kitchenBar },
];

export const diptych = {
  left: {
    eyebrow: '01 · HUB ARCHITECTS',
    title: ['Хтось малює', 'красиво.'],
    body: 'Планування, візуалізації, робочі креслення, специфікації матеріалів і меблів.',
    stamp: 'Проєкт · ЖК Great, 66 м²',
    photo: photos.kitchenIsland,
  },
  right: {
    eyebrow: '02 · HUB BUILDS',
    title: ['Хтось будує', 'надійно.'],
    body: 'Чорнові й оздоблювальні роботи, інженерія, меблювання, здача під ключ.',
    stamp: 'Реалізація · ЖК Great, 78 м²',
    photo: photos.livingOpenPlan,
  },
};

export const contact = {
  title: 'Розкажіть про об\'єкт — повернемось з планом і вилкою бюджету',
  meta: 'м. Київ, ЖК Great, Дніпровська набережна 15Ж, оф. 5 · hubremontu@gmail.com',
  phone: '+38 068 383 38 88',
  cta: 'Заповнити анкету',
};

export const projectsHeading = 'Проєкти повного циклу';
export const projectsNote = 'ДИЗАЙН + РЕМОНТ ОДНІЄЮ КОМАНДОЮ';
