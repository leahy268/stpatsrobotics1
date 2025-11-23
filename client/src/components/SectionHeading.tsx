type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

const SectionHeading = ({ eyebrow, title, description, align = "left", id }: SectionHeadingProps) => (
  <header
    id={id}
    className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
  >
    {eyebrow && (
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stp-secondary mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-3xl font-semibold text-stp-dark sm:text-4xl">
      {title}
    </h2>
    {description && <p className="mt-4 text-base text-stp-dark/70">{description}</p>}
  </header>
);

export default SectionHeading;
