import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';
import { directions, hero, projectsSetA, seamLineInline, site } from '@/lib/content';

export const metadata = { title: '2a · Дві половини — Hub Remontu' };

/* Both columns — names, taglines, notes, prices, CTAs — come from
   lib/content.ts, which mirrors business.ts DEPARTMENTS and the two pricing
   plans in DepartmentPricing.tsx. Architects has no per-m² rate on the live
   site; Builds is «від 1000 $/м²». */
const columns = (['architects', 'builds'] as const).map((key) => ({ key, ...directions[key] }));

export default function V2a() {
  return (
    <main className={`${s.page} ${s.v2a}`}>
      <header className={`${s.hdr} ${s.hdrDark}`}>
        <div className={s.logo}>
          <span className={s.logoMark}>HUB</span>
          <span className={s.logoSub} style={{ color: 'var(--accHi)' }}>REMONTU</span>
        </div>
        <NavMenu
          items={[...site.navShort]}
          navClassName={s.nav}
          navStyle={{ color: 'rgba(242,238,232,.8)' }}
          toggleClassName={s.navToggle}
          wrapClassName={s.navWrap}
        />
        <a href={site.navCtaHref} className={s.btn} style={{ background: 'var(--accHi)', color: '#1a1714', font: '600 12.5px/1 var(--font-body), sans-serif', padding: '11px 18px' }}>
          {site.navCta}
        </a>
      </header>

      <section className={s.heroCentered}>
        <div className={s.monoAcc} style={{ letterSpacing: '.24em', marginBottom: 24 }}>{hero.eyebrow}</div>
        <h1 className={s.h1}>
          {hero.titleLead}
          <br />
          <span className={s.accent}>{hero.titleAccent}</span>
        </h1>
        <p className={s.lede}>{hero.lede}</p>
      </section>

      <section className={s.splitCols}>
        {columns.map((c) => {
          const dark = c.key === 'builds';
          return (
            <div className={dark ? s.colDark : s.colLight} key={c.key}>
              <div className={s.colHead}>
                <span className={s.colName}>{c.name}</span>
                <span className={s.colTag} style={dark ? { color: 'var(--accHi)' } : undefined}>{c.tagline}</span>
              </div>
              <p className={s.colNote}>{c.body}</p>
              <div className={`${s.frame} ${s.h280}`} style={{ marginTop: 26 }}>
                <Image src={c.photo.src} alt={c.photo.alt} fill sizes="50vw" className={s.cover} style={{ objectPosition: c.photo.pos ?? '50% 50%' }} />
              </div>
              <div style={{ marginTop: 26 }}>
                {c.prices.map((p) => (
                  <div className={s.priceRow} key={p.label}>
                    <span>{p.label}</span>
                    <span className={s.priceVal}>{p.value}</span>
                  </div>
                ))}
              </div>
              <a
                href={c.href}
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
        <span className={s.seamText}>{seamLineInline}</span>
        <a href={site.navCtaHref} className={`${s.btn} ${s.btnSm}`} style={{ background: '#1a1714', color: '#f2eee8' }}>
          {site.navCta} →
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
          {projectsSetA.map((p) => (
            <a href="/portfolio" className={s.tile} key={p.name}>
              <span className={`${s.frame} ${s.h250}`}>
                <Image src={p.src} alt={p.alt} fill sizes="33vw" className={s.cover} style={{ objectPosition: p.pos ?? '50% 50%' }} />
                <span className={s.tileBadge}>
                  <Image src={directions[p.dept ?? 'builds'].logo} alt={directions[p.dept ?? 'builds'].name} width={29} height={29} />
                </span>
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
            <p className={s.ctaMeta}>{site.address} · {site.email}</p>
          </div>
          <div className={s.btnRow}>
            <a href={site.phoneHref} className={`${s.btn} ${s.btnSm} ${s.outline}`} style={{ borderColor: 'rgba(242,238,232,.28)', color: '#f2eee8' }}>
              {site.phone}
            </a>
            <a href={site.navCtaHref} className={`${s.btn} ${s.btnSm}`} style={{ background: 'var(--accHi)', color: '#1a1714' }}>
              {site.navCta}
            </a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="2a" />
    </main>
  );
}
