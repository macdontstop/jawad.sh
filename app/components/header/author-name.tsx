import { Aref_Ruqaa } from 'next/font/google';
import { cn } from '@/lib/utils';

const arefRuqaa = Aref_Ruqaa({
  subsets: ['arabic'],
  weight: ['400'],
  display: 'block',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export function AuthorName() {
  return (
    <h1
      className={cn(
        // layout
        'flex flex-wrap items-center',
        'justify-center sm:justify-start',
        'gap-2',
        // typography
        'text-xl sm:text-2xl',
        'font-semibold tracking-tight'
      )}
    >
      <span id="name-en" className="text-foreground">
        Jawad Abdulrazzaq
      </span>

      <span
        className={cn('text-muted-foreground/80', 'hidden sm:inline-block', arefRuqaa.className)}
        lang="ar"
        dir="rtl"
        aria-label="جواد عبدالرزاق (Jawad Abdulrazzaq in Arabic)"
        aria-describedby="name-en"
      >
        (جواد عبدالرزاق)
      </span>
    </h1>
  );
}

export default AuthorName;
