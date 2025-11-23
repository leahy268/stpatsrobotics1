import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";
import { navLinks } from "../data/content";
import HeroSection from "../sections/HeroSection";

const featureCopy: Record<string, string> = {
  team: "Meet the programmers, builders, and storytellers driving every mission run and research milestone.",
  innovation: "Explore our 2025 innovation project that blends Indigenous knowledge with future-focused STEM.",
  mining: "Dive deeper into Indigenous Australian mining practices and the lessons they inspire today.",
  about: "Get to know St Patrick's College Mackay and the robotics program that fuels our success.",
  contact: "Reach out to collaborate, mentor, or invite us to share our journey with your community."
};

const HomePage = () => {
  const featureLinks = navLinks.filter((link) => link.id !== "home");

  return (
    <div className="space-y-0">
      <HeroSection />
      <section className="bg-stp-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            align="center"
            eyebrow="Discover More"
            title="Dive deeper into our story"
            description="Each dedicated page expands on the people, projects, and partnerships behind St Patrick's One."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureLinks.map((link) => (
              <article
                key={link.id}
                data-reveal
                className="group flex h-full flex-col justify-between rounded-3xl border border-stp-primary/10 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold text-stp-dark">{link.label}</h3>
                  <p className="text-sm text-stp-dark/70">{featureCopy[link.id] ?? "Join us on the journey."}</p>
                </div>
                <div className="mt-8">
                  <ButtonLink to={link.to} variant="secondary">
                    View page
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
