import HeroOverlay from '@/components/HeroOverlay';
import StatsRow from '@/components/StatsRow';
import ProjectGrid from '@/components/ProjectGrid';
import ContactCta from '@/components/ContactCta';
import VariantSwitcher from '@/components/VariantSwitcher';
import { projectsSetA, statsWide } from '@/lib/content';

export const metadata = { title: '3b · Фото на весь екран — Hub Remontu' };

export default function HeroBPage() {
  return (
    <main>
      <HeroOverlay />
      <StatsRow stats={statsWide} />
      <ProjectGrid projects={projectsSetA} showNote />
      <ContactCta />
      <VariantSwitcher active="3b" />
    </main>
  );
}
