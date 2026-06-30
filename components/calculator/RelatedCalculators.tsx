import Link from "next/link";
import { calculators } from "@/data/calculators";

type Props = {
  currentSlug: string;
};

export default function RelatedCalculators({
  currentSlug,
}: Props) {
  const currentCalculator = calculators.find(
    (item) => item.slug === currentSlug
  );

  const related = calculators
    .filter(
      (item) =>
        item.slug !== currentSlug &&
        item.category === currentCalculator?.category
    )
    .slice(0, 6);

  const fallback =
    related.length >= 4
      ? related
      : calculators
          .filter((item) => item.slug !== currentSlug)
          .slice(0, 6);

  return (
    <section className="mt-24">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Related Calculators
          </h2>

          <p className="mt-2 text-muted-foreground">
            Explore more free financial calculators
            to plan your investments, taxes,
            retirement and loans.
          </p>
        </div>

        <Link
          href="/calculators"
          className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          View All
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fallback.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/calculators/${calculator.slug}`}
            className="group rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {calculator.category}
            </div>

            <h3 className="mt-4 text-xl font-semibold transition group-hover:text-blue-600">
              {calculator.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {calculator.description}
            </p>

            <div className="mt-5 font-medium text-blue-600">
              Open Calculator →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link
          href="/calculators"
          className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View All Calculators
        </Link>
      </div>
    </section>
  );
}