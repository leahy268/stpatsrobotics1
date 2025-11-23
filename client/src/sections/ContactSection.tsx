import SectionHeading from "../components/SectionHeading";
import { contactInfo } from "../data/content";

const ContactSection = () => (
  <section id="contact" className="bg-stp-cream">
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title={contactInfo.title}
        description={contactInfo.description}
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-stp-primary/20 bg-white p-10 shadow-lg" data-reveal>
          <dl className="space-y-6 text-base text-stp-dark">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-stp-secondary">Email</dt>
              <dd className="mt-2 text-lg">
                <a className="underline-offset-4 hover:underline" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-stp-secondary">Phone</dt>
              <dd className="mt-2 text-lg">
                <a className="underline-offset-4 hover:underline" href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}>
                  {contactInfo.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-stp-secondary">Address</dt>
              <dd className="mt-2 max-w-sm text-lg text-stone-700">{contactInfo.address}</dd>
            </div>
          </dl>
        </div>
        <div className="space-y-8" data-reveal>
          <div className="rounded-3xl border border-stp-primary/10 bg-stp-light/80 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-stp-secondary">Connect</p>
            <ul className="mt-4 space-y-3 text-base">
              {contactInfo.socials.map((social) => (
                <li key={social.href}>
                  <a
                    className="inline-flex items-center gap-2 text-stp-primary hover:text-stp-dark"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-stp-primary/10 text-stp-primary">
                      ↗
                    </span>
                    <span className="underline-offset-4 hover:underline">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-stone-500">
            Built with respect for Indigenous knowledge and a commitment to inclusive STEM pathways.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
