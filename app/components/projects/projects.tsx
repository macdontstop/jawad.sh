import Link from 'next/link';
import { cn } from '@/lib/utils';

import { getGitHubProjects } from '@/app/lib/github';

export async function Projects() {
  const projects = await getGitHubProjects();

  return (
    <section
      role="region"
      aria-label="Side projects section"
      className="prose prose-zinc dark:prose-invert max-w-none space-y-6 mt-12"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Side Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0, 4).map((project) => (
          <Link
            key={project.id}
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} project on GitHub`}
            className={cn(
              'block p-6 bg-card border rounded-lg',
              'hover:bg-accent/40 transition-all duration-300',
              'hover:-translate-y-0.5',
              'group'
            )}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                {project.language && (
                  <span
                    role="status"
                    aria-label={`Project language: ${project.language}`}
                    className={cn(
                      'text-xs font-medium',
                      'px-2.5 py-0.5 rounded-full',
                      'bg-muted/30 border border-border/50',
                      'text-foreground/90'
                    )}
                  >
                    {project.language}
                  </span>
                )}
              </div>
              {project.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
