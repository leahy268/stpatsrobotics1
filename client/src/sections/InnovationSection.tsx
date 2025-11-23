import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";
import { innovationProject } from "../data/content";

const InnovationSection = () => (
  <section id="innovation" className="bg-stp-cream">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Innovation Project"
        title={innovationProject.title}
        description={innovationProject.summary}
      />
      <div className="mt-12 grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="space-y-8" data-reveal>
          <ul className="space-y-6">
            {innovationProject.highlights.map((point) => (
              <li key={point} className="flex gap-4 text-stone-700">
                <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-stp-secondary" />
                <p>{point}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border border-stp-secondary/40 bg-white/80 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-stp-secondary">
              Project Callout
            </p>
            <p className="mt-4 text-base text-stp-dark">{innovationProject.callout}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="#mining">Explore Indigenous Mining</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Partner with Us
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="grid gap-6" data-reveal>
          {innovationProject.gallery.map((item, index) => (
            <div
              key={item.alt}
              className={`relative overflow-hidden rounded-3xl border border-stp-primary/10 shadow-lg ${
                index === 1 ? "translate-x-8" : ""
              } ${index === 2 ? "-translate-x-8" : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InnovationSection;
