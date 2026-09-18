import SiteHeader from '@/components/SiteHeader';
import HeroSplit from '@/components/HeroSplit';
import DirectionsSplit from '@/components/DirectionsSplit';
import SeamBanner from '@/components/SeamBanner';
import VariantSwitcher from '@/components/VariantSwitcher';

export const metadata = { title: '3a · Спліт — Hub Remontu' };

export default function HeroAPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSplit />
      <DirectionsSplit mode="prices" />
      <SeamBanner variant="inline" />
      <VariantSwitcher active="3a" />
    </main>
  );
}
