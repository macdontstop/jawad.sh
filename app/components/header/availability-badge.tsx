import { cn } from '@/lib/utils';

const isAvailable = true;

export function AvailabilityBadge() {
  if (!isAvailable) return null;

  return (
    <article
      className={cn(
        'inline-flex items-center gap-2 rounded-full',
        'bg-emerald-100 px-3 py-1.5',
        'whitespace-nowrap',
        'min-w-fit'
      )}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true" />
      <span className="text-xs font-medium text-emerald-800" aria-label="Currently available for work opportunities">
        Available for work
      </span>
    </article>
  );
}
