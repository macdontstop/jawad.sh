import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  isOpen: boolean;
  enableAnimations: boolean;
}

interface SettingsActions {
  openSettings: () => void;
  closeSettings: () => void;
  setEnableAnimations: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState & SettingsActions>()(
  persist(
    (set) => ({
      isOpen: false,
      enableAnimations: true,

      openSettings: () => set({ isOpen: true }),
      closeSettings: () => set({ isOpen: false }),
      setEnableAnimations: (value) => set({ enableAnimations: value }),
    }),
    {
      name: 'settings-storage',
    }
  )
);
