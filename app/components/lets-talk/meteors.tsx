import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MeteorsProps {
  number?: number;
  isHovered?: boolean;
}

export function Meteors({ number = 20, isHovered = false }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.random() * 100 - 50 + '%',
      left: Math.random() * 100 + '%',
      animationDelay: Math.random() * 1.5 + 's',
      animationDuration: Math.random() * 3 + 4 + 's',
      '--meteor-color': `${Math.floor(Math.random() * 360)}deg`,
      '--meteor-size': `${Math.random() * 1 + 1}px`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            'pointer-events-none absolute',
            'rotate-[215deg] animate-meteor',
            'rounded-[9999px]',
            'before:absolute before:inset-0',
            'before:animate-pulse before:animate-duration-[3s]',
            'before:rounded-full',
            'after:absolute after:top-1/2 after:left-0',
            'after:h-[1px] after:w-[100px]',
            'after:-translate-y-1/2 after:-z-10',
            'transition-all duration-700',
            isHovered
              ? [
                  'bg-[hsl(var(--meteor-color)_50%_50%/0.6)]',
                  'before:bg-[hsl(var(--meteor-color)_50%_50%/0.6)]',
                  'after:bg-gradient-to-r after:from-[hsl(var(--meteor-color)_50%_50%/0.6)] after:to-transparent',
                  'shadow-[0_0_30px_3px_hsl(var(--meteor-color)_50%_50%/0.6)]',
                ]
              : [
                  'bg-foreground/30',
                  'before:bg-foreground/30',
                  'after:bg-gradient-to-r after:from-foreground/30 after:to-transparent',
                  'shadow-[0_0_20px_2px_rgba(255,255,255,0.2)]',
                ]
          )}
          style={{
            ...style,
            width: 'var(--meteor-size)',
            height: 'var(--meteor-size)',
          }}
        />
      ))}
    </>
  );
}

export default Meteors;
