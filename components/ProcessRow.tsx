import { process, processHeadingParts } from '@/lib/content';

/* Process.tsx on the live site: four numbered steps on a #24231d band, joined by
   dashed connector rules. It draws those rules as PNG sprites (vector1/vector2);
   a dashed border does the same thing without the assets. */
export default function ProcessRow() {
  return (
    <section className="process">
      <h2 className="process__title">
        <span className="stroke">{processHeadingParts.stroke}</span>
        {processHeadingParts.tail}
      </h2>
      <div className="process__grid">
        {process.map((p) => (
          <div className="processCard" key={p.n}>
            <span className="processCard__num">{p.n}</span>
            <h3 className="processCard__name">{p.name}</h3>
            <p className="processCard__note">{p.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
