import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';
import { directions, process, site } from '@/lib/content';

export const metadata = { title: '1c · Каталог — Hub Remontu' };

/* Only claims the live site actually publishes (business.ts, services.tsx,
   DepartmentPricing.tsx). There is no guarantee term in years anywhere on it. */
const tickerItems = ['300+ РЕАЛІЗОВАНИХ ОБʼЄКТІВ', '·', '13 РОКІВ ДОСВІДУ', '·', 'ФІКСОВАНА ЦІНА В ДОГОВОРІ', '·', 'ОПЛАТА ЗА ФАКТОМ РОБІТ', '·', 'ВЛАСНА КОМАНДА, БЕЗ СУБПІДРЯДНИКІВ', '·'];

/* Real titles from projectsShortInfo.tsx, including the commercial half of the
   portfolio. НАПРЯМОК replaces the invented «ТЕРМІН» — the site publishes no
   per-object timelines. */
const catalog = [
  { name: '2-рівнева квартира у ЖК Зарічний', ...photos.loungeColumn, specs: [['ТИП', 'КВАРТИРА'], ['ПЛОЩА', '140 М²'], ['НАПРЯМОК', 'РЕМОНТ']] },
  { name: '3-к квартира у ЖК Файна Таун', ...photos.fireplace, specs: [['ТИП', 'КВАРТИРА'], ['ПЛОЩА', '72 М²'], ['НАПРЯМОК', 'РЕМОНТ']] },
  { name: '2-к квартира у ЖК Сирецькі Сади', ...photos.livingPendants, specs: [['ТИП', 'КВАРТИРА'], ['ПЛОЩА', '62 М²'], ['НАПРЯМОК', 'ДИЗАЙН']] },
  { name: 'Офісне приміщення, ЖК New York Concept House', ...photos.kitchenOval, specs: [['ТИП', 'ОФІС'], ['ПЛОЩА', '700 М²'], ['НАПРЯМОК', 'РЕМОНТ']] },
  { name: 'Піцерія «Люта Піца»', ...photos.kitchenBar, specs: [['ТИП', 'РЕСТОРАН'], ['ПЛОЩА', '75 М²'], ['НАПРЯМОК', 'РЕМОНТ']] },
  { name: '2-к квартира у ЖК Campus', ...photos.kitchenMarble, specs: [['ТИП', 'КВАРТИРА'], ['ПЛОЩА', '70 М²'], ['НАПРЯМОК', 'ДИЗАЙН']] },
];

/* Process.tsx, verbatim step names */
const steps = process.map((p, i) => ({ n: `0${i + 1}`, name: p.name, note: p.note }));

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
          items={site.navShort.map((n) => n.toUpperCase())}
          navClassName={`${s.nav} ${s.navMono}`}
          toggleClassName={s.navToggle}
          wrapClassName={`${s.navWrap} ${s.navWrapEnd}`}
          label="МЕНЮ"
        />
        <div className={s.hdrActions}>
          <a href={site.navCtaHref} className={`${s.btn} ${s.btnMono} ${s.fill}`} style={{ padding: '11px 16px' }}>АНКЕТА →</a>
        </div>
      </header>

      <section className={s.heroCatalog}>
        <div className={s.heroCatalogText}>
          <div className={s.ruleRow}>
            <span>КИЇВ</span>
            <span />
            <span>13 РОКІВ</span>
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
            <a href={site.navCtaHref} className={`${s.btn} ${s.btnMono} ${s.fill}`}>ПОРАХУВАТИ КОШТОРИС</a>
            <a href="/portfolio" className={`${s.btn} ${s.btnMono} ${s.outline}`}>КАТАЛОГ ПРОЄКТІВ</a>
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
            {/* the site publishes a 300+ total but no per-category split */}
            <span className={`${s.filter} ${s.filterOn}`}>УСІ · 300+</span>
            <span className={s.filter}>ДИЗАЙН</span>
            <span className={s.filter}>РЕМОНТ</span>
            <span className={s.filter}>КОМЕРЦІЯ</span>
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
              Три поля — і ви бачите орієнтир від опублікованої ставки Hub Builds ({directions.builds.price}). Далі
              виїзд спеціаліста, замір і кошторис по позиціях.
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
                {/* 72 м² × «від 1000 $/м²» (DepartmentPricing.tsx) */}
                <div className={s.calcSum}>від $72 000</div>
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
          <span>HUB REMONTU · {site.address.toUpperCase()}</span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            <a href="https://t.me/HUB_GROUP_BOT" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
            <a href="https://www.instagram.com/hub_architects" target="_blank" rel="noopener noreferrer">IG ARCHITECTS</a>
            <a href="https://www.instagram.com/hub_builds" target="_blank" rel="noopener noreferrer">IG BUILDS</a>
            <a href="https://www.facebook.com/profile.php?id=61555825405999" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
            <a href={site.phoneHref} className={s.accent}>{site.phone}</a>
          </span>
        </div>
      </section>

      <FullVariantSwitcher active="1c" />
    </main>
  );
}
