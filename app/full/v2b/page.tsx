import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';
import { services as allServices, site, testimonials } from '@/lib/content';

export const metadata = { title: '2b · Тепла глина — Hub Remontu' };

/* Four of the six real service pages (business.ts SERVICES) — the grid holds four. */
const services = allServices.filter((sv) =>
  ['dyzajn-interieru', 'remont-kvartyr-pid-kliuch', 'remont-budynkiv-ta-kotedzhiv', 'remont-ofisiv-ta-komertsii'].includes(sv.slug),
);

/* Real portfolio titles; the site publishes no per-object durations. */
const projects = [
  { name: '2-к квартира у ЖК Сирецькі Сади', meta: '62 м² · дизайн-проєкт та реалізація', ...photos.livingPendants },
  { name: '2-к квартира у ЖК Campus', meta: '70 м² · ремонт під ключ', ...photos.livingTv },
  { name: 'Піцерія «Люта Піца»', meta: '75 м² · комерція · ремонт під ключ', ...photos.kitchenBar },
];

/* Placeholder swatches — replace with real team photos when the shoot lands. */
const team = [
  { name: 'Андрій', role: 'керівник студії', bg: '#e5d6c6' },
  { name: 'Марія', role: 'головна дизайнерка', bg: '#dbc9b5' },
  { name: 'Сергій', role: 'головний прораб', bg: '#cbb59c' },
];

