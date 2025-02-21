import './globals.css';

import { Karla } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

const karla = Karla({
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e6eff5',
};

export const metadata: Metadata = {
  title: 'Arda Eker - Single price grid component',
  description:
    'A clean, mobile-first pricing grid with semantic HTML and SEO-friendly structure.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'Single price grid component',
    'Single price grid component solution',
    'Single price grid component challenge',
    'Single price grid component challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL(
    'https://single-price-grid-component-inky-sigma.vercel.app/',
  ),
  openGraph: {
    title: 'Arda Eker - Single price grid component',
    description:
      'A clean, mobile-first pricing grid with semantic HTML and SEO-friendly structure.',
    siteName: 'Single price grid component',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://single-price-grid-component-inky-sigma.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={karla.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
