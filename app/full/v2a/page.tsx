import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';

export const metadata = { title: '2a · Дві половини — Hub Remontu' };

const columns = [
  {
    key: 'architects',
    name: 'Hub Architects',
    tag: 'ДИЗАЙН',
    note: 'Планування, візуалізації, робочі креслення, підбір матеріалів і меблів.',
    photo: photos.kitchenIsland,
    prices: [
      ['Дизайн інтер’єру квартири', 'від $35 / м²'],
      ['Дизайн будинку', 'від $40 / м²'],
      ['Комерційні приміщення', 'за запитом'],
    ],
    cta: 'Хочу дизайн-проєкт',
  },
  {
    key: 'builds',
    name: 'Hub Builds',
    tag: 'РЕМОНТ',
    note: 'Чорнові й оздоблювальні роботи, інженерія, меблювання, здача під ключ.',
    photo: photos.livingTv,
    prices: [
      ['Ремонт квартири під ключ', 'від $290 / м²'],
      ['Ремонт будинку', 'від $330 / м²'],
      ['Офіси та комерція', 'за запитом'],
    ],
    cta: 'Хочу ремонт під ключ',
  },
] as const;

const projects = [
  { name: 'Будинок у Ходосівці', area: '280 М²', ...photos.fireplace },
  { name: 'Квартира в ЖК Great', area: '66 М²', ...photos.livingGreenery },
  { name: 'San Francisco Creative', area: '99 М²', ...photos.kitchenOval },
];

export default function V2a() {
  return (
    <main className={`${s.page} ${s.v2a}`}>
      <header className={`${s.hdr} ${s.hdrDark}`}>
        <div className={s.logo}>
          <span className={s.logoMark}>HUB</span>
          <span className={s.logoSub} style={{ color: 'var(--accHi)' }}>REMONTU</span>
        </div>
        <NavMenu
          items={['Проєкти', 'Послуги', 'Студія', 'Ціни', 'Контакти']}
          navClassName={s.nav}
          navStyle={{ color: 'rgba(242,238,232,.8)' }}
          toggleClassName={s.navToggle}
          wrapClassName={s.navWrap}
        />
        <a href="#" className={s.btn} style={{ background: 'var(--accHi)', color: '#1a1714', font: '600 12.5px/1 var(--font-body), sans-serif', padding: '11px 18px' }}>
          Анкета проєкту
        </a>
      </header>

      <section className={s.heroCentered}>
        <div className={s.monoAcc} style={{ letterSpacing: '.24em', marginBottom: 24 }}>
          ОДНА КОМАНДА · ДВА НАПРЯМКИ · ОДИН ДОГОВІР
        </div>
        <h1 className={s.h1}>
          Хтось малює красиво. Хтось будує надійно.
          <br />
          <span className={s.accent}>Ми робимо обидва — і відповідаємо за стик.</span>
        </h1>
        <p className={s.lede}>
          Від першого ескізу до келиха шампанського на новосіллі. Без «дизайнер намалював — будівельники не змогли».
        </p>
      </section>

      <section className={s.splitCols}>
        {columns.map((c) => {
          const dark = c.key === 'builds';
          return (
            <div className={dark ? s.colDark : s.colLight} key={c.key}>
              <div className={s.colHead}>
                <span className={s.colName}>{c.name}</span>
                <span className={s.colTag} style={dark ? { color: 'var(--accHi)' } : undefined}>{c.tag}</span>
              </div>
              <p className={s.colNote}>{c.note}</p>
              <div className={`${s.frame} ${s.h280}`} style={{ marginTop: 26 }}>
                <Image src={c.photo.src} alt={c.photo.alt} fill sizes="50vw" className={s.cover} style={{ objectPosition: c.photo.pos ?? '50% 50%' }} />
              </div>
              <div style={{ marginTop: 26 }}>
                {c.prices.map(([label, value]) => (
                  <div className={s.priceRow} key={label}>
                    <span>{label}</span>
                    <span className={s.priceVal}>{value}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className={`${s.btn} ${dark ? '' : s.outlineSolid}`}
                style={{ marginTop: 26, ...(dark ? { background: 'var(--accHi)', color: '#1a1714' } : {}) }}
              >
                {c.cta}
              </a>
            </div>
          );
        })}
      </section>

      <div className={s.seam}>
        <span className={s.seamText}>
          А найкраще — разом: один договір, одна відповідальність, економія 3–4 тижні на стиках
        </span>
        <a href="#" className={`${s.btn} ${s.btnSm}`} style={{ background: '#1a1714', color: '#f2eee8' }}>
          Порахувати повний цикл →
        </a>
      </div>

      <section className={s.section}>
        <div className={s.headRow}>
          <h2 className={s.h2}>Проєкти повного циклу</h2>
          <span className={s.mono} style={{ letterSpacing: '.14em', color: 'var(--faint)' }}>
            ДИЗАЙН + РЕМОНТ ОДНІЄЮ КОМАНДОЮ
          </span>
        </div>
        <div className={s.grid3}>
          {projects.map((p) => (
            <a href="#" className={s.tile} key={p.name}>
              <span className={`${s.frame} ${s.h250}`}>
                <Image src={p.src} alt={p.alt} fill sizes="33vw" className={s.cover} style={{ objectPosition: p.pos ?? '50% 50%' }} />
              </span>
              <span className={s.tileMeta}>
                <span>{p.name}</span>
                <span className={s.tileArea}>{p.area}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.ctaDark}>
          <div>
            <h2>Розкажіть про об’єкт — повернемось з планом і вилкою бюджету</h2>
            <p className={s.ctaMeta}>
              м. Київ, ЖК Great, Дніпровська набережна 15Ж, оф. 5 · hubremontu@gmail.com
            </p>
          </div>
          <div className={s.btnRow}>
            <a href="tel:+380683833888" className={`${s.btn} ${s.btnSm} ${s.outline}`} style={{ borderColor: 'rgba(242,238,232,.28)', color: '#f2eee8' }}>
              +38 068 383 38 88
            </a>
            <a href="#" className={`${s.btn} ${s.btnSm}`} style={{ background: 'var(--accHi)', color: '#1a1714' }}>
              Заповнити анкету
            </a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="2a" />
    </main>
  );
}
