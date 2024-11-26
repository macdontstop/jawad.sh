'use client';

import { IconSettings } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSettingsStore } from '@/stores/settings-store';

export function SettingsButton() {
  const { openSettings } = useSettingsStore();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Open settings"
      className={cn(
        'fixed z-50 rounded-full shadow-md transition-all duration-200',
        'right-4 bottom-4 md:right-6 md:bottom-6',
        'hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2',
        'bg-background border-border'
      )}
      onClick={openSettings}
    >
      <IconSettings
        className={cn(
          'h-[1.2rem] w-[1.2rem]',
          'text-muted-foreground',
          'transition-all duration-200',
          'group-hover:text-foreground'
        )}
        aria-hidden="true"
      />
    </Button>
  );
}
