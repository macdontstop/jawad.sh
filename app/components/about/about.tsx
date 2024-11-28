import { Socials } from '@/app/components/about/socials';

export function About() {
  return (
    <section role="region" aria-label="About section" className="mt-12 space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <div className="space-y-4 text-base text-muted-foreground">
            <p className="leading-relaxed">
              I&apos;m a frontend engineer dedicated to building accessible, performant, and maintainable web
              applications.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring photography, collecting vinyl records, or
              binge-watching my favorite shows.
            </p>
          </div>
        </div>

        <div className="not-prose">
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default About;
