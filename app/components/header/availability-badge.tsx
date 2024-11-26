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
        'bg-gradient-to-r from-emerald-50/90 to-emerald-100/90 dark:from-emerald-950/20 dark:to-emerald-900/20',
        'rounded-full px-3 py-1.5',
        'min-w-fit whitespace-nowrap',
        'transition-all duration-300',
        // hover effects
        'hover:shadow-[0_0_0_1px] hover:shadow-emerald-200/50',
        'dark:hover:shadow-emerald-800/30',
        // focus states
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2'
      )}
    >
      <span
        className={cn(
          // base styles
          'relative flex-shrink-0',
          'size-2.5 rounded-full',
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
          'text-emerald-800 dark:text-emerald-300',
          'transition-colors duration-300'
        )}
        aria-label="Currently available for work"
      >
        Available for work
      </span>
    </div>
  );
}
