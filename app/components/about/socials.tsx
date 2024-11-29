import { SOCIALS } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Socials() {
  return (
    <nav aria-label="Social media links" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list">
        {SOCIALS.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              // base styles
              'group relative bg-card',
              'flex items-center gap-3',
              'p-4 rounded-xl',
              'border border-border/40',
              // hover effects
              'transition-colors duration-200',
              'hover:border-border',
              'hover:bg-muted/40',
              // focus styles
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-ring focus-visible:ring-offset-2'
            )}
            aria-label={`${social.name}: ${social.handle}`}
          >
            <social.icon
              className={cn(
                'size-5 shrink-0',
                'text-muted-foreground',
                'transition-colors duration-200',
                'group-hover:text-foreground'
              )}
              aria-hidden="true"
            />

            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium leading-none">{social.name}</span>
              <span className="text-sm text-muted-foreground mt-1.5 truncate">@{social.handle}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Socials;
