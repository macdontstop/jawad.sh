import { Socials } from './socials';

export function About() {
  return (
    <section
      role="region"
      aria-label="About section"
      className="prose prose-zinc dark:prose-invert max-w-none space-y-8 mt-12"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="leading-relaxed">
          I&apos;m a frontend engineer dedicated to building accessible, performant, and maintainable web applications.
        </p>
      </div>

      <div className="not-prose">
        <Socials />
      </div>
    </section>
  );
}
