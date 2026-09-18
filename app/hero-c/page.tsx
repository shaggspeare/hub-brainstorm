import SiteHeader from '@/components/SiteHeader';
import HeroDiptych from '@/components/HeroDiptych';
import SeamBanner from '@/components/SeamBanner';
import StatsRow from '@/components/StatsRow';
import ProjectGrid from '@/components/ProjectGrid';
import Marquee from '@/components/Marquee';
import ProcessRow from '@/components/ProcessRow';
import ContactCta from '@/components/ContactCta';
import VariantSwitcher from '@/components/VariantSwitcher';
import { projectsSetB, statsMarket } from '@/lib/content';

export const metadata = { title: '3c · Диптих — Hub Remontu' };

export default function HeroCPage() {
  return (
    <main>
      <SiteHeader />
      <HeroDiptych />
      <SeamBanner />
      <StatsRow stats={statsMarket} />
      <ProjectGrid projects={projectsSetB} />
      <Marquee />
      <ProcessRow />
      <ContactCta />
      <VariantSwitcher active="3c" />
    </main>
  );
}
