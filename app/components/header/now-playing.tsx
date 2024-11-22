'use client';

import { useLanyard } from 'use-lanyard';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';
import { Suspense } from 'react';

const DISCORD_ID = '1029852592475472043';

function NowPlayingSkeleton() {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full',
        'bg-background/50 backdrop-blur-sm',
        'border border-border/50',
        'px-3 py-1.5',
        'text-xs',
        'animate-pulse'
      )}
      aria-hidden="true"
    >
      <div className="relative size-5 shrink-0 rounded-full bg-muted" />
      <div className="w-[200px] h-4 bg-muted rounded" />
    </div>
  );
}

function NowPlayingContent() {
  const { data, error } = useLanyard(DISCORD_ID);
  const spotify = data?.spotify;

  if (error || !spotify) {
    return null;
  }

  const trackUrl = `https://open.spotify.com/track/${spotify.track_id}`;

  return (
    <div role="status" aria-label="Currently playing on Spotify">
      <Link
        href={trackUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Now playing: ${spotify.song} by ${spotify.artist}. Open in Spotify.`}
        className={cn(
          'inline-flex items-center gap-2 rounded-full',
          'bg-background/50 backdrop-blur-sm',
          'border border-border/50',
          'px-3 py-1.5',
          'text-xs',
          'animate-in fade-in-0 slide-in-from-bottom-3',
          'transition-all duration-300 ease-in-out hover:pr-4',
          'group',
          'hover:bg-accent/40',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        )}
      >
        <div className="relative size-5 shrink-0 overflow-hidden rounded-full" aria-hidden="true">
          <Image
            src={spotify.album_art_url || ''}
            alt=""
            fill
            className={cn('object-cover', 'motion-safe:animate-[spin_5s_linear_infinite]')}
            sizes="20px"
            priority={false}
            loading="lazy"
          />
        </div>
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="font-medium truncate max-w-[100px] sm:max-w-[150px]">{spotify.song}</span>
          <span
            className="text-muted-foreground truncate max-w-[100px] sm:max-w-[150px]"
            aria-label={`by ${spotify.artist}`}
          >
            by {spotify.artist}
          </span>
        </div>
        <IconExternalLink
          className={cn(
            'w-3 h-3 sm:w-4 sm:h-4',
            'opacity-0 transition-opacity duration-200',
            'group-hover:opacity-100 group-focus-visible:opacity-100',
            'ml-0.5 text-muted-foreground'
          )}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

export function NowPlaying() {
  return (
    <Suspense fallback={<NowPlayingSkeleton />}>
      <NowPlayingContent />
    </Suspense>
  );
}
