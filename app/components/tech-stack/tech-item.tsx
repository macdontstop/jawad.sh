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
        // hover effects - simplified
        'transition-colors duration-200',
        'hover:border-border',
        'hover:bg-muted/40',
        // focus styles
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-ring focus-visible:ring-offset-2'
      )}
    >
      <tech.icon
        className={cn(
          'size-5 shrink-0',
          'text-muted-foreground',
          'transition-colors duration-200',
          'group-hover:text-foreground'
        )}
        aria-hidden="true"
        style={{ color: tech.iconColor, fill: tech.fillColor }}
      />

      <div className="flex flex-col">
        <h3 className="text-sm font-medium leading-none">{tech.name}</h3>
        <p className="text-sm text-muted-foreground mt-1.5">{tech.description}</p>
      </div>
    </Link>
  );
}

export default TechStackItem;
