import Image from 'next/image';
import SiteHeader from './SiteHeader';
import { directions, hero } from '@/lib/content';

export default function HeroOverlay() {
  return (
    <div className="heroOverlay">
      <Image
        src={hero.photo.src}
        alt={hero.photo.alt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: hero.photo.pos ?? '50% 50%' }}
      />
      <div className="heroOverlay__scrim" />
      <SiteHeader overPhoto />
      <div className="heroOverlay__text">
        <div className="mono heroOverlay__eyebrow">{hero.eyebrow}</div>
        <h1 className="heroOverlay__title">
          {hero.titleLead}
          <br />
          <em>{hero.titleAccent}</em>
        </h1>
        <p className="heroOverlay__lede">{hero.lede}</p>
      </div>
      <div className="heroOverlay__cards">
        <a href="#" className="floatCard floatCard--light">
          <span className="floatCard__head">
            <span className="floatCard__name">{directions.architects.name}</span>
            <span className="floatCard__tag">{directions.architects.tag} →</span>
          </span>
          <span className="floatCard__body">{directions.architects.shortBody}</span>
        </a>
        <a href="#" className="floatCard floatCard--dark">
          <span className="floatCard__head">
            <span className="floatCard__name">{directions.builds.name}</span>
            <span className="floatCard__tag">{directions.builds.tag} →</span>
          </span>
          <span className="floatCard__body">{directions.builds.shortBody}</span>
        </a>
      </div>
    </div>
  );
}
