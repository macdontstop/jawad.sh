'use client';

import { useLanyard } from 'use-lanyard';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { IconExternalLink, IconLoader2 } from '@tabler/icons-react';
import { Suspense, useState, useEffect, useRef } from 'react';

interface LyricLine {
  timeTag: string;
  words: string;
}

interface LyricsResponse {
  error: boolean;
  syncType: string;
  lines: LyricLine[];
}

interface LyricsPopoverProps {
  trackId: string;
  currentTime: number;
}

const DISCORD_ID = BigInt(process.env.NEXT_PUBLIC_DISCORD_ID!);
const SPOTIFY_BASE_URL = 'https://open.spotify.com/track';
const LYRICS_API_BASE = 'https://lyrics.jawad.sh';

const lyricsCache = new Map<string, LyricLine[]>();

function getCurrentLyric(lyrics: LyricLine[], currentTime: number) {
  const currentTimeMs = currentTime * 1000;
  let currentLine = lyrics[0];
  let currentIndex = 0;

  for (let i = 0; i < lyrics.length; i++) {
    const line = lyrics[i];
    const [min, sec] = line.timeTag.split(':');
    const timeMs = (parseInt(min) * 60 + parseFloat(sec)) * 1000;

    if (timeMs <= currentTimeMs) {
      currentLine = line;
      currentIndex = i;
    } else {
      break;
    }
  }

  return { currentLine, currentIndex };
}

function LyricsContent({ lyrics, currentTime }: { lyrics: LyricLine[]; currentTime: number }) {
  const { currentLine, currentIndex } = getCurrentLyric(lyrics, currentTime);
  const prevLine = lyrics[currentIndex - 1];
  const nextLines = lyrics.slice(currentIndex + 1, currentIndex + 2);

  return (
    <div className="h-full flex flex-col justify-center space-y-1">
      <div className="relative">
        {prevLine && (
          <div
            className={cn(
              'text-xs text-foreground/30 break-words text-center',
              'transition-all duration-500',
              'relative',
              'before:absolute before:inset-0',
              'before:bg-gradient-to-b before:from-background/80 before:to-transparent',
              'before:pointer-events-none'
            )}
          >
            {prevLine.words}
          </div>
        )}
        <div
          className={cn(
            'text-xs font-medium',
            'text-foreground break-words text-center',
            'transition-all duration-500',
            'relative z-10'
          )}
        >
          {currentLine.words}
        </div>
        {nextLines.map((line, i) => (
          <div
            key={i}
            className={cn(
              'text-xs text-foreground/30 break-words text-center',
              'transition-all duration-500',
              'relative',
              'before:absolute before:inset-0',
              'before:bg-gradient-to-t before:from-background/80 before:to-transparent',
              'before:pointer-events-none'
            )}
            style={{
              opacity: 0.7 - i * 0.4,
              transitionDelay: `${i * 50}ms`,
            }}
          >
            {line.words}
          </div>
        ))}
      </div>
    </div>
  );
}

function LyricsPopover({ trackId, currentTime }: LyricsPopoverProps) {
  const [lyrics, setLyrics] = useState<LyricLine[]>([]);
  const [loading, setLoading] = useState(!lyricsCache.has(trackId));
  const previousTrackId = useRef<string | null>(null);

  useEffect(() => {
    if (previousTrackId.current === trackId) return;
    previousTrackId.current = trackId;

    const fetchLyrics = async () => {
      if (lyricsCache.has(trackId)) {
        setLyrics(lyricsCache.get(trackId)!);
        return;
      }

      try {
        const response = await fetch(`${LYRICS_API_BASE}/?trackid=${trackId}&format=lrc`);
        const data: LyricsResponse = await response.json();
        if (!data.error) {
          lyricsCache.set(trackId, data.lines);
          setLyrics(data.lines);
        }
      } catch (error) {
        console.error('Failed to fetch lyrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, [trackId]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <IconLoader2 className="size-4 text-muted-foreground animate-spin" />
      </div>
    );
  }

  if (lyrics.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-xs text-muted-foreground">No lyrics available</div>
    );
  }

  return <LyricsContent lyrics={lyrics} currentTime={currentTime} />;
}

function NowPlayingContent() {
  const { data, error } = useLanyard(`${DISCORD_ID}`);
  const spotify = data?.spotify;
  const [showLyrics, setShowLyrics] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!spotify?.timestamps?.start || !spotify?.timestamps?.end) return;

    const updateProgress = () => {
      const now = Date.now();
      const start = Number(spotify.timestamps.start);
      const elapsed = now - start;
      setProgress(elapsed / 1000);
    };

    const interval = setInterval(updateProgress, 100);
    updateProgress();

    return () => clearInterval(interval);
  }, [spotify?.timestamps]);

  if (error || !spotify) return null;

  const trackUrl = `${SPOTIFY_BASE_URL}/${spotify.track_id}`;

  return (
    <div role="status" aria-label="Currently playing on Spotify" className="relative group">
      <Link
        href={trackUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Now playing: ${spotify.song} by ${spotify.artist}. Open in Spotify.`}
        className={cn(
          'inline-flex items-center gap-2',
          'rounded-full px-3 py-1.5',
          'bg-background/90 backdrop-blur-sm',
          'border border-border/50',
          'transition-all duration-200',
          'hover:bg-accent/40 hover:border-accent/50',
          'hover:shadow-sm hover:shadow-accent/5',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-ring focus-visible:ring-offset-2'
        )}
        onMouseEnter={() => setShowLyrics(true)}
        onMouseLeave={() => setShowLyrics(false)}
      >
        <div className="relative size-4 shrink-0 overflow-hidden rounded-full">
          <Image
            src={spotify.album_art_url || '/placeholder.svg?w=16&h=16'}
            alt="Album art"
            fill
            sizes="16px"
            className={cn('object-cover', 'motion-safe:animate-[spin_4s_linear_infinite]')}
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
      {showLyrics && spotify.track_id && (
        <div
          className={cn(
            'absolute left-[50%] top-full mt-2',
            'w-[240px] h-[88px]',
            '-translate-x-[50%]',
            'p-2 rounded-lg',
            'bg-background/90 backdrop-blur-md',
            'border border-border/50',
            'shadow-xl shadow-accent/5',
            'overflow-hidden',
            'transition-opacity duration-200'
          )}
        >
          <LyricsPopover trackId={spotify.track_id} currentTime={progress} />
        </div>
      )}
    </div>
  );
}

function NowPlayingSkeleton() {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2',
        'rounded-full px-3 py-1.5',
        'bg-background/90 backdrop-blur-sm',
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

export function NowPlaying() {
  return (
    <Suspense fallback={<NowPlayingSkeleton />}>
      <NowPlayingContent />
    </Suspense>
  );
}

export default NowPlaying;
