import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { cache } from 'react';

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags?: string[];
  };
  readingTime: string;
}

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

export const getBlogPosts = cache(async () => {
  const files = fs.readdirSync(POSTS_PATH);

  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(source);

      return {
        slug: file.replace(/\.mdx?$/, ''),
        frontmatter: {
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          tags: frontmatter.tags || [],
        },
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return posts;
});

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(source);

    return {
      slug,
      frontmatter: {
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
      },
      readingTime: readingTime(content).text,
    };
  } catch {
    return null;
  }
}
