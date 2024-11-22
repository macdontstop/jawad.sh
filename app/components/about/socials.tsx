import Link from 'next/link';
import { SOCIALS } from '@/constants';

export function Socials() {
  return (
    <div aria-label="Social media links" className="w-full">
      <ul className="flex flex-wrap gap-2" role="list" aria-label="Social media profiles">
        {SOCIALS.map((social) => (
          <li key={social.name} className="flex-1 min-w-[140px] border rounded-md hover:bg-accent/40 transition-colors">
            <Link
              href={social.url}
              target={social.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={social.ariaLabel}
              className="w-full p-3 flex items-center gap-3 group transition-all"
            >
              <div className="bg-muted rounded-md p-1.5">
                <social.icon className="size-5 flex-shrink-0" aria-hidden="true" />
              </div>
              <span className="flex-1 text-sm text-foreground">{social.handle}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
