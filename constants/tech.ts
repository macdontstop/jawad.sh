import type { Icon } from '@tabler/icons-react';

import {
  IconBrandSupabase,
  IconBrandPrisma,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandStripe,
  IconBrandVercel,
  IconBrandTypescript,
  IconShieldLock,
} from '@tabler/icons-react';

export interface TechItem {
  name: string;
  icon: Icon;
  url: string;
  description: string;
  gradient: string;
  iconColor?: string;
  fillColor?: string;
}

export const TECH_STACK: TechItem[] = [
  {
    name: 'Next.js',
    icon: IconBrandNextjs,
    url: 'https://nextjs.org',
    description: 'React framework for production',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#FFFFFF',
    fillColor: '#000000',
  },
  {
    name: 'TypeScript',
    icon: IconBrandTypescript,
    url: 'https://typescriptlang.org',
    description: 'JavaScript with syntax for types',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#3178C6',
    fillColor: '',
  },
  {
    name: 'Tailwind CSS',
    icon: IconBrandTailwind,
    url: 'https://tailwindcss.com',
    description: 'Utility-first CSS framework',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#06B6D4',
    fillColor: '#06B6D4',
  },
  {
    name: 'Supabase',
    icon: IconBrandSupabase,
    url: 'https://supabase.com',
    description: 'Open source Firebase alternative',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#3FCF8E',
    fillColor: '#3FCF8E',
  },
  {
    name: 'Prisma',
    icon: IconBrandPrisma,
    url: 'https://prisma.io',
    description: 'Next-generation ORM for Node.js',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#157D70',
  },
  {
    name: 'NextAuth',
    icon: IconShieldLock,
    url: 'https://next-auth.js.org',
    description: 'Authentication for Next.js',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#861CC4',
    fillColor: '#861CC4',
  },
  {
    name: 'Stripe',
    icon: IconBrandStripe,
    url: 'https://stripe.com',
    description: 'Payment infrastructure',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#008CDD',
    fillColor: '#008CDD',
  },
  {
    name: 'Vercel',
    icon: IconBrandVercel,
    url: 'https://vercel.com',
    description: 'Deployment and hosting platform',
    gradient:
      'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50 dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50',
    iconColor: '#FFFFFF',
    fillColor: '#FFFFFF',
  },
];
