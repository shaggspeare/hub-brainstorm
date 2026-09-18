import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';
import { heroOriginal, site, statsWide, testimonials } from '@/lib/content';

export const metadata = { title: '1b · Світлий редакційний — Hub Remontu' };

/* Real portfolio titles (projectsShortInfo.tsx) — the site names an object by
   its layout, area and ЖК, not with a mood line. */
const cases = [
  { date: '01', name: '2-к квартира у ЖК Сирецькі Сади', meta: '62 М² · ДИЗАЙН-ПРОЄКТ ТА РЕАЛІЗАЦІЯ', ...photos.livingGreenery },
  { date: '02', name: '3-к квартира у ЖК Файна Таун', meta: '72 М² · РЕМОНТ ПІД КЛЮЧ', ...photos.fireplace },
  { date: '03', name: 'Офісне приміщення, ЖК New York Concept House', meta: '700 М² · КОМЕРЦІЯ · РЕМОНТ ПІД КЛЮЧ', ...photos.kitchenOval },
];

/* The four real service pages of the two departments (business.ts SERVICES). */
const cells = [
  { n: '01', name: 'Дизайн інтерʼєру', note: 'Індивідуальний проєкт під ваш стиль і бюджет, 3D-візуалізації.' },
  { n: '02', name: 'Дизайн комерції', note: 'Офіси, ресторани, клініки, шоуруми — з повною документацією.' },
  { n: '03', name: 'Ремонт квартир під ключ', note: 'Власна команда, фіксована ціна в договорі, авторський нагляд.' },
  { n: '04', name: 'Ремонт офісів та комерції', note: 'Запускаємо бізнес вчасно, мінімізуємо простій.' },
];

export default function V1b() {
  return (
    <main className={`${s.page} ${s.v1b}`}>
      <header className={s.hdr}>
        <div className={s.logo}>
          <span className={s.logoMarkSerif}>HUB</span>
          <span className={s.logoSub}>REMONTU</span>
        </div>
        <NavMenu
          items={[...site.navShort]}
          navClassName={s.nav}
          toggleClassName={s.navToggle}
          wrapClassName={`${s.navWrap} ${s.navWrapEnd}`}
        />
        <div className={s.hdrActions}>
          <a href={site.navCtaHref} className={`${s.btn} ${s.btnSm} ${s.outlineSolid}`}>{site.navCta}</a>
        </div>
      </header>

      <section className={s.heroEditorial}>
        <div>
          <div className={s.monoAcc} style={{ letterSpacing: '.24em', marginBottom: 28 }}>
            СТУДІЯ ДИЗАЙНУ ТА КОМПЛЕКСНОГО РЕМОНТУ · КИЇВ
          </div>
          <h1 className={s.h1Serif}>
            {heroOriginal.titleLead}
            <br />
            <em>{heroOriginal.titleAccent}</em>
          </h1>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <p className={s.lede} style={{ fontSize: 15.5 }}>
            Студія дизайну інтерʼєру та комплексного ремонту: створюємо оселю мрії від концепції до келиха шампанського
            на честь вашого новосілля.
          </p>
          <div className={s.btnRow} style={{ marginTop: 26 }}>
            <a href={heroOriginal.ctaHref} className={`${s.btn} ${s.fillInk}`}>{heroOriginal.cta}</a>
            <a href="/portfolio" className={`${s.btn} ${s.outline}`}>Портфоліо</a>
          </div>
        </div>
      </section>

      <div className={`${s.frame} ${s.h440}`} style={{ margin: '52px var(--pad) 0' }}>
        <Image src={photos.livingPendants.src} alt={photos.livingPendants.alt} fill priority sizes="100vw" className={s.cover} style={{ objectPosition: '50% 50%' }} />
      </div>

      <div className={s.stats} style={{ margin: '0 var(--pad)', borderBottom: '1px solid var(--rule)', gap: 0 }}>
        {statsWide.map((x) => (
          <div className={s.stat} key={x.label} style={{ padding: '26px 0' }}>
            <div className={s.statValSerif}>{x.value}</div>
            <div className={s.statLbl}>{x.label}</div>
          </div>
        ))}
      </div>

      <section className={s.section} style={{ paddingTop: 72 }}>
        <div className={s.headRow} style={{ marginBottom: 44, alignItems: 'baseline' }}>
          <h2 className={s.h2Serif}>Вибрані проєкти</h2>
          <a href="/portfolio" style={{ font: '600 12px/1 var(--font-body), sans-serif', letterSpacing: '.14em', color: 'var(--acc)' }}>
            ВСІ ПРОЄКТИ →
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
              <p>{testimonials[0].quote}</p>
              <footer>{testimonials[0].name.toUpperCase()} · {testimonials[0].role.toUpperCase()}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={s.bandDark}>
        <div className={s.grid2} style={{ gap: 56, alignItems: 'center' }}>
          <div>
            <h2 className={s.h2Serif} style={{ fontSize: 40 }}>Найкращий час познайомитись — вже зараз</h2>
            <p style={{ margin: '18px 0 0', maxWidth: 420, font: '400 14.5px/1.7 var(--font-body), sans-serif', color: 'rgba(244,241,234,.62)' }}>
              {site.address} · {site.email}
            </p>
          </div>
          <div className={s.btnRow} style={{ justifyContent: 'flex-end' }}>
            <a href={site.phoneHref} className={`${s.btn} ${s.outline}`} style={{ borderColor: 'rgba(244,241,234,.3)', color: '#f4f1ea' }}>
              {site.phone}
            </a>
            <a href={site.navCtaHref} className={s.btn} style={{ background: 'var(--accHi)', color: '#1a1714' }}>{site.navCta}</a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="1b" />
    </main>
  );
}
