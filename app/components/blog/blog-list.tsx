import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StaggerChildren, StaggerItem } from '@/components/ui/stagger-children';
import type { BlogPost } from '@/lib/blog';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <StaggerChildren>
      <div className="divide-y divide-border/40 group/list" role="list">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <section>
              <Link
                href={`/blog/${post.slug}`}
                className={cn(
                  'group flex items-center justify-between py-4',
                  'transition-opacity duration-300',
                  'group-hover/list:opacity-50',
                  'hover:!opacity-100'
                )}
                aria-label={`Read ${post.frontmatter.title} posted on ${new Date(
                  post.frontmatter.date
                ).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}`}
              >
                <h3
                  className={cn(
                    'text-base font-medium',
                    'text-foreground/80',
                    'group-hover:text-foreground',
                    'transition-colors duration-300'
                  )}
                >
                  {post.frontmatter.title}
                </h3>

                <div
                  className="flex items-center gap-4 text-xs text-muted-foreground shrink-0"
                  aria-label="Post metadata"
                >
                  <time dateTime={new Date(post.frontmatter.date).toISOString()} aria-label="Posted on">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </time>
                  <span className="text-muted-foreground/70" aria-label="Estimated reading time">
                    {post.readingTime}
                  </span>
                </div>
              </Link>
            </section>
          </StaggerItem>
        ))}
      </div>
    </StaggerChildren>
  );
}

export default BlogList;
