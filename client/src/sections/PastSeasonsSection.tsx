import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";
import { pastSeasons } from "../data/content";

const PastSeasonsSection = () => (
  <section id="past-seasons" className="bg-stp-cream">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Team History"
        title="Past Seasons"
        description="A recap of the FIRST LEGO League seasons St Patrick's One has competed in, and the projects that came out of each one."
      />
      <div className="mt-16 space-y-10">
        {pastSeasons.map((season) => (
          <article
            key={season.year}
            data-reveal
            className="overflow-hidden rounded-3xl border border-stp-primary/10 bg-white shadow-sm"
          >
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stp-secondary">{season.year}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-stp-dark">{season.title}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-stp-primary/80">{season.theme}</p>
                <p className="mt-4 text-stone-700">{season.summary}</p>
                {season.link && (
                  <div className="mt-6">
                    <ButtonLink to={season.link.to}>{season.link.label}</ButtonLink>
                  </div>
                )}
              </div>
              {season.gallery && (
                <div className="grid grid-cols-2 gap-4">
                  {season.gallery.map((item) => (
                    <div key={item.src} className="overflow-hidden rounded-2xl border border-stp-primary/10">
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PastSeasonsSection;
