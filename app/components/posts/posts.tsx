import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Post {
  date: string;
  title: string;
  description: string;
  href: string;
}

// TODO: replace with mdx
const posts: Post[] = [
  {
    date: '2024-11-22',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/blog/lorem-ipsum-dolor-sit-amet',
  },
  {
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
      role="contentinfo"
      aria-label="Blog posts section"
      className={cn('prose prose-zinc dark:prose-invert', 'max-w-none space-y-6', 'mt-12')}
    >
      <h2 className={cn('scroll-m-20', 'text-2xl font-semibold tracking-tight', 'text-foreground')}>Posts</h2>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className={cn('group rounded-lg border', 'bg-card p-4', 'transition-colors', 'hover:bg-accent/40')}
          >
            <time dateTime={post.date} className={cn('text-sm', 'text-muted-foreground')}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>

            <Link href={post.href}>
              <h3
                className={cn('font-semibold tracking-tight', 'mt-2 mb-2', 'text-card-foreground', 'hover:underline')}
              >
                {post.title}
              </h3>

              <p className={cn('text-muted-foreground', 'line-clamp-2')}>{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
