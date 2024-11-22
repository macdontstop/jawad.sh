import { Metadata } from 'next';

import { About } from '@/app/components/about/about';
import { Header } from '@/app/components/header/header';
import { Projects } from '@/app/components/projects/projects';
import Posts from '@/app/components/posts/posts';
import { LetsTalk } from '@/app/components/lets-talk';

export const metadata: Metadata = {
  title: 'Jawad Abdulrazzaq',
  description: 'Personal website and portfolio showcasing my work and experience',
  openGraph: {
    title: 'Jawad Abdulrazzaq',
    description: 'Personal website and portfolio showcasing my work and experience',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main role="main" aria-label="Home page content" className="py-16 px-4 sm:px-6 mx-auto max-w-xl">
      <Header />
      <About />
      <Projects />
      <Posts />
      <LetsTalk />
    </main>
  );
}
