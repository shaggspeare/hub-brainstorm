import Link from 'next/link';
import { site } from '@/lib/content';

export default function SiteHeader({ overPhoto = false }: { overPhoto?: boolean }) {
  return (
    <header className={`header${overPhoto ? ' header--overPhoto' : ''}`}>
      <Link href="/" className="logo">
        <span className="logo__mark">{site.brand.mark}</span>
        <span className="logo__sub">{site.brand.sub}</span>
      </Link>
      <nav className="nav">
        {site.nav.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </nav>
      <a href="#" className="btn btn--xs btn--sand">
        {site.navCta}
      </a>
    </header>
  );
}
