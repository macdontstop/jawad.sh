import Image from 'next/image';

import { AVATAR } from '@/constants';

export function AvatarImage() {
  return (
    <div className="relative inline-block" role="img" aria-label="Memoji avatar">
      <Image
        src={AVATAR.SRC}
        alt={AVATAR.ALT}
        width={AVATAR.SIZE}
        height={AVATAR.SIZE}
        className="rounded-full bg-rose-300 p-1.5"
        priority
        fetchPriority="high"
        sizes={`${AVATAR.SIZE}px`}
        quality={90}
      />
    </div>
  );
}
