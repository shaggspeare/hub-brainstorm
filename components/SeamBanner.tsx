import { seamLine, seamLineInline, hero } from '@/lib/content';

export default function SeamBanner({ variant = 'full' }: { variant?: 'full' | 'inline' }) {
  if (variant === 'inline') {
    return (
      <div className="seam seam--inline">
        <h2 className="seam__title">{seamLineInline}</h2>
        <a href="#" className="btn btn--xs btn--deep">
          {hero.primaryCta} →
        </a>
      </div>
    );
  }
  return (
    <div className="seam">
      <h2 className="seam__title">{seamLine}</h2>
      <div className="btnRow">
        <a href="#" className="btn btn--sm btn--onBronze">
          {hero.secondaryCta}
        </a>
        <a href="#" className="btn btn--sm btn--deep">
          {hero.primaryCta}
        </a>
      </div>
    </div>
  );
}
