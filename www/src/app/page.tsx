import { ArieHero } from '@/components/arie.hero';
import { TrackArie } from '@/components/arie';
import { Metadata } from 'next';
import { AppWrapper } from '@/components/app.wrapper';
import { GlobalFooter } from '@/components/global.footer';
import { AriePosition } from '@/components/arie.position';

export const metadata: Metadata = {
  title: 'Arie.js',
  description:
    'A lightweight React library for presenting cursor movement and interaction.',
  openGraph: {
    title: 'Arei.js',
    description:
      'A lightweight React library for presenting cursor movement and interaction.',
    url: 'https://arie.chvndler.ch',
    siteName: 'Chandler Chappell',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Arie: Chandler Chappell',
    card: 'summary_large_image',
  },
  themeColor: '#000000',
};

export default function Home() {
  return (
    <AppWrapper>
      <ArieHero />
      <AriePosition />
      <GlobalFooter />
    </AppWrapper>
  );
}
