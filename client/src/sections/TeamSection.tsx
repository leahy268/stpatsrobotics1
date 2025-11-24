import SectionHeading from "../components/SectionHeading";
import { teamMembers } from "../data/content";

const TeamSection = () => {
  const coaches = teamMembers.slice(0, 2);
  const students = teamMembers.slice(2);

  const renderMemberCard = (member: (typeof teamMembers)[number], extraClasses = "") => (
    <article
      key={member.name}
      data-reveal
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-stp-primary/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${extraClasses}`}
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
          <p className="text-sm font-medium uppercase tracking-wider text-stp-primary/80">{member.role}</p>
        </div>
        <p className="text-sm text-stone-700">{member.description}</p>
      </div>
    </article>
  );

  return (
    <section id="team" className="bg-stp-light">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Our Team"
          title="People behind the missions"
          description="Formed in 2024, St Patrick's One united for the current FIRST LEGO League season, qualifying for the Australian Nationals in Gladstone through collaborative design, programming, and research excellence."
        />
        <div className="mt-16 space-y-12">
          <div className="flex flex-wrap justify-center gap-10">
            {coaches.map((coach) => renderMemberCard(coach, "w-full max-w-xs sm:max-w-sm"))}
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => renderMemberCard(student))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
