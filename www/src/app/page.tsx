import { ArieHero } from '../components/arie.hero';
import { Metadata } from 'next';

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
    <main className='antialiased'>
      <ArieHero />
    </main>
  );
}
