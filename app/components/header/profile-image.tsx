import Image from 'next/image';
import { cn } from '@/lib/utils';

import { AVATAR } from '@/constants';

interface AvatarImageProps {
  className?: string;
}

export function AvatarImage({ className }: AvatarImageProps) {
  return (
    <div className={cn('relative inline-block', className)} role="img" aria-label={AVATAR.ALT}>
      <Image
        src={AVATAR.SRC}
        alt={AVATAR.ALT}
        width={AVATAR.SIZE}
        height={AVATAR.SIZE}
        className="rounded-full bg-rose-300/90 p-1.5 transition-colors hover:bg-rose-300"
        priority
        fetchPriority="high"
        sizes={`(max-width: 768px) ${AVATAR.SIZE}px, ${AVATAR.SIZE}px`}
        quality={90}
      />
    </div>
  );
}
