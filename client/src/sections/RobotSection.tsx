import SectionHeading from "../components/SectionHeading";
import { robotOverview } from "../data/content";

const RobotSection = () => (
  <section id="robot" className="bg-stp-cream">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="The Robot" title={robotOverview.title} description={robotOverview.summary} />
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {robotOverview.sections.map((item) => (
          <div
            key={item.heading}
            data-reveal
            className="rounded-3xl border border-stp-primary/10 bg-white p-8 shadow-sm"
          >
            <h3 className="font-display text-xl font-semibold text-stp-dark">{item.heading}</h3>
            <p className="mt-4 text-sm text-stone-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RobotSection;
