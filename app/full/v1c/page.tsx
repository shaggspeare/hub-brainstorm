import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';

export const metadata = { title: '1c · Каталог — Hub Remontu' };

const tickerItems = ['180+ ПРОЄКТІВ', '·', 'ФІКСОВАНА ЦІНА В ДОГОВОРІ', '·', '3 РОКИ ГАРАНТІЇ', '·', 'ЩОТИЖНЕВИЙ ЗВІТ', '·', 'ВЛАСНА КОМАНДА МАЙСТРІВ', '·'];

const catalog = [
  { name: 'Функціональний інтер’єр для родини', ...photos.loungeColumn, specs: [['ЖК', 'GREAT'], ['ПЛОЩА', '78 М²'], ['ТЕРМІН', '5 МІС']] },
  { name: 'Приватний будинок у Ходосівці', ...photos.fireplace, specs: [['ТИП', 'БУДИНОК'], ['ПЛОЩА', '280 М²'], ['ТЕРМІН', '14 МІС']] },
  { name: 'Простора квартира San Francisco', ...photos.livingPendants, specs: [['ЖК', 'S.F. CREATIVE'], ['ПЛОЩА', '99 М²'], ['ТЕРМІН', '6 МІС']] },
  { name: 'Затишна квартира для родини', ...photos.kitchenOval, specs: [['ЖК', 'РУСАНІВСЬКА ГАВАНЬ'], ['ПЛОЩА', '64 М²'], ['ТЕРМІН', '4 МІС']] },
  { name: 'Преміум дизайн-проєкт White Lines', ...photos.kitchenBar, specs: [['ЖК', 'WHITE LINES'], ['ПЛОЩА', '50 М²'], ['ТЕРМІН', '3 МІС']] },
  { name: 'Елегантна квартира Причал 8', ...photos.kitchenMarble, specs: [['ЖК', 'ПРИЧАЛ 8'], ['ПЛОЩА', '87 М²'], ['ТЕРМІН', '5 МІС']] },
];

const steps = [
  { n: '01', name: 'Знайомство', note: 'Дзвінок або зустріч у студії в ЖК Great.' },
  { n: '02', name: 'Виїзд і замір', note: 'Оцінка стану об’єкта, план майбутніх робіт.' },
  { n: '03', name: 'Проєкт і кошторис', note: 'Детальний кошторис, договір, графік робіт.' },
  { n: '04', name: 'Роботи', note: 'Матеріали, майстри, щотижневий звіт до здачі.' },
];

