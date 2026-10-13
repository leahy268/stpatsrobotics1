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

      <div className="mt-12 overflow-hidden rounded-3xl border border-stp-primary/10 bg-black shadow-lg" data-reveal>
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={innovationProject.video.embedUrl}
            title={innovationProject.video.heading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="space-y-10" data-reveal>
          {innovationProject.story.map((block) => (
            <div key={block.heading}>
              <h3 className="font-display text-xl font-semibold text-stp-dark">{block.heading}</h3>
              <div className="mt-3 space-y-3">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-stone-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8" data-reveal>
          <div className="rounded-3xl border border-stp-accent/50 bg-white/85 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-stp-accent-dark">{innovationProject.awareness.heading}</p>
            <ul className="mt-4 space-y-4">
              {innovationProject.awareness.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-stp-dark">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-stp-accent" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-stp-dark/60">Source: {innovationProject.awareness.source}</p>
          </div>

          <div className="rounded-3xl border border-stp-accent/50 bg-white/85 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-stp-accent-dark">Keep exploring</p>
            <p className="mt-4 text-base text-stp-dark">{innovationProject.callout}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/past-seasons">Past Seasons</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                Partner with Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InnovationSection;
