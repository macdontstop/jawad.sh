import { Metadata } from 'next';
import { StaggerChildren, StaggerItem } from '@/components/ui/stagger-children';
import { About } from '@/app/components/about/about';
import { Header } from '@/app/components/header/header';
import { Projects } from '@/app/components/projects/projects';
import { TechStack } from '@/app/components/tech-stack/tech-stack';
// import Posts from '@/app/components/posts/posts';
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
    <main role="main" aria-labelledby="main-heading" className="py-16 px-4 sm:px-6 mx-auto max-w-2xl">
      <h1 id="main-heading" className="sr-only">
        Jawad Abdulrazzaq - Personal Website and Portfolio
      </h1>

      <StaggerChildren>
        <StaggerItem>
          <Header />
        </StaggerItem>

        <StaggerItem>
          <About />
        </StaggerItem>

        <StaggerItem>
          <TechStack />
        </StaggerItem>

        <StaggerItem>
          <Projects />
        </StaggerItem>

        {/* <StaggerItem>
          <Posts />
        </StaggerItem> */}

        <StaggerItem>
          <LetsTalk />
        </StaggerItem>
      </StaggerChildren>
    </main>
  );
}
