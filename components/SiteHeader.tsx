import Link from 'next/link';
import { site } from '@/lib/content';
import NavMenu from './NavMenu';

export default function SiteHeader({ overPhoto = false }: { overPhoto?: boolean }) {
  return (
    <header className={`header${overPhoto ? ' header--overPhoto' : ''}`}>
      <Link href="/" className="logo">
        <span className="logo__mark">{site.brand.mark}</span>
        <span className="logo__sub">{site.brand.sub}</span>
      </Link>
      <NavMenu items={site.nav} navClassName="nav" />
      <a href="#" className="btn btn--xs btn--sand header__cta">
        {site.navCta}
      </a>
    </header>
  );
}
