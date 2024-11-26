import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  isOpen: boolean;
  reduceMotion: boolean;
  prefetchPages: boolean;
}

interface SettingsActions {
  openSettings: () => void;
  closeSettings: () => void;
  toggleReduceMotion: () => void;
  togglePrefetchPages: () => void;
}

export const useSettingsStore = create<SettingsState & SettingsActions>()(
  persist(
    (set) => ({
      // Initial state
      isOpen: false,
      reduceMotion: false,
      prefetchPages: true,

      // Actions
      openSettings: () => set({ isOpen: true }),
      closeSettings: () => set({ isOpen: false }),
      toggleReduceMotion: () => set((state) => ({ reduceMotion: !state.reduceMotion })),
      togglePrefetchPages: () => set((state) => ({ prefetchPages: !state.prefetchPages })),
    }),
    {
      name: 'settings-storage',
    }
  )
);
