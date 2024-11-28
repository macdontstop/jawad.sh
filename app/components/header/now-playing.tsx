'use client';

import { useLanyard } from 'use-lanyard';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';
import { Suspense } from 'react';

const DISCORD_ID = BigInt(process.env.NEXT_PUBLIC_DISCORD_ID!);
const SPOTIFY_BASE_URL = 'https://open.spotify.com/track';

function NowPlayingSkeleton() {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2',
        'rounded-full px-3 py-1.5',
        'bg-card/50 backdrop-blur-sm',
        'border border-border/50',
        'animate-pulse'
      )}
      aria-hidden="true"
    >
      <div className="relative size-4 shrink-0 rounded-full bg-muted" />
      <div className="h-3.5 w-24 sm:w-32 bg-muted rounded-full" />
    </div>
  );
}

function NowPlayingContent() {
  const { data, error } = useLanyard(`${DISCORD_ID}`);
  const spotify = data?.spotify;

  if (error || !spotify) return null;

  const trackUrl = `${SPOTIFY_BASE_URL}/${spotify.track_id}`;

  return (
    <div role="status" aria-label="Currently playing on Spotify">
      <Link
        href={trackUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Now playing: ${spotify.song} by ${spotify.artist}. Open in Spotify.`}
        className={cn(
          // base layout
          'group inline-flex items-center gap-2',
          'rounded-full px-3 py-1.5',
          // visual style
          'bg-card/50 backdrop-blur-sm',
          'border border-border/50',
          // interactive states
          'transition-all duration-200',
          'hover:bg-accent/40 hover:border-accent/50',
          'hover:shadow-sm hover:shadow-accent/5',
          // accessibility
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-ring focus-visible:ring-offset-2',
          // animation
          'animate-in fade-in-0 slide-in-from-bottom-3'
        )}
      >
        <div className="relative size-4 shrink-0 overflow-hidden rounded-full" aria-hidden="true">
          <Image
            src={spotify.album_art_url || '/placeholder.svg?w=16&h=16'}
            alt=""
            fill
            sizes="16px"
            className={cn('object-cover', 'motion-safe:animate-[spin_8s_linear_infinite]')}
            loading="lazy"
          />
        </div>

        <div className="flex items-center gap-1.5 min-w-0">
          <span className={cn('text-xs font-medium', 'truncate max-w-[80px] sm:max-w-[100px]')}>{spotify.song}</span>
          <span
            className={cn('text-xs text-muted-foreground', 'truncate max-w-[60px] sm:max-w-[80px]')}
            aria-label={`by ${spotify.artist}`}
          >
            by {spotify.artist}
          </span>
        </div>

        <IconExternalLink
          className={cn(
            'size-3',
            'text-muted-foreground',
            'transition-all duration-200',
            'opacity-0 -translate-y-0.5',
            'group-hover:opacity-100 group-hover:translate-y-0'
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

export default NowPlaying;
