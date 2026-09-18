import Link from 'next/link';

const items = [
  { id: '1a', href: '/full/v1a' },
  { id: '1b', href: '/full/v1b' },
  { id: '1c', href: '/full/v1c' },
  { id: '2a', href: '/full/v2a' },
  { id: '2b', href: '/full/v2b' },
  { id: '2c', href: '/full/v2c' },
];

/** Review aid only — remove before production. */
export default function FullVariantSwitcher({ active }: { active: string }) {
  return (
    <div className="switcher">
      {items.map((v) => (
        <Link key={v.id} href={v.href} data-active={v.id === active}>
          {v.id}
        </Link>
      ))}
      <Link href="/">усі</Link>
    </div>
  );
}
