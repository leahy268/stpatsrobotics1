import ButtonLink from "../components/ButtonLink";
import { heroContent } from "../data/content";

const HeroSection = () => {
  const { eyebrow, title, highlight, description, primaryCta, secondaryCta, media } = heroContent;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-stp-primary-dark via-stp-primary to-stp-dark text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8" data-reveal>
          <p className="uppercase tracking-[0.3em] text-stp-secondary text-sm font-semibold">{eyebrow}</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            {title}
            <span className="block text-stp-secondary">{highlight}</span>
          </h1>
          <p className="max-w-xl text-base text-white/80 sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <div className="flex-1" data-reveal>
          <div className="relative mx-auto aspect-[4/3] max-w-xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={media.src}
              alt={media.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-stp-primary/25 via-transparent to-stp-secondary/25" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stp-cream" />
    </section>
  );
};

export default HeroSection;
