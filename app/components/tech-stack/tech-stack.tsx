import { TECH_STACK } from '@/constants';
import { TechStackItem } from '@/app/components/tech-stack/tech-item';
import { cn } from '@/lib/utils';

export function TechStack() {
  return (
    <section
      role="region"
      aria-label="Technology stack"
      className={cn('prose prose-zinc dark:prose-invert', 'max-w-none space-y-6 mt-12')}
    >
      <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TECH_STACK.map((tech) => (
          <TechStackItem key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
}

export default TechStack;
