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
    </div>
  </section>
);

export default MiningSection;
