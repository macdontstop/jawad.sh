import { cn } from '@/lib/utils';
import type { TechItem } from '@/constants/tech';
import Link from 'next/link';

interface TechItemProps {
  tech: TechItem;
}

export function TechStackItem({ tech }: TechItemProps) {
  return (
    <Link
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        // base styles
        'group flex items-center gap-3 p-3',
        'rounded-lg border bg-card/50',
        // interactive states
        'transition-all duration-300',
        'transition-colors',
        '',
        tech.gradient,
        'hover:border-accent/50',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-ring focus-visible:ring-offset-2'
      )}
    >
      <tech.icon
        className={cn(
          'size-5 shrink-0',
          'text-muted-foreground',
          'transition-all duration-300',
          'group-hover:scale-110 group-hover:text-foreground'
        )}
        aria-hidden="true"
      />

      <div className="min-w-0">
        <h3 className="text-sm font-medium leading-none">{tech.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{tech.description}</p>
      </div>
    </Link>
  );
}
