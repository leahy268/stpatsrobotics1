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
          <article
            key={insight.heading}
            data-reveal
            className="rounded-3xl border border-stp-primary/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="font-display text-2xl font-semibold text-stp-dark">{insight.heading}</h3>
            <p className="mt-4 text-base text-stone-700">{insight.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default MiningSection;
