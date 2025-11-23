import ButtonLink from "../components/ButtonLink";

const NotFoundPage = () => (
  <section className="bg-stp-cream">
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center" data-reveal>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stp-secondary">404</p>
      <h1 className="mt-6 font-display text-4xl font-semibold text-stp-dark">Page not found</h1>
      <p className="mt-4 text-base text-stp-dark/70">
        The page you are looking for has moved or no longer exists. Choose another destination to keep exploring the
        St Patrick's One story.
      </p>
      <div className="mt-8">
        <ButtonLink to="/">Return home</ButtonLink>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
