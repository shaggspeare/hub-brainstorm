import { socials } from '@/lib/content';

/* The live site puts these four as filled circles at the bottom-left of the hero
   and again as a list in the footer (HeroBanner.tsx / Footer.tsx). It draws them
   with remixicon glyphs; two-letter marks keep that without pulling an icon font
   in for four links. */
const mark: Record<string, string> = { tg: 'TG', fb: 'FB', ig: 'IG' };

export default function Socials({ className = '' }: { className?: string }) {
  return (
    <ul className={`socials ${className}`.trim()}>
      {socials.map((s) => (
        <li key={s.href}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
            {mark[s.icon]}
          </a>
        </li>
      ))}
    </ul>
  );
}
