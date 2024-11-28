import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IconCalendar, IconArrowUpRight, IconClock } from '@tabler/icons-react';
import { getBlogPosts } from '@/lib/blog';

export async function Posts() {
  const posts = await getBlogPosts();

  return (
    <section
      role="region"
      aria-label="Blog posts section"
      className={cn('prose prose-zinc dark:prose-invert', 'max-w-none space-y-6 mt-12')}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Writing</h2>
        <Link
          href="/blog"
          className={cn(
            'group',
            'inline-flex items-center gap-1',
            'text-sm text-muted-foreground',
            'transition-colors duration-200',
            'hover:text-foreground'
          )}
        >
          View all
          <IconArrowUpRight
            className={cn(
              'size-4',
              'transition-transform duration-200',
              'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            )}
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={cn(
              // base styles
              'group relative bg-card',
              'flex flex-col gap-3',
              'p-4 rounded-xl',
              'border border-border/40',
              // hover effects
              'transition-all duration-300',
              'hover:border-border/80',
              'hover:shadow-lg hover:shadow-foreground/5',
              'hover:bg-gradient-to-br hover:from-background hover:to-muted/50',
              // focus styles
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-ring focus-visible:ring-offset-2'
            )}
          >
            <div className="flex items-center gap-4">
              <time
                dateTime={post.frontmatter.date}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <IconCalendar className="size-4" aria-hidden="true" />
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <IconClock className="size-4" aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-base font-medium tracking-tight group-hover:text-foreground">
                {post.frontmatter.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.frontmatter.description}</p>
            </div>

            <div
              className={cn(
                'flex items-center gap-1',
                'text-sm font-medium',
                'text-muted-foreground',
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

export default Posts;
