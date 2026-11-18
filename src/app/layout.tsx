import React from 'react';
import type { Metadata } from 'next';
import Providers from './providers';

// Style imports
import 'bootstrap/scss/bootstrap.scss';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/scss/modal-video.scss';
import '../index.scss';

export const metadata: Metadata = {
  title: 'Betwin Games - Play Aviator & Casino Games Online Namibia',
  description: 'Experience Aviator crash game, online slots, Lucky 6, and sports betting with Betwin in Namibia. Fast cash-outs, rising multipliers, and 24/7 support.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
