import Image from 'next/image';
import s from '../full.module.css';
import NavMenu from '@/components/NavMenu';
import { photos } from '@/lib/photos';
import FullVariantSwitcher from '@/components/FullVariantSwitcher';

export const metadata = { title: '2b · Тепла глина — Hub Remontu' };

const services = [
  { name: 'Дизайн-проєкт', note: 'Планування, візуалізації, креслення, специфікації.' },
  { name: 'Ремонт під ключ', note: 'Власні майстри, фіксована ціна, щотижневий звіт.' },
  { name: 'Меблювання', note: 'Замовляємо, приймаємо, збираємо — під ваш проєкт.' },
  { name: 'Комерція', note: 'Офіси, ресторани, клініки — з документацією.' },
];

const projects = [
  { name: 'Родинна квартира, ЖК Great', meta: '78 м² · дизайн + ремонт · 5 місяців', ...photos.livingPendants },
  { name: 'Затишок на Русанівській Гавані', meta: '64 м² · ремонт під ключ · 4 місяці', ...photos.livingTv },
  { name: 'Компактний преміум White Lines', meta: '50 м² · дизайн-проєкт · 3 місяці', ...photos.kitchenBar },
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
          items={['Проєкти', 'Послуги', 'Команда', 'Ціни', 'Контакти']}
          navClassName={s.nav}
          navStyle={{ gap: 26 }}
          toggleClassName={s.navToggle}
          wrapClassName={s.navWrap}
        />
        <a href="#" className={`${s.btn} ${s.btnSm} ${s.fill}`} style={{ color: '#fff', padding: '12px 20px' }}>
          Обговорити ремонт
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
            Ми — київська студія з 12-річною історією. Проєктуємо, ремонтуємо й вмебльовуємо так, щоб ви жили в
            результаті десятиліттями, а не переробляли через рік.
          </p>
          <div className={s.btnRow} style={{ marginTop: 30 }}>
            <a href="#" className={`${s.btn} ${s.fill}`} style={{ color: '#fff' }}>Безкоштовний виїзд і замір</a>
            <a href="#" className={`${s.btn} ${s.outline}`}>Наші роботи</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 30 }}>
            <span className={s.avatars}>
              {['#e5d6c6', '#d3bda6', '#c2a487'].map((bg) => (
                <span className={s.avatar} key={bg} style={{ background: bg }} />
              ))}
            </span>
            <span style={{ font: '400 12.5px/1.5 var(--font-body), sans-serif', color: 'var(--faint)' }}>
              <strong style={{ fontWeight: 700, color: 'var(--fg)' }}>180 родин</strong> уже живуть у наших інтер’єрах
            </span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className={s.arch}>
            <Image src={photos.kitchenIsland.src} alt={photos.kitchenIsland.alt} fill priority sizes="50vw" className={s.cover} style={{ objectPosition: '50% 50%' }} />
          </div>
          <div className={s.floatStat}>
            <div className={s.floatStatVal}>3 роки</div>
            <div className={s.floatStatLbl}>гарантії на всі роботи</div>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.grid4}>
          {services.map((sv) => (
            <div className={s.softCard} key={sv.name}>
              <div className={s.softCardName}>{sv.name}</div>
              <p className={s.softCardNote}>{sv.note}</p>
            </div>
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
            <a href="#" className={s.tile} key={p.name}>
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
            <p>
              «Приємно, коли на дзвінок відповідає та сама людина, що приїздила на замір. За чотири місяці — жодного
              сюрпризу в рахунку.»
            </p>
            <div className={s.person}>
              <span className={s.personAvatar} />
              <span>
                <span className={s.personName}>Ольга Данилець</span>
                <span className={s.personRole}>ЖК Причал 8 · 87 м²</span>
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
            <h2>Приїдемо, поміряємо, порахуємо — безкоштовно</h2>
            <p>м. Київ, ЖК Great, Дніпровська набережна 15Ж, оф. 5 · hubremontu@gmail.com</p>
          </div>
          <div className={s.btnRow}>
            <a href="tel:+380683833888" className={`${s.btn} ${s.btnOnAcc}`}>+38 068 383 38 88</a>
            <a href="#" className={`${s.btn} ${s.btnWhite}`}>Записатись на замір</a>
          </div>
        </div>
      </section>

      <FullVariantSwitcher active="2b" />
    </main>
  );
}
