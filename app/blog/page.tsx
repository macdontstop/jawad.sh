import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/blog';
import { BlogList } from '@/app/components/blog/blog-list';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on frontend development, user experience, and web technologies.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="py-24 px-4 sm:px-6 mx-auto max-w-2xl">
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="mb-12">
          <h1 className="text-xl font-medium text-foreground/90">Writing</h1>
        </div>

        <BlogList posts={posts} />
      </section>
    </main>
  );
}
