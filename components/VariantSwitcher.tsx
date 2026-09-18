import Link from 'next/link';

const variants = [
  { id: '3a', href: '/hero-a' },
  { id: '3b', href: '/hero-b' },
  { id: '3c', href: '/hero-c' },
];

/** Review aid only — remove before production. */
export default function VariantSwitcher({ active }: { active: '3a' | '3b' | '3c' }) {
  return (
    <div className="switcher">
      {variants.map((v) => (
        <Link key={v.id} href={v.href} data-active={v.id === active}>
          {v.id}
        </Link>
      ))}
      <Link href="/">усі</Link>
    </div>
  );
}
