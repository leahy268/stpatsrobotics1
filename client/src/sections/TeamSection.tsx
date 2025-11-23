import SectionHeading from "../components/SectionHeading";
import { teamMembers } from "../data/content";

const TeamSection = () => (
  <section id="team" className="bg-stp-light">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Our Team"
        title="People behind the missions"
        description="Collaborative creators, strategists, and storytellers powering St Patrick's One."
      />
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            data-reveal
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-stp-primary/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={member.image.src}
                alt={member.image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 px-6 py-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-stp-dark">{member.name}</h3>
                <p className="text-sm font-medium uppercase tracking-wider text-stp-primary/80">
                  {member.role}
                </p>
              </div>
              <p className="text-sm text-stone-700">{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
