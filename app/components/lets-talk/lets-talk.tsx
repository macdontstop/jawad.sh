import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Meteors } from '@/app/components/lets-talk/meteors';

export function LetsTalk() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section aria-label="Contact section" role="region" className={cn('mt-12 w-full', 'relative')}>
      <div
        className={cn(
          // base layout
          'relative',
          'flex flex-col items-center',
          'p-8',
          'text-center',
          // visual style
          'rounded-xl',
          'bg-background/95',
          'border border-border/50',
          // backdrop effect
          'backdrop-blur-xl',
          // overflow control
          'isolate overflow-hidden'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 -z-10">
          <Meteors number={15} isHovered={isHovered} />
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
