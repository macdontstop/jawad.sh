import type { Metadata, Viewport } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import { Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { SettingsButton } from '@/components/settings/settings-button';
import { SettingsModal } from '@/components/settings/settings-modal';
import { SettingsProvider } from '@/providers/settings-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jawad.sh'),
  title: {
    template: '%s | Jawad Abdulrazzaq',
    default: 'Jawad Abdulrazzaq',
  },
  description: 'Personal website and portfolio showcasing my work and experience',
  keywords: ['jawad', 'abdulrazzaq', 'software', 'engineer', 'developer', 'portfolio'],
  authors: [{ name: 'Jawad Abdulrazzaq' }],
  openGraph: {
    type: 'website',
    title: 'Jawad Abdulrazzaq',
    description: 'Personal website and portfolio showcasing my work and experience',
    siteName: 'Jawad Abdulrazzaq',
    locale: 'en_US',
    url: 'https://jawad.sh',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Jawad Abdulrazzaq - Frontend Engineer',
        type: 'image/png',
        secureUrl: 'https://jawad.sh/opengraph-image.png',
      },
    ],
    determiner: 'auto',
    countryName: 'US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jawad Abdulrazzaq',
    description: 'Personal website and portfolio showcasing my work and experience',
    creator: '@macdontstop',
    images: ['/opengraph-image.png'],
    site: '@macdontstop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn('scroll-smooth', 'motion-safe:scroll-smooth')}>
      <body
        className={cn(
          'antialiased',
          'min-h-screen',
          'flex flex-col',
          'bg-background',
          'text-foreground',
          'transition-colors duration-300',
          'selection:bg-primary selection:text-primary-foreground',
          inter.className
        )}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:p-4">
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <SettingsProvider>
            <main id="main-content" className="flex-grow">
              <Suspense fallback={<div className="min-h-screen animate-pulse" />}>{children}</Suspense>
              <SettingsButton />
              <SettingsModal />
            </main>
          </SettingsProvider>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
