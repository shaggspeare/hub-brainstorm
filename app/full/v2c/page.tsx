import Image from 'next/image';
import s from '../full.module.css';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';

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

const objects = [
  { name: 'ЖК Great, 78 м²', plan: 'ПЛАН 5 МІС', done: 'ЗДАНО 4 МІС 3 ТИЖ', ...photos.livingPendants },
  { name: 'Будинок, Ходосівка, 280 м²', plan: 'ПЛАН 14 МІС', done: 'ЗДАНО В СТРОК', ...photos.fireplace },
  { name: 'ЖК Причал 8, 87 м²', plan: 'ПЛАН 5 МІС', done: 'ЗДАНО В СТРОК', ...photos.kitchenOval },
];

export default function V2c() {
  return (
    <main className={`${s.page} ${s.v2c}`}>
      <header className={s.hdr}>
        <div className={s.logo}>
          <span className={s.logoMarkPlain} style={{ fontSize: 18 }}>HUB</span>
          <span className={s.logoSub} style={{ font: '500 10px/1 var(--font-mono), monospace', letterSpacing: '.28em' }}>REMONTU</span>
        </div>
        <nav className={s.nav} style={{ gap: 26 }}>
          {['Як ми працюємо', 'Проєкти', 'Ціни', 'Студія'].map((i) => (
            <a href="#" key={i}>{i}</a>
          ))}
        </nav>
        <a href="#" className={`${s.btn} ${s.btnSm} ${s.fill}`} style={{ color: '#fff' }}>Отримати кошторис</a>
      </header>

      <section className={s.heroProcess}>
        <div>
          <div className={s.pill}>
            <span className={s.pillDot} />
            92% проєктів здано в строк за 2025 рік
          </div>
          <h1 className={s.h1} style={{ fontSize: 46 }}>Ремонт без «плюс 40%» наприкінці</h1>
          <p className={s.lede} style={{ margin: '18px 0 0', maxWidth: 430 }}>
            Кошторис по позиціях до старту, ціна закріплена в договорі, графік робіт і фотозвіт щоп’ятниці. Дизайн і
            ремонт — однією командою.
          </p>
          <div className={s.btnRow} style={{ marginTop: 28 }}>
            <a href="#" className={`${s.btn} ${s.fill}`} style={{ color: '#fff' }}>Розрахувати кошторис</a>
            <a href="#" className={`${s.btn} ${s.outline}`}>Приклад договору</a>
          </div>
          <div className={s.grid2} style={{ gap: 14, marginTop: 34 }}>
            {[['180+', 'об’єктів з 2014 року'], ['3 роки', 'гарантії письмово']].map(([v, l]) => (
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
            <span className={s.panelNote}>5 МІСЯЦІВ</span>
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
            <div className={s.budgetCell}>
              <div className={s.budgetLbl}>РОБОТИ</div>
              <div className={s.budgetVal}>$12 400</div>
            </div>
            <div className={s.budgetCell}>
              <div className={s.budgetLbl}>МАТЕРІАЛИ</div>
              <div className={s.budgetVal}>$9 200</div>
            </div>
            <div className={`${s.budgetCell} ${s.budgetTotal}`}>
              <div className={`${s.budgetLbl} ${s.budgetLblOn}`}>РАЗОМ У ДОГОВОРІ</div>
              <div className={`${s.budgetVal} ${s.budgetValOn}`}>$21 600</div>
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
          <a href="#" style={{ font: '600 12.5px/1 var(--font-body), sans-serif', color: 'var(--acc)' }}>Усі проєкти →</a>
        </div>
        <div className={s.grid3} style={{ gap: 18 }}>
          {objects.map((o) => (
            <a href="#" className={s.objCard} key={o.name}>
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
            <h2>Надішліть план квартири — повернемось з кошторисом за 24 години</h2>
            <p>м. Київ, ЖК Great, Дніпровська набережна 15Ж, оф. 5 · hubremontu@gmail.com · +38 068 383 38 88</p>
          </div>
          <div className={s.btnRow}>
            <a href="#" className={`${s.btn} ${s.btnSm} ${s.outline}`}>Написати в Telegram</a>
            <a href="#" className={`${s.btn} ${s.btnSm} ${s.fill}`} style={{ color: '#fff' }}>Надіслати план</a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="2c" />
    </main>
  );
}
