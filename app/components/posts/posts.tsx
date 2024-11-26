import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IconCalendar, IconArrowUpRight } from '@tabler/icons-react';

interface Post {
  id: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

// TODO: replace with mdx
const posts: Post[] = [
  {
    id: '1',
    date: '2024-11-22',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/blog/lorem-ipsum-dolor-sit-amet',
  },
  {
    id: '2',
    date: '2024-11-20',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/blog/lorem-ipsum-dolor-sit-amet',
  },
];

export default function Posts() {
  return (
    <section
      role="region"
      aria-label="Blog posts section"
      className={cn('prose prose-zinc dark:prose-invert', 'max-w-none space-y-6', 'mt-12')}
    >
      <div className="flex items-center justify-between">
        <h2 className={cn('scroll-m-20', 'text-2xl font-semibold tracking-tight', 'text-foreground')}>Posts</h2>
        <Link
          href="/blog"
          className={cn('text-sm text-muted-foreground', 'transition-colors duration-200', 'hover:text-foreground')}
        >
          View all posts
        </Link>
      </div>

      <div className="grid gap-px rounded-xl overflow-hidden border bg-border">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className={cn(
              // base styles
              'group relative bg-card',
              'flex flex-col gap-2',
              'p-4',
              // hover effects
              'transition-all duration-300',
              'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50',
              'dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50'
            )}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <IconCalendar className="size-4" aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <div className="space-y-1.5">
              <h3 className={cn('font-semibold tracking-tight', 'text-card-foreground', 'group-hover:text-foreground')}>
                {post.title}
              </h3>
              <p className={cn('text-sm text-muted-foreground', 'line-clamp-2')}>{post.description}</p>
            </div>

            <div
              className={cn(
                'flex items-center gap-1',
                'text-sm text-muted-foreground',
                'transition-colors duration-300',
                'group-hover:text-primary mt-auto'
              )}
            >
              <span>Read post</span>
              <IconArrowUpRight
                className={cn(
                  'size-4',
                  'transition-transform duration-300',
                  'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                )}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
