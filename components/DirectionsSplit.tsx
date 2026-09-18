import Image from 'next/image';
import { directions } from '@/lib/content';

type Mode = 'prices' | 'photos';

export default function DirectionsSplit({ mode = 'prices' }: { mode?: Mode }) {
  return (
    <div className="directions">
      {(['architects', 'builds'] as const).map((key) => {
        const d = directions[key];
        const dark = key === 'builds';
        return (
          <div className={`direction direction--${dark ? 'dark' : 'light'}`} key={key}>
            <div className="direction__head">
              <span className="direction__name">{d.name}</span>
              <span className="direction__tag">{d.tagline}</span>
            </div>
            {mode === 'prices' ? (
              <>
                <p className="direction__body">{d.body}</p>
                <div className="priceList">
                  {d.prices.map((p) => (
                    <div className="priceRow" key={p.label}>
                      <span>{p.label}</span>
                      <span className="priceRow__value">{p.value}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="direction__photo">
                <Image
                  src={d.photo.src}
                  alt={d.photo.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: d.photo.pos ?? '50% 50%' }}
                />
              </div>
            )}
            <a href={d.href} className={`btn btn--sm direction__cta ${dark ? 'btn--sand' : 'btn--outlineSolid'}`}>
              {d.cta}
            </a>
          </div>
        );
      })}
    </div>
  );
}
