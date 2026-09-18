import { marquee } from '@/lib/content';

/* TextSlide.tsx on the live site: a full-bleed scrolling band where every other
   phrase is outline instead of filled. Its own CSS translates the track -66.6%
   over a single copy of the list, so it visibly jumps on loop — two copies and
   -50% is the same amount of code and seamless. */
export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <span className="marquee__half" key={copy} aria-hidden={copy === 1}>
            {marquee.map((line, i) => (
              <span key={line} className={i % 2 ? 'stroke' : undefined}>
                {line}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
