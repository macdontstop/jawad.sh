import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IconBrandGithub, IconArrowUpRight, IconStar } from '@tabler/icons-react';
import { GitHubRepo } from '@/app/lib/github';

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
        'min-h-[180px] p-6',
        // hover effects
        'transition-all duration-300',
        'hover:bg-gradient-to-br hover:from-neutral-100/50 hover:to-neutral-200/50',
        'dark:hover:from-neutral-900/50 dark:hover:to-neutral-800/50'
      )}
    >
      <ProjectNumber index={index} />
      <ProjectContent project={project} />
      <ProjectFooter project={project} />
    </Link>
  );
}

function ProjectNumber({ index }: { index: number }) {
  return (
    <div className="absolute right-6 top-6">
      <span className={cn('font-mono text-sm text-muted-foreground')}>{String(index + 1).padStart(2, '0')}</span>
    </div>
  );
}

function ProjectContent({ project }: { project: GitHubRepo }) {
  return (
    <div className="space-y-3 max-w-[85%]">
      <div className="flex items-center gap-2">
        <IconBrandGithub
          className={cn(
            'size-5 text-muted-foreground',
            'transition-colors duration-300',
            'group-hover:text-foreground'
          )}
          aria-hidden="true"
        />
        <h3 className="font-semibold tracking-tight">{project.name}</h3>
      </div>
      {project.description && (
        <p className={cn('text-sm text-muted-foreground', 'line-clamp-2')}>{project.description}</p>
      )}
    </div>
  );
}

function ProjectFooter({ project }: { project: GitHubRepo }) {
  return (
    <div className="flex items-center justify-between pt-6">
      <ProjectMetadata project={project} />
      <ViewProjectLink />
    </div>
  );
}

function ProjectMetadata({ project }: { project: GitHubRepo }) {
  return (
    <div className="flex items-center gap-4">
      {project.language && (
        <span className={cn('inline-flex items-center gap-1.5', 'text-xs text-muted-foreground')}>
          <span className="size-2 rounded-full bg-primary/80" />
          {project.language}
        </span>
      )}
      {project.stargazers_count > 0 && (
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <IconStar className="size-3.5" aria-hidden="true" />
          {project.stargazers_count}
        </span>
      )}
    </div>
  );
}

function ViewProjectLink() {
  return (
    <div
      className={cn(
        'flex items-center gap-1',
        'text-sm text-muted-foreground',
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
  );
}
