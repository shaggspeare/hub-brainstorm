import Image from 'next/image';
import { hero, site, statsCore } from '@/lib/content';
import StatsRow from './StatsRow';
import Socials from './Socials';

export default function HeroSplit() {
  return (
    <div className="heroSplit">
      <div className="heroSplit__text">
        <div className="mono heroSplit__eyebrow">{hero.eyebrow}</div>
        <h1 className="heroSplit__title">
          {hero.titleLead}
          <br />
          <em>{hero.titleAccent}</em>
        </h1>
        <p className="heroSplit__lede">{hero.lede}</p>
        <div className="btnRow heroSplit__actions">
          <a href={site.navCtaHref} className="btn btn--ink">
            {hero.primaryCta}
          </a>
          <a href="/portfolio" className="btn btn--outlineInk">
            {hero.secondaryCta}
          </a>
        </div>
        <StatsRow stats={statsCore} variant="inline" />
        <Socials className="socials--onPaper heroSplit__socials" />
      </div>
      <div className="heroSplit__photo">
        <Image
          src={hero.photo.src}
          alt={hero.photo.alt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
          style={{ objectFit: 'cover', objectPosition: hero.photo.pos ?? '50% 50%' }}
        />
        <div className="photoCaption">
          {hero.caption.title}
          <br />
          <span>{hero.caption.note}</span>
        </div>
      </div>
    </div>
  );
}
