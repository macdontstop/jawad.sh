import { cn } from '@/lib/utils';
import { ProjectCard } from './project-card';
import { getGitHubProjects } from '@/app/lib/github';

export async function Projects() {
  const projects = await getGitHubProjects();

  return (
    <section
      role="region"
      aria-label="Side projects section"
      className={cn('prose prose-zinc dark:prose-invert', 'max-w-none space-y-6 mt-12')}
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Side Projects</h2>
        <p className="text-sm text-muted-foreground">Open source projects I&apos;ve been working on recently</p>
      </div>

      <div className="grid grid-cols-1 gap-px rounded-xl overflow-hidden border bg-border">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
