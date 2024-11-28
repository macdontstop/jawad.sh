'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconMail } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

interface MeteorsProps {
  number?: number;
  isHovered?: boolean;
}

function Meteors({ number = 20, isHovered = false }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.random() * 100 - 50 + '%',
      left: Math.random() * 100 + '%',
      animationDelay: Math.random() * 1.5 + 's',
      animationDuration: Math.random() * 3 + 4 + 's',
      '--meteor-color': `${Math.floor(Math.random() * 360)}deg`,
      '--meteor-size': `${Math.random() * 1 + 1}px`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            'pointer-events-none absolute',
            'rotate-[215deg] animate-meteor',
            'rounded-[9999px]',
            'before:absolute before:inset-0',
            'before:animate-pulse before:animate-duration-[3s]',
            'before:rounded-full',
            'after:absolute after:top-1/2 after:left-0',
            'after:h-[1px] after:w-[100px]',
            'after:-translate-y-1/2 after:-z-10',
            'transition-all duration-700',
            isHovered
              ? [
                  'bg-[hsl(var(--meteor-color)_50%_50%/0.6)]',
                  'before:bg-[hsl(var(--meteor-color)_50%_50%/0.6)]',
                  'after:bg-gradient-to-r after:from-[hsl(var(--meteor-color)_50%_50%/0.6)] after:to-transparent',
                  'shadow-[0_0_30px_3px_hsl(var(--meteor-color)_50%_50%/0.6)]',
                ]
              : [
                  'bg-foreground/30',
                  'before:bg-foreground/30',
                  'after:bg-gradient-to-r after:from-foreground/30 after:to-transparent',
                  'shadow-[0_0_20px_2px_rgba(255,255,255,0.2)]',
                ]
          )}
          style={{
            ...style,
            width: 'var(--meteor-size)',
            height: 'var(--meteor-size)',
          }}
        />
      ))}
    </>
  );
}

export function LetsTalk() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section aria-label="Contact section" role="region" className={cn('mt-12 w-full', 'relative')}>
      <div
        className={cn(
          // base layout
          'relative',
          'flex flex-col items-center',
          'p-8',
          'text-center',
          // visual style
          'rounded-xl',
          'bg-background/95',
          'border border-border/50',
          // backdrop effect
          'backdrop-blur-xl',
          // overflow control
          'isolate overflow-hidden'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 -z-10">
          <Meteors number={15} isHovered={isHovered} />
        </div>

        <div className="relative z-10 space-y-6 max-w-[85%]">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Let&apos;s work together</h2>
            <p className="text-sm text-muted-foreground">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link
              href={`mailto:${EMAIL}`}
              className={cn(
                // base layout
                'group',
                'inline-flex items-center gap-2',
                'px-5 py-2',
                // visual style
                'rounded-lg',
                'bg-primary/90 backdrop-blur-sm',
                'text-primary-foreground',
                'text-sm font-medium',
                // hover effects
                'transition-all duration-300',
                'hover:bg-primary',
                'hover:translate-y-[-1px]',
                'hover:shadow-lg hover:shadow-primary/10',
                // focus styles
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              <IconMail className="size-4" aria-hidden="true" />
              <span>Send me an email</span>
            </Link>

            <span
              className={cn(
                'text-xs font-mono',
                'text-muted-foreground',
                'select-all',
                'transition-colors duration-300',
                'hover:text-foreground'
              )}
            >
              {EMAIL}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
