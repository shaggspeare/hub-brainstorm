import Image from 'next/image';
import s from '../full.module.css';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';

export const metadata = { title: '1b · Світлий редакційний — Hub Remontu' };

const cases = [
  { date: '01 / 2025', name: 'Двокімнатна квартира для родини', meta: 'ЖК GREAT · 66 М² · ДИЗАЙН + РЕМОНТ + МЕБЛЮВАННЯ', ...photos.livingGreenery },
  { date: '02 / 2025', name: 'Розкішний приватний будинок', meta: 'ХОДОСІВКА · 280 М² · ДИЗАЙН-ПРОЄКТ ТА АВТОРСЬКИЙ НАГЛЯД', ...photos.fireplace },
  { date: '03 / 2024', name: 'Квартира на мансардному поверсі', meta: 'ЖК КРИШТАЛЕВІ ДЖЕРЕЛА · 109 М² · РЕМОНТ ПІД КЛЮЧ', ...photos.kitchenOval },
];

const cells = [
  { n: '01', name: 'Дизайн інтер’єру', note: 'Планування, візуалізації, креслення, підбір матеріалів.' },
  { n: '02', name: 'Дизайн комерції', note: 'Офіси, ресторани, клініки, магазини — з повною документацією.' },
  { n: '03', name: 'Ремонт під ключ', note: 'Власна команда майстрів, фіксована ціна, щотижневий звіт.' },
  { n: '04', name: 'Меблювання', note: 'Замовляємо, приймаємо, збираємо — ви заходите в готове.' },
];

