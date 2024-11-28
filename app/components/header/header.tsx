import { cn } from '@/lib/utils';
import { AvailabilityBadge } from '@/app/components/header/availability-badge';
import { NowPlaying } from '@/app/components/header/now-playing';
import { AvatarImage } from '@/app/components/header/profile-image';
import { AuthorName } from '@/app/components/header/author-name';

export function Header() {
  return (
    <header className="flex flex-col gap-8">
      <div className={cn('flex flex-col sm:flex-row items-center', 'gap-4 w-full', 'text-center sm:text-left')}>
        <figure className="shrink-0">
          <AvatarImage />
        </figure>

        <div className="space-y-3">
          <AuthorName />

          <p className="text-sm text-muted-foreground">Frontend Engineer based in Dallas, TX</p>

          <div className={cn('flex items-center gap-3', 'flex-wrap sm:flex-nowrap', 'justify-center sm:justify-start')}>
            <AvailabilityBadge />
            <NowPlaying />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
