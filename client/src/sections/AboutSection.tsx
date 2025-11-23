import SectionHeading from "../components/SectionHeading";
import { aboutSection } from "../data/content";

const AboutSection = () => (
  <section id="about" className="bg-white">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title={aboutSection.title}
        description={aboutSection.paragraphs[0]}
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6 text-base text-stone-700" data-reveal>
          {aboutSection.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {aboutSection.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-stp-primary/10 bg-stp-light p-6 text-center shadow-sm">
                <dt className="text-sm font-medium uppercase tracking-wide text-stp-primary/80">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-stp-dark">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-stp-primary/10 shadow-xl" data-reveal>
          <img
            src={aboutSection.image.src}
            alt={aboutSection.image.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-stp-primary/10" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