export default function V1b() {
  return (
    <main className={`${s.page} ${s.v1b}`}>
      <header className={s.hdr}>
        <div className={s.logo}>
          <span className={s.logoMarkSerif}>HUB</span>
          <span className={s.logoSub}>REMONTU</span>
        </div>
        <nav className={s.nav}>
          {['Проєкти', 'Послуги', 'Студія', 'Ціни', 'Контакти'].map((i) => (
            <a href="#" key={i}>{i}</a>
          ))}
          <a href="#" className={`${s.btn} ${s.btnSm} ${s.outlineSolid}`}>Анкета проєкту</a>
        </nav>
      </header>

      <section className={s.heroEditorial}>
        <div>
          <div className={s.monoAcc} style={{ letterSpacing: '.24em', marginBottom: 28 }}>
            СТУДІЯ ДИЗАЙНУ ТА КОМПЛЕКСНОГО РЕМОНТУ · КИЇВ
          </div>
          <h1 className={s.h1Serif}>
            Дизайн зі змістом.
            <br />
            <em>Ремонт зі смаком.</em>
          </h1>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <p className={s.lede} style={{ fontSize: 15.5 }}>
            Ми проєктуємо, ремонтуємо та вмебльовуємо — одна команда від першого ескізу до келиха шампанського на
            новосіллі.
          </p>
          <div className={s.btnRow} style={{ marginTop: 26 }}>
            <a href="#" className={`${s.btn} ${s.fillInk}`}>Отримати консультацію</a>
            <a href="#" className={`${s.btn} ${s.outline}`}>Портфоліо</a>
          </div>
        </div>
      </section>

      <div className={`${s.frame} ${s.h440}`} style={{ margin: '52px var(--pad) 0' }}>
        <Image src={photos.livingPendants.src} alt={photos.livingPendants.alt} fill priority sizes="100vw" className={s.cover} style={{ objectPosition: '50% 50%' }} />
      </div>

      <div className={s.stats} style={{ margin: '0 var(--pad)', borderBottom: '1px solid var(--rule)', gap: 0 }}>
        {[
          { v: '12', l: 'років практики' },
          { v: '180+', l: 'проєктів у Києві та області' },
          { v: '3 роки', l: 'гарантії на роботи' },
          { v: 'Фікс', l: 'ціна закріплена в договорі' },
        ].map((x) => (
          <div className={s.stat} key={x.l} style={{ padding: '26px 0' }}>
            <div className={s.statValSerif}>{x.v}</div>
            <div className={s.statLbl}>{x.l}</div>
          </div>
        ))}
      </div>

      <section className={s.section} style={{ paddingTop: 72 }}>
        <div className={s.headRow} style={{ marginBottom: 44, alignItems: 'baseline' }}>
          <h2 className={s.h2Serif}>Вибрані проєкти</h2>
          <a href="#" style={{ font: '600 12px/1 var(--font-body), sans-serif', letterSpacing: '.14em', color: 'var(--acc)' }}>
            ВСІ 180 ПРОЄКТІВ →
          </a>
        </div>
        {cases.map((c) => (
          <a href="#" className={s.caseRow} key={c.date}>
            <span className={s.caseDate}>{c.date}</span>
            <span>
              <span className={s.caseName}>{c.name}</span>
              <span className={s.caseMeta}>{c.meta}</span>
            </span>
            <span className={`${s.frame} ${s.h240}`}>
              <Image src={c.src} alt={c.alt} fill sizes="460px" className={s.cover} style={{ objectPosition: c.pos ?? '50% 50%' }} />
            </span>
          </a>
        ))}
      </section>

      <section className={s.section} style={{ paddingTop: 72 }}>
        <div className={s.grid2} style={{ gridTemplateColumns: '.9fr 1.1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <h2 className={s.h2Serif}>
              Дві команди,
              <br />
              один договір
            </h2>
            <p className={s.lede} style={{ margin: '20px 0 0', fontSize: 14.5 }}>
              Hub Architects проєктує, Hub Builds будує. Ви не шукаєте підрядника після дизайну — і не чуєте «так у
              проєкті намальовано, а в житті не виходить».
            </p>
            <div className={`${s.frame} ${s.h300}`} style={{ marginTop: 28 }}>
              <Image src={photos.kitchenIsland.src} alt={photos.kitchenIsland.alt} fill sizes="45vw" className={s.cover} style={{ objectPosition: '50% 50%' }} />
            </div>
          </div>
          <div>
            <div className={s.cellGrid}>
              {cells.map((c, i) => (
                <div className={i % 2 ? s.cellRight : s.cell} key={c.n}>
                  <div className={s.cellNum}>{c.n}</div>
                  <div className={s.cellName}>{c.name}</div>
                  <p className={s.cellNote}>{c.note}</p>
                </div>
              ))}
            </div>
            <blockquote className={s.quote}>
              <p>
                Одна з небагатьох компаній, яка реально подивилась на мій дизайн-проєкт і дала ціну під конкретні роботи,
                а не «середню за м²».
              </p>
              <footer>ОЛЬГА ДАНИЛЕЦЬ · КЛІЄНТКА</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={s.bandDark}>
        <div className={s.grid2} style={{ gap: 56, alignItems: 'center' }}>
          <div>
            <h2 className={s.h2Serif} style={{ fontSize: 40 }}>Найкращий час познайомитись — вже зараз</h2>
            <p style={{ margin: '18px 0 0', maxWidth: 420, font: '400 14.5px/1.7 var(--font-body), sans-serif', color: 'rgba(244,241,234,.62)' }}>
              м. Київ, ЖК Great, Дніпровська набережна, 15Ж, офіс 5 · hubremontu@gmail.com
            </p>
          </div>
          <div className={s.btnRow} style={{ justifyContent: 'flex-end' }}>
            <a href="tel:+380683833888" className={`${s.btn} ${s.outline}`} style={{ borderColor: 'rgba(244,241,234,.3)', color: '#f4f1ea' }}>
              +38 068 383 38 88
            </a>
            <a href="#" className={s.btn} style={{ background: 'var(--accHi)', color: '#1a1714' }}>Заповнити анкету</a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="1b" />
    </main>
  );
}
