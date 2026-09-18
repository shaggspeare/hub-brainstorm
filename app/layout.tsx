import type { Metadata } from 'next';
import { Manrope, Unbounded, Literata, IBM_Plex_Mono, Geologica } from 'next/font/google';
import './globals.css';

const body = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700', '800'], variable: '--font-body' });
/* The live site's only typeface (layout.tsx: Geologica, cyrillic + latin).
   1a is the variant that keeps the existing identity, so it swaps its body and
   display faces for this one; the other five keep their exploratory pairings. */
const site = Geologica({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'], variable: '--font-site' });
const display = Unbounded({ subsets: ['latin', 'cyrillic'], weight: ['400', '600', '800'], variable: '--font-display' });
const serif = Literata({ subsets: ['latin', 'cyrillic'], style: ['normal', 'italic'], weight: ['400', '500', '600'], variable: '--font-serif' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Hub Remontu — дизайн і ремонт однією командою',
  description:
    'Хтось малює красиво. Хтось будує надійно. Ми робимо обидва — і відповідаємо за стик.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uk"
      className={`${body.variable} ${site.variable} ${display.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
