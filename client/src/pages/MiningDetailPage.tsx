import { Link, Navigate, useParams } from "react-router-dom";
import { miningInsights } from "../data/content";

const MiningDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const insight = miningInsights.find((i) => i.id === id);

  if (!insight) {
    return <Navigate to="/indigenous-mining" replace />;
  }

  return (
    <article className="bg-stp-cream">
      <div className="h-24 bg-gradient-to-b from-stp-primary/10 to-transparent" />

      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link
            to="/indigenous-mining"
            className="inline-flex items-center gap-1 text-stp-primary hover:underline"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Indigenous Mining
          </Link>
        </nav>

        {/* Content */}
        <header>
          <span className="text-sm font-medium uppercase tracking-wider text-stp-primary">
            Indigenous Mining
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold text-stp-dark md:text-5xl">
            {insight.heading}
          </h1>
        </header>

        <div className="prose prose-stone mt-10 max-w-none">
          <p className="text-lg leading-relaxed text-stone-700">{insight.body}</p>
          <p className="mt-6 text-base leading-relaxed text-stone-600">{insight.detail}</p>
        </div>

        {/* Optional image - sized to match parent page cards */}
        {insight.image && (
          <figure className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-stp-primary/10 bg-white p-4 shadow-sm">
              <img
                src={insight.image.src}
                alt={insight.image.alt}
                className="mx-auto h-auto max-h-80 w-auto max-w-full object-contain"
              />
            </div>
            {insight.image.alt && (
              <figcaption className="mt-3 text-center text-sm text-stone-500">
                {insight.image.alt}
              </figcaption>
            )}
          </figure>
        )}

        {/* Related insights */}
        <aside className="mt-16 border-t border-stone-200 pt-10">
          <h2 className="font-display text-xl font-semibold text-stp-dark">Explore more insights</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {miningInsights
              .filter((i) => i.id !== insight.id)
              .slice(0, 2)
              .map((other) => (
                <li key={other.id}>
                  <Link
                    to={`/indigenous-mining/${other.id}`}
                    className="block rounded-xl border border-stp-primary/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-semibold text-stp-dark">
                      {other.heading}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-stone-600">{other.body}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>
    </article>
  );
};

export default MiningDetailPage;
