import { cn } from '@/lib/utils';
import type { TechItem } from '@/constants/tech';
import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';

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
        'group relative bg-card',
        'flex items-center gap-4',
        'p-4 rounded-xl',
        'border border-border/40',
        // hover effects
        'transition-all duration-300',
        'hover:border-border/80',
        'hover:shadow-lg hover:shadow-foreground/5',
        'hover:bg-gradient-to-br hover:from-background hover:to-muted/50',
        // focus styles
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
        style={{ color: tech.iconColor, fill: tech.fillColor }}
      />

      <div className="flex items-center justify-between flex-1 min-w-0">
        <div className="flex flex-col">
          <h3 className="text-sm font-medium leading-none">{tech.name}</h3>
          <p className="text-sm text-muted-foreground mt-1.5">{tech.description}</p>
        </div>

        <IconArrowUpRight
          className={cn(
            'size-4 shrink-0 ml-4',
            'text-muted-foreground',
            'transition-all duration-300',
            'opacity-0 -translate-x-2',
            'group-hover:opacity-100 group-hover:translate-x-0',
            'group-hover:translate-y-0'
          )}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

export default TechStackItem;
