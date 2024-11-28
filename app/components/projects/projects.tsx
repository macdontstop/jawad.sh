import { cn } from '@/lib/utils';
import { ProjectCard } from '@/app/components/projects/project-card';
import { getGitHubProjects } from '@/lib/github';

export async function Projects() {
  const projects = await getGitHubProjects();

  return (
    <section
      role="region"
      aria-label="Side projects section"
      className={cn('prose prose-zinc dark:prose-invert', 'max-w-none space-y-6 mt-12')}
    >
      <h2 className="text-2xl font-semibold tracking-tight">Side Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
