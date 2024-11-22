import { Aref_Ruqaa } from 'next/font/google';

import { AvailabilityBadge } from '@/app/components/header/availability-badge';
import { NowPlaying } from '@/app/components/header/now-playing';
import { AvatarImage } from '@/app/components/header/profile-image';
import { cn } from '@/lib/utils';

const arefRuqaa = Aref_Ruqaa({
  subsets: ['arabic'],
  weight: ['400'],
  display: 'block',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-screen-xl mx-auto"
      aria-label="Site header with author information"
    >
      <figure className="shrink-0">
        <AvatarImage />
      </figure>

      <div className="flex flex-col gap-3 text-center sm:text-left">
        <section className="space-y-1">
          <h1
            className={cn(
              'scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight',
              'flex flex-wrap items-center justify-center sm:justify-start gap-2'
            )}
          >
            <span id="name-en" className="text-foreground">
              Jawad Abdulrazzaq
            </span>

            <span
              className={cn('text-muted-foreground/90', 'hidden sm:inline-block', arefRuqaa.className)}
              lang="ar"
              dir="rtl"
              aria-label="جواد عبدالرزاق (Jawad Abdulrazzaq in Arabic)"
              aria-describedby="name-en"
            >
              (جواد عبدالرزاق)
            </span>
          </h1>

          <p className="text-sm text-muted-foreground" aria-label="Professional role and location">
            Frontend Engineer based in Dallas, TX
          </p>
        </section>

        <div
          className={cn('flex items-center gap-3', 'flex-wrap sm:flex-nowrap', 'justify-center sm:justify-start')}
          aria-label="Current status and activity"
        >
          <AvailabilityBadge />
          <NowPlaying />
        </div>
      </div>
    </header>
  );
}
