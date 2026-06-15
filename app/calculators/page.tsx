import type { Metadata } from "next";
import Link from "next/link";
import { calculators } from "@/data/calculators";

export const metadata: Metadata = {
  title: "Financial Calculators | FinWise",
  description:
    "Explore free financial calculators for SIP, EMI, FD, RD, Income Tax, CAGR and more.",
};

export default function CalculatorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold">
          Financial Calculators
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Free online financial calculators to help you
          plan investments, taxes, savings and loans.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/calculators/${calculator.slug}`}
            className="rounded-2xl border p-6 transition hover:shadow-lg"
          >
            <div className="mb-3 inline-block rounded-full border px-3 py-1 text-sm">
              {calculator.category}
            </div>

            <h2 className="text-2xl font-semibold">
              {calculator.title}
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              {calculator.description}
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold">
          Why Use Financial Calculators?
        </h2>

        <p className="leading-8 text-muted-foreground">
          Financial calculators help individuals make
          informed decisions about investments, loans,
          taxes and savings. Whether you are planning
          for retirement, calculating SIP returns or
          estimating tax liability, these tools provide
          quick estimates and improve financial planning.
        </p>
      </section>
    </main>
  );
}