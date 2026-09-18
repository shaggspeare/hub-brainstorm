import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';

export const metadata = { title: '1a · Тихий люкс — Hub Remontu' };

const services = {
  architects: [
    { n: '01', name: 'Дизайн інтер’єру', note: 'Проєкт квартири чи будинку — практичний і продуманий до дрібниць.' },
    { n: '02', name: 'Дизайн комерції', note: 'Офіси, ресторани, клініки. 3D-візуалізації та повна документація.' },
  ],
  builds: [
    { n: '03', name: 'Ремонт квартир', note: 'Під ключ власною командою — від чорнових робіт до фінішу. Ціна в договорі.' },
    { n: '04', name: 'Ремонт будинків і комерції', note: 'Котеджі, таунхауси, офіси. Авторський нагляд і прозора звітність.' },
  ],
};

const smallProjects = [
  { ...photos.kitchenOval, kicker: '64 М²', name: 'Русанівська Гавань' },
  { ...photos.livingGreenery, kicker: '109 М² · HUB BUILDS', name: 'Кришталеві Джерела' },
  { ...photos.kitchenBar, kicker: '50 М² · ПРЕМІУМ', name: 'White Lines' },
];

export default function V1a() {
  return (
    <main className={`${s.page} ${s.v1a}`}>
      <header className={s.hdr}>
        <div className={s.logo}>
          <span className={s.logoMark}>HUB</span>
          <span className={s.logoSub}>REMONTU</span>
        </div>
        <NavMenu
          items={['Проєкти', 'Послуги', 'Про студію', 'Ціни', 'Контакти']}
          navClassName={s.nav}
          toggleClassName={s.navToggle}
          wrapClassName={s.navWrap}
        />
        <div className={s.btnRow}>
          <a href="tel:+380683833888" className={`${s.btn} ${s.btnSm} ${s.outline} ${s.hdrPhone}`}>+38 068 383 38 88</a>
          <a href="#" className={`${s.btn} ${s.btnSm} ${s.fill}`}>Анкета проєкту</a>
        </div>
      </header>

      <section className={s.heroSplit}>
        <div className={s.heroSplitText}>
          <div className={s.monoAcc} style={{ marginBottom: 26 }}>СТУДІЯ ДИЗАЙНУ ТА РЕМОНТУ · КИЇВ</div>
          <h1 className={s.h1}>
            Дизайн зі змістом.
            <br />
            <span className={s.accent}>Ремонт зі смаком.</span>
          </h1>
          <p className={s.lede} style={{ margin: '24px 0 0', maxWidth: 430 }}>
            Створюємо оселю мрії від концепції до келиха шампанського на честь новосілля — проєкт, ремонт і меблювання
            однією командою.
          </p>
          <div className={s.btnRow} style={{ marginTop: 34 }}>
            <a href="#" className={`${s.btn} ${s.fill}`}>Отримати консультацію</a>
            <a href="#" className={`${s.btn} ${s.outline}`}>Дивитись проєкти</a>
          </div>
          <div className={`${s.stats} ${s.statsRule}`}>
            {[
              { v: '180+', l: 'реалізованих проєктів' },
              { v: '12', l: 'років на ринку Києва' },
              { v: '3 роки', l: 'гарантії та фіксована ціна' },
            ].map((x) => (
              <div className={s.stat} key={x.l}>
                <div className={s.statVal}>{x.v}</div>
                <div className={s.statLbl}>{x.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.heroSplitPhoto}>
          <Image src={photos.livingPendants.src} alt={photos.livingPendants.alt} fill priority sizes="50vw" className={s.cover} style={{ objectPosition: '50% 50%' }} />
          <div className={s.videoBadge}>
            <span className={s.videoDot}>▶</span>
            <span className={s.videoLbl}>
              Відео про студію
              <br />
              <span>1 хв 40 с</span>
            </span>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.headRow} style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 18 }}>
          <h2 className={s.h2}>Що ми робимо для вас</h2>
          <span className={s.mono} style={{ color: 'var(--faint)' }}>ДВА НАПРЯМКИ · ОДНА КОМАНДА</span>
        </div>
        <div className={s.grid2} style={{ gap: 56, marginTop: 38 }}>
          {([['A', 'Hub Architects', 'дизайн та архітектура', services.architects],
             ['B', 'Hub Builds', 'ремонт та будівництво', services.builds]] as const).map(([letter, name, role, list]) => (
            <div key={name}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
                <span className={s.mono} style={{ color: 'var(--acc)' }}>{letter}</span>
                <span style={{ font: '700 15px/1 var(--font-body), sans-serif' }}>{name}</span>
                <span style={{ font: '400 12px/1 var(--font-body), sans-serif', color: 'var(--faint)' }}>{role}</span>
              </div>
              {list.map((it) => (
                <a href="#" className={s.svcRow} key={it.n}>
                  <span className={s.svcNum}>{it.n}</span>
                  <span className={s.svcBody}>
                    <span className={s.svcName}>{it.name}</span>
                    <span className={s.svcNote}>{it.note}</span>
                  </span>
                  <span className={s.accent}>→</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.headRow}>
          <h2 className={s.h2}>Останні проєкти</h2>
          <a href="#" className={s.monoAcc}>ДО ВСІХ ПРОЄКТІВ →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 18 }}>
          <a href="#" className={`${s.tile} ${s.frame} ${s.h400}`}>
            <Image src={photos.fireplace.src} alt={photos.fireplace.alt} fill sizes="60vw" className={s.cover} style={{ objectPosition: photos.fireplace.pos }} />
            <span className={s.tileCaption}>
              <span className={s.tileKicker}>280 М² · ХОДОСІВКА · HUB ARCHITECTS</span>
              <span className={s.tileName}>Розкішний приватний будинок</span>
            </span>
          </a>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 18 }}>
            {[
              { ...photos.loungeColumn, kicker: '78 М² · ЖК GREAT', name: 'Функціональний інтер’єр для родини' },
              { ...photos.kitchenMarble, kicker: '87 М² · ЖК ПРИЧАЛ 8', name: 'Елегантна квартира' },
            ].map((p) => (
              <a href="#" className={`${s.tile} ${s.frame}`} key={p.name}>
                <Image src={p.src} alt={p.alt} fill sizes="40vw" className={s.cover} style={{ objectPosition: p.pos }} />
                <span className={s.tileCaption}>
                  <span className={s.tileKicker}>{p.kicker}</span>
                  <span className={s.tileName}>{p.name}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className={s.grid3} style={{ marginTop: 18 }}>
          {smallProjects.map((p) => (
            <a href="#" className={`${s.tile} ${s.frame} ${s.h200}`} key={p.name}>
              <Image src={p.src} alt={p.alt} fill sizes="33vw" className={s.cover} style={{ objectPosition: p.pos }} />
              <span className={s.tileCaption}>
                <span className={s.tileKicker}>{p.kicker}</span>
                <span className={s.tileName}>{p.name}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.formGrid}>
          <div className={s.formSide}>
            <div className={s.monoAcc}>КОНТАКТИ</div>
            <h2 className={s.h2} style={{ margin: '18px 0 0', maxWidth: 380, fontSize: 32 }}>
              Найкращий час познайомитись — вже зараз
            </h2>
            <p className={s.lede} style={{ margin: '16px 0 0', maxWidth: 360, fontSize: 14 }}>
              Заповніть анкету — за 24 години надішлемо орієнтовний кошторис і план робіт.
            </p>
            <div style={{ display: 'grid', gap: 14, marginTop: 32, font: '400 13.5px/1.5 var(--font-body), sans-serif', color: 'var(--muted)' }}>
              <div>
                <span className={s.fieldLbl}>АДРЕСА</span>
                м. Київ, ЖК Great, Дніпровська набережна, 15Ж, офіс 5
              </div>
              <div>
                <span className={s.fieldLbl}>КОНТАКТ</span>
                hubremontu@gmail.com · +38 (068) 383 38 88
              </div>
            </div>
          </div>
          <form className={s.formPanel}>
            <label>
              <span className={s.fieldLbl}>ВАШЕ ІМ’Я *</span>
              <span className={s.fieldLine}>Ваше ім’я</span>
            </label>
            <label>
              <span className={s.fieldLbl}>ТЕЛЕФОН *</span>
              <span className={s.fieldLine}>+380 00 000 00 00</span>
            </label>
            <div>
              <span className={s.fieldLbl}>ЩО ПОТРІБНО</span>
              <span className={s.chipRow}>
                <span className={`${s.chip} ${s.chipOn}`}>Дизайн-проєкт</span>
                <span className={s.chip}>Ремонт</span>
                <span className={s.chip}>Меблювання</span>
              </span>
            </div>
            <a href="#" className={`${s.btn} ${s.fill}`} style={{ textAlign: 'center' }}>Надіслати заявку</a>
          </form>
        </div>
      </section>

      <FullVariantSwitcher active="1a" />
    </main>
  );
}
