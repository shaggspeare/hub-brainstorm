import type { Stat } from '@/lib/content';

export default function StatsRow({ stats, variant = 'bordered' }: { stats: Stat[]; variant?: 'bordered' | 'inline' }) {
  return (
    <div className={`stats stats--${variant}`}>
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat__value">{s.value}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
