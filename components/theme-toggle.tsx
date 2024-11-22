'use client';

import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (!isMounted) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          'fixed w-10 h-10 rounded-full animate-pulse',
          'right-4 bottom-4 md:right-6 md:bottom-6',
          'bg-muted'
        )}
      />
    );
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
      aria-pressed={currentTheme === 'dark'}
      className={cn(
        'fixed z-50 rounded-full shadow-md transition-all duration-200',
        'right-4 bottom-4 md:right-6 md:bottom-6',
        'hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2',
        'bg-background border-border'
      )}
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
      <IconSun
        className={cn(
          'h-[1.2rem] w-[1.2rem] transition-all duration-200',
          'rotate-0 scale-100 dark:-rotate-90 dark:scale-0'
        )}
        aria-hidden="true"
      />
      <IconMoon
        className={cn(
          'absolute h-[1.2rem] w-[1.2rem] transition-all duration-200',
          'rotate-90 scale-0 dark:rotate-0 dark:scale-100'
        )}
        aria-hidden="true"
      />
    </Button>
  );
}
