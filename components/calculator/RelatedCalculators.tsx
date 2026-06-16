import Link from "next/link";
import { calculators } from "@/data/calculators";

type Props = {
  currentSlug: string;
};

export default function RelatedCalculators({
  currentSlug,
}: Props) {
  const related = calculators
    .filter(
      (calculator) =>
        calculator.slug !== currentSlug
    )
    .slice(0, 4);

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">
        Related Calculators
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {related.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/calculators/${calculator.slug}`}
            className="rounded-2xl border p-5 transition hover:shadow-md"
          >
            <h3 className="font-semibold">
              {calculator.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {calculator.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}