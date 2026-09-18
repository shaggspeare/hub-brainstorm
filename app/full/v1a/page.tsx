import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';
import { photos } from '@/lib/photos';
import {
  contact,
  directions,
  heroOriginal,
  marquee,
  process,
  projectsSetA,
  projectsCommercial,
  services,
  servicesHeading,
  site,
  socials,
  statsCore,
  testimonials,
} from '@/lib/content';

export const metadata = { title: '1a · Тихий люкс — Hub Remontu' };

/* 1a is the "keep the existing identity" variant, so it is the one that has to
 * match the live site rather than propose against it: same palette, same single
 * typeface (Geologica, set on .v1a), same outline-stroke headings, same square
 * corners, same dashed service cards, same section order — hero, what we do,
 * projects, marquee, process, reviews, contact.
 *
 * Every number and price comes from lib/content.ts, which reads them off the
 * live site. Nothing here is a rounder-sounding substitute. */

const byDept = (dept: string) => services.filter((x) => x.dept === dept);
const featured = [...projectsSetA, ...projectsCommercial].slice(0, 6);

export default function V1a() {
  return (
    <main className={`${s.page} ${s.v1a}`}>
      <header className={s.hdr}>
        <a href="/" className={s.logo} aria-label="Hub Remontu">
          <Image src={site.logo} alt="Hub Remontu" width={80} height={50} priority />
        </a>
        <NavMenu
          items={[...site.navShort]}
          navClassName={s.nav}
          toggleClassName={s.navToggle}
          wrapClassName={s.navWrap}
        />
        <div className={s.btnRow}>
          <a href={site.phoneHref} className={`${s.btn} ${s.btnSm} ${s.outline} ${s.hdrPhone}`}>{site.phone}</a>
          <a href={site.navCtaHref} className={`${s.btn} ${s.btnSm} ${s.fill}`}>{site.navCta}</a>
        </div>
      </header>

      <section className={s.heroSplit}>
        <div className={s.heroSplitText}>
          <div className={s.monoAcc} style={{ marginBottom: 26 }}>СТУДІЯ ДИЗАЙНУ ТА КОМПЛЕКСНОГО РЕМОНТУ · КИЇВ</div>
          <h1 className={s.h1}>
            {heroOriginal.titleLead}
            <br />
            <span className="stroke">{heroOriginal.titleAccent}</span>
          </h1>
          <p className={s.lede} style={{ margin: '24px 0 0', maxWidth: 470 }}>{heroOriginal.lede}</p>
          <div className={s.btnRow} style={{ marginTop: 34 }}>
            <a href={heroOriginal.ctaHref} className={`${s.btn} ${s.fill}`}>{heroOriginal.cta}</a>
            <a href="/portfolio" className={`${s.btn} ${s.outline}`}>Дивитись портфоліо</a>
          </div>
          <div className={`${s.stats} ${s.statsRule}`}>
            {statsCore.map((x) => (
              <div className={s.stat} key={x.label}>
                <div className={s.statVal}>{x.value}</div>
                <div className={s.statLbl}>{x.label}</div>
              </div>
            ))}
          </div>
          <ul className="socials" style={{ marginTop: 34 }}>
            {socials.map((sl) => (
              <li key={sl.href}>
                <a href={sl.href} target="_blank" rel="noopener noreferrer" aria-label={sl.name}>
                  {sl.icon.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.heroSplitPhoto}>
          <Image src={photos.livingPendants.src} alt={photos.livingPendants.alt} fill priority sizes="50vw" className={s.cover} style={{ objectPosition: photos.livingPendants.pos }} />
          <div className={s.videoBadge}>
            <span className={s.videoDot}>▶</span>
            <span className={s.videoLbl}>
              Відео про студію
              <br />
              <span>YouTube</span>
            </span>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.headRow} style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 18 }}>
          <h2 className={s.h2}>
            {servicesHeading.lead}
            <span className="stroke">{servicesHeading.stroke}</span>
            {servicesHeading.tail}
          </h2>
          <span className={s.mono} style={{ color: 'var(--muted)' }}>ДВА НАПРЯМКИ · ОДНА КОМАНДА</span>
        </div>

        {(['architects', 'builds'] as const).map((key) => {
          const d = directions[key];
          return (
            <div key={key} style={{ marginTop: 38 }}>
              <div className={s.deptRow}>
                <span className={s.deptId}>
                  <span className={s.deptBadge}>
                    <Image src={d.logo} alt={d.name} width={31} height={31} />
                  </span>
                  <span>
                    <span className={s.deptName}>{d.name}</span>
                    <span className={s.deptTagline}>{d.tagline}</span>
                  </span>
                </span>
                <a href={d.href} className={s.deptLink}>ПОСЛУГИ {d.name.toUpperCase()} →</a>
              </div>
              <div className={s.dashGrid}>
                {byDept(key).map((sv) => (
                  <div className={s.dashCard} key={sv.slug}>
                    <div className={s.dashCardName}>{sv.name}</div>
                    <p className={s.dashCardNote}>{sv.note}</p>
                    <a href={`/posluhy/${sv.slug}/`} className={s.dashCardLink}>Детальніше →</a>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 18 }}>
                {d.prices.map((p) => (
                  <div className={s.priceRow} key={p.label}>
                    <span>{p.label}</span>
                    <span className={s.priceVal}>{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className={s.section}>
        <div className={s.headRow}>
          <h2 className={s.h2}>
            Останні <span className="stroke">Проєкти</span>
          </h2>
          <a href="/portfolio" className={s.monoAcc}>ДО ВСІХ ПРОЄКТІВ →</a>
        </div>
        <div className={s.grid3} style={{ gap: 18 }}>
          {featured.map((p) => {
            const d = directions[p.dept ?? 'builds'];
            return (
              <a href="/portfolio" className={`${s.tile} ${s.frame} ${s.h250}`} key={p.name}>
                <Image src={p.src} alt={p.alt} fill sizes="33vw" className={s.cover} style={{ objectPosition: p.pos }} />
                <span className={s.tileBadge}>
                  <Image src={d.logo} alt={d.name} width={29} height={29} />
                </span>
                <span className={s.tileCaption}>
                  <span className={s.tileKicker}>{p.area}</span>
                  <span className={s.tileName}>{p.name}</span>
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* TextSlide.tsx — every other phrase outlined */}
      <div className="marquee" style={{ marginTop: 60 }}>
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <span className="marquee__half" key={copy} aria-hidden={copy === 1}>
              {marquee.map((line, i) => (
                <span key={line} className={i % 2 ? 'stroke' : undefined}>{line}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className={s.processBand}>
        <h2 className={s.h2} style={{ textAlign: 'center', marginBottom: 38 }}>
          <span className="stroke">Принцип</span> роботи
        </h2>
        <div className={s.processGrid}>
          {process.map((p) => (
            <div className={s.processCell} key={p.n}>
              <div className={s.processNum}>{p.n}</div>
              <div style={{ marginTop: 16, font: '600 18px/1.3 var(--font-body), sans-serif', color: 'var(--fg)' }}>{p.name}</div>
              <p className={s.lede} style={{ margin: '10px 0 0', fontSize: 13.5 }}>{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.headRow}>
          <h2 className={s.h2}>
            Наші відгуки <span className="stroke">говорять за нас</span>
          </h2>
        </div>
        <div className={s.grid3} style={{ gap: 30 }}>
          {testimonials.map((t) => (
            <div className={s.reviewCard} key={t.name}>
              <p className={s.reviewText}>{t.quote}</p>
              <span className={s.reviewWho}>{t.name.toUpperCase()} · {t.role.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.formGrid}>
          <div className={s.formSide}>
            <div className={s.monoAcc}>КОНТАКТИ</div>
            <h2 className={s.h2} style={{ margin: '18px 0 0', maxWidth: 400, fontSize: 32 }}>{contact.title}</h2>
            <p className={s.lede} style={{ margin: '16px 0 0', maxWidth: 380, fontSize: 14 }}>
              Заповніть анкету — після виїзду спеціаліста та замірів складаємо детальний кошторис і графік робіт.
            </p>
            <div style={{ display: 'grid', gap: 14, marginTop: 32, font: '400 13.5px/1.5 var(--font-body), sans-serif', color: 'var(--muted)' }}>
              <div>
                <span className={s.fieldLbl}>АДРЕСА</span>
                {site.address}
              </div>
              <div>
                <span className={s.fieldLbl}>КОНТАКТ</span>
                {site.email} · {site.phone}
              </div>
            </div>
          </div>
          <form className={s.formPanel}>
            <label>
              <span className={s.fieldLbl}>ВАШЕ ІМʼЯ *</span>
              <span className={s.fieldLine}>Ваше імʼя</span>
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
            <a href={site.navCtaHref} className={`${s.btn} ${s.fill}`} style={{ textAlign: 'center' }}>{site.navCta}</a>
          </form>
        </div>
      </section>

      <FullVariantSwitcher active="1a" />
    </main>
  );
}