export default function V1c() {
  return (
    <main className={`${s.page} ${s.v1c}`}>
      <header className={`${s.hdr} ${s.hdrDashed}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <span className={s.logoMark} style={{ fontSize: 17, letterSpacing: '-.03em' }}>
            HUB<span className={s.accent}>.</span>
          </span>
          <span className={s.hdrTags}>
            <span className={s.hdrTag}>ARCHITECTS</span>
            <span className={s.hdrTag}>BUILDS</span>
          </span>
        </div>
        <NavMenu
          items={['КАТАЛОГ', 'ПОСЛУГИ', 'СТУДІЯ', 'ЦІНИ']}
          navClassName={`${s.nav} ${s.navMono}`}
          toggleClassName={s.navToggle}
          wrapClassName={`${s.navWrap} ${s.navWrapEnd}`}
          label="МЕНЮ"
        />
        <div className={s.hdrActions}>
          <a href="#" className={`${s.btn} ${s.btnMono} ${s.fill}`} style={{ padding: '11px 16px' }}>КОШТОРИС →</a>
        </div>
      </header>

      <section className={s.heroCatalog}>
        <div className={s.heroCatalogText}>
          <div className={s.ruleRow}>
            <span>КИЇВ</span>
            <span />
            <span>З 2014</span>
          </div>
          <h1 className={s.h1Display}>
            Дизайн
            <br />
            <span>Ремонт</span>
            <br />
            Меблі
          </h1>
          <p className={s.lede} style={{ margin: '30px 0 0', maxWidth: 400, fontSize: 14.5 }}>
            Повний цикл в одному договорі: проєкт, чорнові й оздоблювальні роботи, меблювання. Кошторис по позиціях — до
            старту.
          </p>
          <div className={s.btnRow} style={{ marginTop: 32 }}>
            <a href="#" className={`${s.btn} ${s.btnMono} ${s.fill}`}>ПОРАХУВАТИ КОШТОРИС</a>
            <a href="#" className={`${s.btn} ${s.btnMono} ${s.outline}`}>КАТАЛОГ ПРОЄКТІВ</a>
          </div>
        </div>
        <div className={s.heroCatalogPhoto}>
          <Image src={photos.livingOpenPlan.src} alt={photos.livingOpenPlan.alt} fill priority sizes="50vw" className={s.cover} style={{ objectPosition: photos.livingOpenPlan.pos }} />
          <div className={s.blueprint} />
          <div className={s.stampTL}>
            ЖК GREAT · 66 М²
            <br />
            СПАЛЬНЯ · 2025
          </div>
          <div className={s.stampBR}>3 400 ММ</div>
        </div>
      </section>

      <div className={s.ticker}>
        <div className={s.tickerTrack}>
          {[0, 1].map((half) => (
            <span className={s.tickerHalf} key={half}>
              {tickerItems.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className={s.section} style={{ paddingTop: 56 }}>
        <div className={s.headRow}>
          <h2 className={s.h2Display} style={{ fontSize: 30 }}>Каталог проєктів</h2>
          <span className={s.filterRow}>
            <span className={`${s.filter} ${s.filterOn}`}>УСІ · 180</span>
            <span className={s.filter}>ДИЗАЙН · 96</span>
            <span className={s.filter}>РЕМОНТ · 71</span>
            <span className={s.filter}>КОМЕРЦІЯ · 13</span>
          </span>
        </div>
        <div className={s.hairGrid}>
          {catalog.map((c) => (
            <a href="#" className={s.hairCell} key={c.name}>
              <span className={`${s.frame} ${s.h220}`}>
                <Image src={c.src} alt={c.alt} fill sizes="33vw" className={s.cover} style={{ objectPosition: c.pos ?? '50% 50%' }} />
              </span>
              <span style={{ display: 'block', marginTop: 14, font: '600 15px/1.3 var(--font-body), sans-serif' }}>{c.name}</span>
              <span className={s.specGrid}>
                {c.specs.map(([k, v]) => (
                  <span key={k} style={{ display: 'contents' }}>
                    <span>{k}</span>
                    <span className={s.specVal}>{v}</span>
                  </span>
                ))}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={s.section} style={{ paddingTop: 56 }}>
        <div className={s.calc}>
          <div>
            <div className={s.monoAcc} style={{ letterSpacing: '.18em', marginBottom: 20 }}>КРОК 01 · КОШТОРИС</div>
            <h2 className={s.h2Display}>
              Скільки
              <br />
              це коштує
            </h2>
            <p className={s.lede} style={{ margin: '18px 0 0', fontSize: 13.5 }}>
              Три поля — і ви бачите вилку ціни за поточними прайсами. Далі виїзд спеціаліста, замір, кошторис по
              позиціях.
            </p>
          </div>
          <div>
            <div className={s.grid3} style={{ gap: 16 }}>
              {[['ПЛОЩА, М²', '72'], ['ТИП', 'Квартира'], ['РІВЕНЬ', 'Комфорт+']].map(([k, v]) => (
                <div key={k}>
                  <div className={s.mono} style={{ letterSpacing: '.14em', color: 'var(--faint)', marginBottom: 10 }}>{k}</div>
                  <div className={s.calcField}>{v}</div>
                </div>
              ))}
            </div>
            <div className={s.calcTotal}>
              <div>
                <div className={s.mono} style={{ letterSpacing: '.14em', color: 'var(--faint)', marginBottom: 10 }}>
                  ОРІЄНТОВНО, РОБОТИ + МАТЕРІАЛИ
                </div>
                <div className={s.calcSum}>$21 600 — 27 400</div>
              </div>
              <a href="#" className={`${s.btn} ${s.btnMono} ${s.fillPaper}`}>ОТРИМАТИ ТОЧНИЙ →</a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} style={{ paddingTop: 56 }}>
        <div className={s.stepGrid}>
          {steps.map((st, i) => (
            <div className={s.step} key={st.n}>
              <div className={`${s.stepNum} ${i === 3 ? s.stepNumOn : ''}`}>{st.n}</div>
              <div style={{ marginTop: 16, font: '600 15px/1.3 var(--font-body), sans-serif' }}>{st.name}</div>
              <p className={s.lede} style={{ margin: '8px 0 0', fontSize: 12.5 }}>{st.note}</p>
            </div>
          ))}
        </div>
        <div className={s.footRow}>
          <span>HUB REMONTU · КИЇВ, ЖК GREAT, ДНІПРОВСЬКА НАБЕРЕЖНА 15Ж, ОФ. 5</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <a href="#">TELEGRAM</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="tel:+380683833888" className={s.accent}>+38 068 383 38 88</a>
          </span>
        </div>
      </section>

      <FullVariantSwitcher active="1c" />
    </main>
  );
}
