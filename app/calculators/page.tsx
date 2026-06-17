import type { Metadata } from "next";
import Link from "next/link";
import { calculators } from "@/data/calculators";

export const metadata: Metadata = {
title: "Financial Calculators | FinWise",
description:
"Use free financial calculators including SIP Calculator, EMI Calculator, FD Calculator, RD Calculator, CAGR Calculator and Income Tax Calculator.",
};

export default function CalculatorsPage() {
return ( <main className="mx-auto max-w-7xl px-6 py-16"> <div className="max-w-4xl"> <h1 className="text-5xl font-bold">
Financial Calculators </h1>


    <p className="mt-4 text-lg text-muted-foreground">
      Explore free online financial calculators
      designed for Indian investors. Calculate
      SIP returns, loan EMIs, fixed deposit
      maturity values, recurring deposit growth,
      income tax liability and investment returns
      within seconds.
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
      Financial calculators simplify complex
      calculations and help individuals make
      informed financial decisions. Instead of
      manually calculating investment returns,
      taxes or loan payments, users can get
      instant estimates and compare different
      scenarios easily.
    </p>

    <p className="mt-6 leading-8 text-muted-foreground">
      Whether you are planning retirement,
      saving for your child's education,
      purchasing a home or building long-term
      wealth, financial calculators can help
      improve planning and decision-making.
    </p>
  </section>

  <section className="mt-20">
    <h2 className="mb-6 text-3xl font-bold">
      Popular Financial Tools
    </h2>

    <ul className="space-y-4 text-muted-foreground">
      <li>• SIP Calculator</li>
      <li>• EMI Calculator</li>
      <li>• FD Calculator</li>
      <li>• RD Calculator</li>
      <li>• CAGR Calculator</li>
      <li>• Income Tax Calculator</li>
      <li>• Lumpsum Calculator</li>
    </ul>
  </section>
</main>


);
}
