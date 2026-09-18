import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/content';
import NavMenu from './NavMenu';

export default function SiteHeader({ overPhoto = false }: { overPhoto?: boolean }) {
  return (
    <header className={`header${overPhoto ? ' header--overPhoto' : ''}`}>
      <Link href="/" className="logo" aria-label="Hub Remontu">
        {/* the site's own mark — white fill, so it only sits on dark headers */}
        <Image src={site.logo} alt="Hub Remontu" width={80} height={50} priority />
      </Link>
      <NavMenu items={site.navShort} navClassName="nav" />
      <div className="header__actions">
        <a href={site.phoneHref} className="header__phone">
          {site.phone}
        </a>
        <a href={site.navCtaHref} className="btn btn--xs btn--sand header__cta">
          {site.navCta}
        </a>
      </div>
    </header>
  );
}
