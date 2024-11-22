'use client';

import Link from 'next/link';
import { IconMail } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

export function LetsTalk() {
  return (
    <section aria-label="Contact section" role="region" className="w-full mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Link
            href="mailto:him@jawad.sh"
            className={cn(
              'group inline-flex items-center gap-3',
              'px-6 py-4 md:py-3',
              'rounded-full bg-foreground text-background',
              'shadow-sm hover:shadow-md',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-foreground focus-visible:ring-offset-2',
              'disabled:opacity-50 disabled:pointer-events-none',
              'relative overflow-hidden',
              'after:absolute after:content-[""]',
              'after:top-0 after:-left-full after:w-full after:h-full',
              'after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent',
              'after:transform after:-skew-x-12',
              'hover:after:animate-shine'
            )}
            aria-label="Send me an email"
            rel="noopener noreferrer"
          >
            <span className="relative transition-transform duration-200 group-hover:-translate-x-1 group-focus:-translate-x-1">
              Let&apos;s Talk
            </span>
            <IconMail
              className={cn(
                'size-4 transition-transform duration-200',
                'group-hover:translate-x-1 group-focus:translate-x-1'
              )}
              aria-hidden="true"
              role="img"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
