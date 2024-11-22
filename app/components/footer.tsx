import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export function Footer({ className, ...props }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'w-full border-t',
        'mt-4 md:mt-6 lg:mt-8',
        'py-4 md:py-6 lg:py-8',
        'px-4 md:px-6 lg:px-8',
        'bg-background dark:bg-background/95',
        'prose prose-zinc dark:prose-invert',
        'max-w-none',
        className
      )}
      {...props}
    >
      <div className={cn('mx-auto w-full', 'max-w-7xl', 'flex flex-col items-center justify-center gap-2')}>
        <p
          className={cn('text-sm md:text-base', 'text-muted-foreground/80', 'text-center')}
          aria-label="Copyright information"
        >
          © {currentYear} Jawad Abdulrazzaq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
