import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { miningInsights } from "../data/content";

const MiningSection = () => (
  <section id="mining" className="bg-stp-light">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Indigenous Mining"
        title="Learning from the past for our future"
        description="Our project celebrates Indigenous Australian custodianship, connecting geology, culture, and future-facing STEM."
      />
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {miningInsights.map((insight) => (
          <Link
            key={insight.id}
            to={`/indigenous-mining/${insight.id}`}
            data-reveal
            className="group block rounded-3xl border border-stp-primary/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg"
          >
            <h3 className="font-display text-2xl font-semibold text-stp-dark group-hover:text-stp-primary transition-colors">
              {insight.heading}
            </h3>
            <p className="mt-4 text-base text-stone-700">{insight.body}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-stp-primary">
              Learn more
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-stp-accent/50 bg-white/85 p-8 shadow-lg" data-reveal>
        <p className="text-sm uppercase tracking-[0.3em] text-stp-accent-dark">Mackay Mining Museum</p>
        <p className="mt-4 text-base text-stp-dark">
          Explore our interactive digital museum showcasing the rich mining heritage of the Mackay region and
          Indigenous Australian mining traditions.
        </p>
        <div className="mt-6">
          <a
            href="https://stpatricks-fll.my.canva.site/mackayminingmuseum"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-stp-primary px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-stp-accent focus:outline-none focus:ring-2 focus:ring-stp-primary/50"
          >
            Visit Museum
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MiningSection;
