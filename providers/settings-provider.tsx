'use client';

import { useEffect } from 'react';
import { useSettingsStore } from '@/stores/settings-store';

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const { prefetchPages } = useSettingsStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const nextData = document.getElementById('__NEXT_DATA__');
      if (nextData) {
        nextData.dataset.prefetch = prefetchPages ? 'true' : 'false';
      }
    }
  }, [prefetchPages]);

  return <>{children}</>;
}