export default function V2b() {
  return (
    <main className={`${s.page} ${s.v2b}`}>
      <header className={`${s.hdr} ${s.hdrPlain}`} style={{ padding: '20px var(--pad)' }}>
        <div className={s.logo}>
          <span className={s.logoMarkPlain}>hub</span>
          <span className={s.logoSub} style={{ letterSpacing: '.3em' }}>ремонту</span>
        </div>
        <NavMenu
          items={[...site.navShort]}
          navClassName={s.nav}
          navStyle={{ gap: 26 }}
          toggleClassName={s.navToggle}
          wrapClassName={s.navWrap}
        />
        <a href={site.navCtaHref} className={`${s.btn} ${s.btnSm} ${s.fill}`} style={{ color: '#fff', padding: '12px 20px' }}>
          {site.navCta}
        </a>
      </header>

      <section className={s.heroWarm}>
        <div>
          <h1 className={s.h1Warm}>
            Ремонт, після якого хочеться
            <br />
            приймати гостей
          </h1>
          <p className={s.lede} style={{ margin: '20px 0 0', maxWidth: 430, fontSize: 15.5 }}>
            Ми — київська студія з 13 роками досвіду і 300+ реалізованими обʼєктами. Проєктуємо, ремонтуємо й
            вмебльовуємо так, щоб ви жили в результаті десятиліттями, а не переробляли через рік.
          </p>
          <div className={s.btnRow} style={{ marginTop: 30 }}>
            <a href={site.navCtaHref} className={`${s.btn} ${s.fill}`} style={{ color: '#fff' }}>Виїзд спеціаліста і замір</a>
            <a href="/portfolio" className={`${s.btn} ${s.outline}`}>Наші роботи</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 30 }}>
            <span className={s.avatars}>
              {['#e5d6c6', '#d3bda6', '#c2a487'].map((bg) => (
                <span className={s.avatar} key={bg} style={{ background: bg }} />
              ))}
            </span>
            <span style={{ font: '400 12.5px/1.5 var(--font-body), sans-serif', color: 'var(--faint)' }}>
              <strong style={{ fontWeight: 700, color: 'var(--fg)' }}>300+ обʼєктів</strong> у Києві та області
            </span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className={s.arch}>
            <Image src={photos.kitchenIsland.src} alt={photos.kitchenIsland.alt} fill priority sizes="50vw" className={s.cover} style={{ objectPosition: '50% 50%' }} />
          </div>
          {/* the live site promises a guarantee but never a term in years */}
          <div className={s.floatStat}>
            <div className={s.floatStatVal}>Гарантія</div>
            <div className={s.floatStatLbl}>на всі виконані роботи</div>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.grid4}>
          {services.map((sv) => (
            <a href={`/posluhy/${sv.slug}/`} className={s.softCard} key={sv.slug}>
              <div className={s.softCardName}>{sv.name}</div>
              <p className={s.softCardNote}>{sv.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.h1Warm} style={{ fontSize: 34, marginBottom: 8 }}>Було / стало</h2>
        <p className={s.lede} style={{ margin: '0 0 26px', maxWidth: 520, fontSize: 14 }}>
          Найчесніший доказ — сіра коробка від забудовника і те, як у ній живуть зараз.
        </p>
        <div className={s.beforeAfter}>
          <div className={`${s.frame} ${s.frameRound} ${s.h330}`} style={{ background: '#ded4c8' }}>
            <Image src={photos.loungeColumn.src} alt="Квартира до ремонту — сіра коробка від забудовника" fill sizes="50vw" className={`${s.cover} ${s.grayscale}`} style={{ objectPosition: photos.loungeColumn.pos }} />
            <span className={`${s.baTag} ${s.baTagBefore}`}>ДО</span>
          </div>
          <div className={`${s.frame} ${s.frameRound} ${s.h330}`}>
            <Image src={photos.fireplace.src} alt="Та сама квартира після ремонту — вітальня з каміном" fill sizes="50vw" className={s.cover} style={{ objectPosition: photos.fireplace.pos }} />
            <span className={`${s.baTag} ${s.baTagAfter}`}>ПІСЛЯ</span>
          </div>
        </div>
        <div className={s.grid3} style={{ marginTop: 20 }}>
          {projects.map((p) => (
            <a href="/portfolio" className={s.tile} key={p.name}>
              <span className={`${s.frame} ${s.frameRound} ${s.h210}`}>
                <Image src={p.src} alt={p.alt} fill sizes="33vw" className={s.cover} style={{ objectPosition: p.pos }} />
              </span>
              <span style={{ display: 'block', marginTop: 12, font: '600 15px/1.3 var(--font-body), sans-serif' }}>{p.name}</span>
              <span style={{ display: 'block', marginTop: 4, font: '400 12.5px/1.4 var(--font-body), sans-serif', color: 'var(--faint)' }}>
                {p.meta}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.grid2} style={{ alignItems: 'center' }}>
          <blockquote className={s.testimonial}>
            <p>«{testimonials[1].quote}»</p>
            <div className={s.person}>
              <span className={s.personAvatar} />
              <span>
                <span className={s.personName}>{testimonials[1].name}</span>
                <span className={s.personRole}>{testimonials[1].role}</span>
              </span>
            </div>
          </blockquote>
          <div>
            <h2 className={s.h1Warm} style={{ fontSize: 32 }}>Люди, які робитимуть ваш ремонт</h2>
            <p className={s.lede} style={{ margin: '14px 0 0', fontSize: 14 }}>
              Не абстрактна «команда професіоналів» — конкретний прораб, дизайнер і менеджер, з якими ви на зв’язку весь
              проєкт.
            </p>
            <div className={s.grid3} style={{ gap: 14, marginTop: 24 }}>
              {team.map((t) => (
                <div className={s.teamCard} key={t.name}>
                  <div className={s.teamPhoto} style={{ background: t.bg }} />
                  <div className={s.teamName}>{t.name}</div>
                  <div className={s.teamRole}>{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.ctaWarm}>
          <div>
            <h2>Приїдемо, поміряємо, порахуємо</h2>
            <p>{site.address} · {site.email}</p>
          </div>
          <div className={s.btnRow}>
            <a href={site.phoneHref} className={`${s.btn} ${s.btnOnAcc}`}>{site.phone}</a>
            <a href={site.navCtaHref} className={`${s.btn} ${s.btnWhite}`}>{site.navCta}</a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="2b" />
    </main>
  );
}
