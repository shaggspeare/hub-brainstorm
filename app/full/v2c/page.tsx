import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';
import { site } from '@/lib/content';

export const metadata = { title: '2c · Прозорий процес — Hub Remontu' };

/** left/width are percentages of the 5-month programme. */
const gantt = [
  { name: 'Демонтаж', left: 0, width: 16, color: '#2f6b4f' },
  { name: 'Інженерія', left: 14, width: 26, color: '#2f6b4f' },
  { name: 'Чорнові роботи', left: 32, width: 30, color: '#4a8f6c' },
  { name: 'Оздоблення', left: 56, width: 30, color: '#7fb79a' },
  { name: 'Меблювання', left: 80, width: 20, color: '#c9a227' },
];

const week = [
  { day: 'ПН', name: 'План тижня', note: 'Що саме роблять і хто на об’єкті.' },
  { day: 'СР', name: 'Закупівлі', note: 'Чеки й залишок бюджету по позиціях.' },
  { day: 'ПТ', name: 'Фотозвіт', note: '20–30 фото і статус за графіком.' },
  { day: 'БУДЬ-КОЛИ', name: 'Прямий контакт', note: 'Прораб і менеджер у спільному чаті.', on: true },
];

/* Real portfolio titles. The live site publishes no plan-vs-actual durations,
   so the second slot carries the department instead of an invented timeline. */
const objects = [
  { name: '2-рівнева квартира, ЖК Зарічний', plan: 'РЕМОНТ ПІД КЛЮЧ', done: 'ЗДАНО', ...photos.livingPendants },
  { name: '3-к квартира, ЖК Файна Таун', plan: 'РЕМОНТ ПІД КЛЮЧ', done: 'ЗДАНО', ...photos.fireplace },
  { name: 'Офіс, ЖК New York Concept House', plan: 'КОМЕРЦІЯ · 700 М²', done: 'ЗДАНО', ...photos.kitchenOval },
];

export default function V2c() {
  return (
    <main className={`${s.page} ${s.v2c}`}>
      <header className={s.hdr}>
        <div className={s.logo}>
          <span className={s.logoMarkPlain} style={{ fontSize: 18 }}>HUB</span>
          <span className={s.logoSub} style={{ font: '500 10px/1 var(--font-mono), monospace', letterSpacing: '.28em' }}>REMONTU</span>
        </div>
        <NavMenu
          items={[...site.navShort]}
          navClassName={s.nav}
          navStyle={{ gap: 26 }}
          toggleClassName={s.navToggle}
          wrapClassName={s.navWrap}
        />
        <a href={site.navCtaHref} className={`${s.btn} ${s.btnSm} ${s.fill}`} style={{ color: '#fff' }}>{site.navCta}</a>
      </header>

      <section className={s.heroProcess}>
        <div>
          {/* the site publishes no on-time percentage — this is its payment promise */}
          <div className={s.pill}>
            <span className={s.pillDot} />
            Фіксована ціна в договорі, оплата за фактом виконаних робіт
          </div>
          <h1 className={s.h1} style={{ fontSize: 46 }}>Ремонт без «плюс 40%» наприкінці</h1>
          <p className={s.lede} style={{ margin: '18px 0 0', maxWidth: 430 }}>
            Кошторис по позиціях до старту, ціна закріплена в договорі, авторський нагляд на кожному етапі. Дизайн і
            ремонт — однією командою, без субпідрядників.
          </p>
          <div className={s.btnRow} style={{ marginTop: 28 }}>
            <a href={site.navCtaHref} className={`${s.btn} ${s.fill}`} style={{ color: '#fff' }}>Розрахувати кошторис</a>
            <a href="/tsiny" className={`${s.btn} ${s.outline}`}>Ціни</a>
          </div>
          <div className={s.grid2} style={{ gap: 14, marginTop: 34 }}>
            {[['300+', 'реалізованих обʼєктів'], ['13', 'років досвіду']].map(([v, l]) => (
              <div className={s.statBox} key={l}>
                <div className={s.statVal} style={{ fontSize: 22, fontWeight: 700 }}>{v}</div>
                <div className={s.statLbl}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={s.panel}>
          <div className={s.panelHead}>
            <span className={s.panelTitle}>Графік робіт · квартира 72 м²</span>
            {/* the site names a графік робіт in Process step 3 but publishes no duration */}
            <span className={s.panelNote}>ЕТАПИ РОБІТ</span>
          </div>
          <div className={s.ganttBody}>
            {gantt.map((g) => (
              <div className={s.ganttRow} key={g.name}>
                <span className={s.ganttName}>{g.name}</span>
                <span className={s.ganttTrack}>
                  <span className={s.ganttBar} style={{ left: `${g.left}%`, width: `${g.width}%`, background: g.color }} />
                </span>
              </div>
            ))}
          </div>
          <div className={s.budgetRow}>
            {/* 72 м² × «від 1000 $/м²» (DepartmentPricing.tsx) = від $72 000 */}
            <div className={s.budgetCell}>
              <div className={s.budgetLbl}>РОБОТИ</div>
              <div className={s.budgetVal}>$31 000</div>
            </div>
            <div className={s.budgetCell}>
              <div className={s.budgetLbl}>МАТЕРІАЛИ</div>
              <div className={s.budgetVal}>$41 000</div>
            </div>
            <div className={`${s.budgetCell} ${s.budgetTotal}`}>
              <div className={`${s.budgetLbl} ${s.budgetLblOn}`}>РАЗОМ У ДОГОВОРІ</div>
              <div className={`${s.budgetVal} ${s.budgetValOn}`}>від $72 000</div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.h2} style={{ marginBottom: 24, fontWeight: 800 }}>Що ви отримуєте кожного тижня</h2>
        <div className={s.grid4}>
          {week.map((w) => (
            <div className={`${s.weekCard} ${w.on ? s.weekCardOn : ''}`} key={w.day}>
              <div className={s.weekDay}>{w.day}</div>
              <div className={s.weekName}>{w.name}</div>
              <p className={s.weekNote}>{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.headRow}>
          <h2 className={s.h2} style={{ fontWeight: 800 }}>Здані об’єкти</h2>
          <a href="/portfolio" style={{ font: '600 12.5px/1 var(--font-body), sans-serif', color: 'var(--acc)' }}>Усі проєкти →</a>
        </div>
        <div className={s.grid3} style={{ gap: 18 }}>
          {objects.map((o) => (
            <a href="/portfolio" className={s.objCard} key={o.name}>
              <span className={`${s.frame} ${s.h200}`}>
                <Image src={o.src} alt={o.alt} fill sizes="33vw" className={s.cover} style={{ objectPosition: o.pos ?? '50% 50%' }} />
              </span>
              <span className={s.objBody}>
                <span className={s.objName}>{o.name}</span>
                <span className={s.objMeta}>
                  <span>{o.plan}</span>
                  <span className={s.objOk}>{o.done}</span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.ctaBox}>
          <div>
            <h2>Надішліть план квартири — складемо кошторис після виїзду й замірів</h2>
            <p>{site.address} · {site.email} · {site.phone}</p>
          </div>
          <div className={s.btnRow}>
            <a href="https://t.me/HUB_GROUP_BOT" target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnSm} ${s.outline}`}>
              Написати в Telegram
            </a>
            <a href={site.navCtaHref} className={`${s.btn} ${s.btnSm} ${s.fill}`} style={{ color: '#fff' }}>{site.navCta}</a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="2c" />
    </main>
  );
}
