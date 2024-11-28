import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="relative">
      <nav aria-label="Back to home navigation">
        <Link
          href="/"
          className={cn(
            'group absolute left-4 sm:left-8 top-4',
            'inline-flex items-center gap-2',
            'text-sm text-muted-foreground',
            'transition-colors duration-200',
            'hover:text-foreground'
          )}
          aria-label="Return to home page"
        >
          <IconArrowLeft
            className={cn('size-4', 'transition-transform duration-200', 'group-hover:-translate-x-0.5')}
            role="presentation"
            aria-hidden="true"
          />
          <span aria-hidden="true">Back home</span>
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
}
