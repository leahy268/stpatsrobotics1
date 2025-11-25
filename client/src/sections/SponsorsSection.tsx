import SectionHeading from "../components/SectionHeading";
import { sponsors } from "../data/content";

const SponsorsSection = () => (
  <section id="sponsors" className="bg-stp-cream">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Sponsors"
        title="Partners who power our success"
        description="Local industry, education, and community leaders invest in St Patrick's One so we can prototype faster, travel further, and inspire more students to pursue STEM."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {sponsors.map((sponsor) => {
          const fallbackInitials = sponsor.name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join("");

          return (
            <article
              key={sponsor.name}
              data-reveal
              className="flex h-full flex-col gap-6 rounded-3xl border border-stp-primary/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo.src}
                    alt={sponsor.logo.alt}
                    className="h-16 w-16 rounded-2xl border border-stp-primary/20 object-contain p-2"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-stp-primary/20 bg-gradient-to-br from-stp-primary-light via-stp-secondary to-stp-primary text-lg font-semibold text-white">
                    {fallbackInitials}
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stp-primary/80">
                    {sponsor.tier}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-stp-dark">{sponsor.name}</h3>
                </div>
              </div>
              <p className="mt-auto text-sm text-stone-700">{sponsor.description}</p>
              {sponsor.website && (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-stp-primary transition hover:text-stp-accent"
                >
                  Visit website
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default SponsorsSection;
