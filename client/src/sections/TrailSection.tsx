import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { navLinks } from "../data/content";

const featureCopy: Record<string, string> = {
  team: "Meet the programmers, builders, and storytellers driving every mission run and research milestone.",
  innovation: "Watch our PSA and explore the research behind light pollution's effect on bats and forest regeneration.",
  robot: "See how sensors, filtering, and control systems work together to keep our robot on course.",
  "past-seasons": "Recap the projects and themes from every FIRST LEGO League season we've competed in.",
  about: "Get to know St Patrick's College Mackay and the robotics program that fuels our success.",
  sponsors: "Meet the partners whose resources, mentoring, and advocacy keep St Patrick's One moving forward.",
  contact: "Reach out to collaborate, mentor, or invite us to share our journey with your community."
};

const glowDots = [
  { left: "8%", top: "38%" },
  { left: "88%", top: "46%" },
  { left: "20%", top: "58%" },
  { left: "76%", top: "64%" },
  { left: "12%", top: "74%" },
  { left: "90%", top: "80%" },
  { left: "30%", top: "88%" },
  { left: "68%", top: "92%" },
  { left: "15%", top: "96%" },
  { left: "82%", top: "98%" }
];

const TrailSection = () => {
  const stops = navLinks.filter((link) => link.id !== "home");

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#fdf7ed_0%,#f5f1e6_16%,#3a4555_70%,#111827_100%)] py-24"
      aria-label="Our journey"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {glowDots.map((dot) => (
          <span
            key={`${dot.left}-${dot.top}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-stp-accent shadow-[0_0_10px_3px_rgba(244,196,48,0.55)]"
            style={{ left: dot.left, top: dot.top }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Our Journey"
          title="Follow the trail"
          description="Each stop expands on the people, projects, and partnerships behind St Patrick's One."
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 bottom-0 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-stp-secondary via-stp-primary to-stp-accent lg:block"
          />

          <ol className="space-y-12 lg:space-y-20">
            {stops.map((stop, index) => {
              const isRight = index % 2 === 1;

              return (
                <li key={stop.id} className="relative">
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-stp-cream bg-stp-accent shadow-[0_0_14px_4px_rgba(244,196,48,0.55)] lg:block"
                  />
                  <div
                    data-reveal
                    className={`rounded-3xl border border-stp-primary/10 bg-white p-8 shadow-lg lg:w-[calc(50%-2.5rem)] ${
                      isRight ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stp-accent-dark">
                      Stop {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-stp-dark">{stop.label}</h3>
                    <p className="mt-3 text-sm text-stp-dark/70">
                      {featureCopy[stop.id] ?? "Join us on the journey."}
                    </p>
                    <Link
                      to={stop.to}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-stp-primary hover:text-stp-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stp-accent"
                    >
                      View page
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TrailSection;
