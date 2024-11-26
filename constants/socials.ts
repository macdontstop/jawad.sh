import { IconBrandGithub, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';
import type { Icon } from '@tabler/icons-react';

interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: Icon;
  ariaLabel: string;
}

export const SOCIALS: SocialLink[] = [
  {
    name: 'X',
    url: 'https://x.com/macdontstop',
    handle: 'macdontstop',
    icon: IconBrandX,
    ariaLabel: 'Follow me on X (formerly Twitter)',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/macdontstop',
    handle: 'macdontstop',
    icon: IconBrandGithub,
    ariaLabel: 'View my projects on GitHub',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chaptrhouse',
    handle: 'chaptrhouse',
    icon: IconBrandInstagram,
    ariaLabel: 'Follow me on Instagram',
  },
];
