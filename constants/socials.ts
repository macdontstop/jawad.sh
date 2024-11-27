import { IconBrandGithub, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';
import type { Icon } from '@tabler/icons-react';

interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: Icon;
}

export const SOCIALS: SocialLink[] = [
  {
    name: 'X',
    url: 'https://x.com/macdontstop',
    handle: 'macdontstop',
    icon: IconBrandX,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/macdontstop',
    handle: 'macdontstop',
    icon: IconBrandGithub,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chaptrhouse',
    handle: 'chaptrhouse',
    icon: IconBrandInstagram,
  },
];
