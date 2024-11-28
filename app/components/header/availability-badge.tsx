import { cn } from '@/lib/utils';

const IS_AVAILABLE_FOR_WORK = process.env.NEXT_PUBLIC_IS_AVAILABLE_FOR_WORK === 'true';

export function AvailabilityBadge() {
  if (!IS_AVAILABLE_FOR_WORK) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        // base layout
        'inline-flex items-center gap-2',
        // visual styles
        'bg-card/50 backdrop-blur-sm',
        'rounded-full px-3 py-1.5',
        'border border-emerald-200/20 dark:border-emerald-800/20',
        'min-w-fit whitespace-nowrap',
        // hover effects
        'transition-all duration-300',
        'hover:bg-emerald-50/50 dark:hover:bg-emerald-950/50',
        'hover:border-emerald-200/50 dark:hover:border-emerald-800/30',
        'hover:shadow-sm hover:shadow-emerald-100/5 dark:hover:shadow-emerald-900/5',
        // focus states
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2'
      )}
    >
      <span
        className={cn(
          // base styles
          'relative flex-shrink-0',
          'size-2 rounded-full',
          // gradient background
          'bg-gradient-to-r from-emerald-500 to-emerald-400',
          'dark:from-emerald-400 dark:to-emerald-500',
          // pulse animation
          'before:absolute before:inset-0',
          'before:rounded-full before:animate-ping',
          'before:bg-emerald-500/40 dark:before:bg-emerald-400/40'
        )}
        aria-hidden="true"
      />

      <span
        className={cn(
          'text-xs font-medium',
          'text-emerald-700 dark:text-emerald-300',
          'transition-colors duration-300'
        )}
      >
        Available for work
      </span>
    </div>
  );
}

export default AvailabilityBadge;
