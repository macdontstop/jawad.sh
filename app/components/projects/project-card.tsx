import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IconBrandGithub, IconArrowUpRight } from '@tabler/icons-react';
import { getLanguageColor, GitHubRepo } from '@/lib/github';

interface ProjectCardProps {
  project: GitHubRepo;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name} project on GitHub`}
      className={cn(
        // base styles
        'group relative bg-card',
        'flex flex-col justify-between',
        'p-6 rounded-xl',
        'border border-border/40',
        // hover effects - simplified
        'transition-colors duration-200',
        'hover:border-border',
        'hover:bg-muted/40',
        // focus styles
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-ring focus-visible:ring-offset-2'
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconBrandGithub
              className={cn(
                'size-5 text-muted-foreground',
                'transition-colors duration-300',
                'group-hover:text-foreground'
              )}
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          </div>
          <span className={cn('font-mono text-sm text-muted-foreground')}>{String(index + 1).padStart(2, '0')}</span>
        </div>

        <p className={cn('text-base text-muted-foreground', 'line-clamp-2')}>
          {project.description || 'No description available'}
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 mt-4 border-t border-border/40">
        {project.language && (
          <span className={cn('inline-flex items-center gap-1.5', 'text-sm text-muted-foreground')}>
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: getLanguageColor(project.language) }}
              aria-hidden="true"
            />
            {project.language}
          </span>
        )}

        <div
          className={cn(
            'flex items-center gap-1',
            'text-sm font-medium',
            'text-muted-foreground',
            'transition-colors duration-300',
            'group-hover:text-primary'
          )}
        >
          <span>View project</span>
          <IconArrowUpRight
            className={cn(
              'size-4',
              'transition-transform duration-300',
              'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            )}
          />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
