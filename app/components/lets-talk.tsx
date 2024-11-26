'use client';

import Link from 'next/link';
import { IconMail } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

export function LetsTalk() {
  return (
    <section aria-label="Contact section" role="region" className="w-full mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Want to work together?</h2>
          <p className="text-muted-foreground text-sm max-w-md">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          <Link
            href="mailto:him@jawad.sh"
            className={cn(
              // Base layout
              'group relative isolate',
              'inline-flex items-center gap-3',
              'px-6 py-3.5',
              // Glassmorphism effect
              'rounded-2xl',
              'bg-gradient-to-br from-background/10 to-background/30',
              'backdrop-blur-md',
              'border border-white/10',
              // Shadow and depth
              'shadow-[0_0_1px_1px_rgba(0,0,0,0.05)]',
              'dark:shadow-[0_0_1px_1px_rgba(255,255,255,0.05)]',
              // Interactive states
              'hover:border-accent/20',
              'hover:bg-gradient-to-br hover:from-background/20 hover:to-background/40',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-ring focus-visible:ring-offset-2',
              // Glow effect on hover
              'before:absolute before:inset-0',
              'before:-z-10 before:rounded-2xl',
              'before:transition-all before:duration-500',
              'hover:before:bg-gradient-to-r hover:before:from-primary/10 hover:before:via-accent/10 hover:before:to-primary/10',
              'hover:before:blur-xl',
              // Disabled state
              'disabled:opacity-50 disabled:pointer-events-none'
            )}
            aria-label="Send me an email"
            rel="noopener noreferrer"
          >
            <IconMail
              className={cn(
                'size-4',
                'text-muted-foreground',
                'transition-all duration-300',
                'group-hover:text-foreground group-hover:scale-110'
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                'text-sm font-medium',
                'text-muted-foreground',
                'transition-colors duration-300',
                'group-hover:text-foreground'
              )}
            >
              Let&apos;s Talk
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
