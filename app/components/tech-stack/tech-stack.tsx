import { TECH_STACK } from '@/constants';
import { TechStackItem } from './tech-item';

export function TechStack() {
  return (
    <section
      role="region"
      aria-label="Technology stack"
      className="prose prose-zinc dark:prose-invert max-w-none space-y-6 mt-12"
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
        <p className="text-sm text-muted-foreground">
          Currently working with these technologies, always open to learning more
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TECH_STACK.map((tech) => (
          <TechStackItem key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
}
