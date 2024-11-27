import Link from 'next/link';
import { SOCIALS } from '@/constants';
import { cn } from '@/lib/utils';

export function Socials() {
  return (
    <nav aria-label="Social media links" className="w-full">
      <ul className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3', 'gap-3', 'w-full')} role="list">
        {SOCIALS.map((social) => (
          <li key={social.name} className="group">
            <Link
              href={social.url}
              target={social.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={`${social.name}: ${social.handle}`}
              className={cn(
                'flex items-center gap-3 p-3',
                'w-full h-full',
                'rounded-lg border bg-card/50',
                'backdrop-blur-sm',
                'transition-all duration-300',
                'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50',
                'dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
                'hover:border-accent/50',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              <social.icon
                className={cn(
                  'size-5 shrink-0',
                  'text-muted-foreground',
                  'transition-all duration-300',
                  'group-hover:scale-110 group-hover:text-foreground'
                )}
                aria-hidden="true"
              />
              <div className="flex flex-col min-w-0">
                <span
                  className={cn('text-sm font-medium', 'transition-colors duration-200', 'group-hover:text-foreground')}
                >
                  {social.name}
                </span>
                <span
                  className={cn(
                    'text-xs text-muted-foreground',
                    'truncate',
                    'transition-colors duration-200',
                    'group-hover:text-foreground/80'
                  )}
                >
                  {social.handle}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
