'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useSettingsStore } from '@/stores/settings-store';

interface StaggerChildrenProps {
  children: React.ReactNode;
  delay?: number;
}

export function StaggerChildren({ children, delay = 0 }: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();
  const { enableAnimations } = useSettingsStore();

  const shouldAnimate = !prefersReducedMotion && enableAnimations;

  return (
    <motion.div
      initial={shouldAnimate ? 'hidden' : 'visible'}
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldAnimate ? 0.2 : 0,
            delayChildren: shouldAnimate ? delay : 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const { enableAnimations } = useSettingsStore();

  const shouldAnimate = !prefersReducedMotion && enableAnimations;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldAnimate ? 20 : 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldAnimate ? 0.4 : 0,
            ease: [0.25, 0.25, 0, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
