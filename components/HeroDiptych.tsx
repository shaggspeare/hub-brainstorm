import Image from 'next/image';
import { diptych } from '@/lib/content';

function Half({ side }: { side: 'left' | 'right' }) {
  const d = diptych[side];
  const dark = side === 'right';
  // one h1 per page: the left half opens the statement, the right half continues it
  const Title = dark ? 'h2' : 'h1';
  return (
    <div className={`diptychHalf diptychHalf--${dark ? 'dark' : 'light'}`}>
      <Image
        src={d.photo.src}
        alt={d.photo.alt}
        fill
        priority
        sizes="(max-width: 900px) 100vw, 50vw"
        className={dark ? undefined : 'diptychHalf__img--light'}
        style={{ objectFit: 'cover', objectPosition: d.photo.pos ?? '50% 50%' }}
      />
      <div className="diptychHalf__scrim" />
      <div className="diptychHalf__text">
        <div className="mono diptychHalf__eyebrow">{d.eyebrow}</div>
        <Title className="diptychHalf__title">
          {d.title[0]}
          <br />
          {d.title[1]}
        </Title>
        <p className="diptychHalf__body">{d.body}</p>
      </div>
      <div className="diptychHalf__stamp">{d.stamp}</div>
    </div>
  );
}

export default function HeroDiptych() {
  return (
    <div className="diptych">
      <Half side="left" />
      <Half side="right" />
      <div className="diptych__seam" />
    </div>
  );
}
