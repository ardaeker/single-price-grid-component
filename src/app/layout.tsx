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
  title: 'Frontend Mentor - Single price grid component',
  description:
    'This website is a solution for the Single price grid component challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.',
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
    title: 'Frontend Mentor - Single price grid component',
    description:
      'This website is a solution to the Single price grid component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - Single price grid component',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://single-price-grid-component-inky-sigma.vercel.app',
  },
  icons: {
    icon: '/favicon.png',
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
