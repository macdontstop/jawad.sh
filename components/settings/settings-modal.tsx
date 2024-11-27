'use client';

import { useTheme } from 'next-themes';
import { IconMoon, IconSun, IconDeviceDesktop, IconLanguage } from '@tabler/icons-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useSettingsStore } from '@/stores/settings-store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function SettingsModal() {
  const { isOpen, closeSettings } = useSettingsStore();
  const { setTheme, theme } = useTheme();

  const themes = [
    { value: 'light', label: 'Light', icon: IconSun },
    { value: 'dark', label: 'Dark', icon: IconMoon },
    { value: 'system', label: 'System', icon: IconDeviceDesktop },
  ] as const;

  return (
    <Dialog open={isOpen} onOpenChange={closeSettings}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Customize your experience on the website.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Appearance</h3>
              <IconSun className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((item) => {
                const Icon = item.icon;
                const isActive = theme === item.value;

                return (
                  <Button
                    key={item.value}
                    variant="outline"
                    size="sm"
                    className={cn(
                      'flex items-center gap-2',
                      'justify-start px-3 py-6',
                      'hover:bg-accent hover:text-accent-foreground',
                      isActive && 'border-primary'
                    )}
                    onClick={() => setTheme(item.value)}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Language</h3>
              <IconLanguage className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <Select disabled defaultValue="en">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
