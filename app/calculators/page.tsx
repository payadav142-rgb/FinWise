import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { calculators } from "@/data/calculators";

export const metadata: Metadata = {
  title: "Financial Calculators | FinWise",
  description:
    "Explore free financial calculators for SIP, EMI, FD, RD, Lumpsum, CAGR, PPF, Income Tax and more. Built for Indian investors.",

  keywords: [
    "Financial Calculators",
    "SIP Calculator",
    "EMI Calculator",
    "FD Calculator",
    "RD Calculator",
    "PPF Calculator",
    "Income Tax Calculator",
    "Lumpsum Calculator",
    "CAGR Calculator",
    "FinWise",
  ],

  alternates: {
    canonical:
      "https://finwise-silk.vercel.app/calculators",
  },

  openGraph: {
    title: "Financial Calculators | FinWise",
    description:
      "Free online financial calculators for Indian investors.",
    url:
      "https://finwise-silk.vercel.app/calculators",
    siteName: "FinWise",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Financial Calculators | FinWise",
    description:
      "Free online financial calculators.",
  },
};

export default function CalculatorsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: "Financial Calculators",

    description:
      "Collection of free online financial calculators.",

    url:
      "https://finwise-silk.vercel.app/calculators",
  };

  return (
    <>
      <Script
        id="collection-schema"
        type="application/ld+json"
      >
        {JSON.stringify(collectionSchema)}
      </Script>

      <main className="mx-auto max-w-7xl px-6 py-16">

        <div className="max-w-4xl">

          <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Free Financial Tools
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight">
            Financial Calculators
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore free online financial calculators
            designed for Indian investors. Calculate
            SIP returns, loan EMIs, FD maturity,
            recurring deposit growth, PPF returns,
            CAGR, Lumpsum investments and Income Tax
            instantly.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {calculators.map((calculator) => (

            <Link
              key={calculator.slug}
              href={`/calculators/${calculator.slug}`}
              className="group rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >

              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {calculator.category}
              </div>

              <h2 className="mt-5 text-2xl font-bold transition group-hover:text-blue-600">
                {calculator.title}
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                {calculator.description}
              </p>

              <div className="mt-6 font-medium text-blue-600">
                Open Calculator →
              </div>

            </Link>

          ))}

        </div>
                <section className="mt-24 rounded-3xl border bg-slate-50 p-8 md:p-12">

          <h2 className="text-3xl font-bold">
            Why Use Financial Calculators?
          </h2>

          <p className="mt-6 leading-8 text-muted-foreground">
            Financial calculators simplify complex calculations and help
            investors make smarter financial decisions. Whether you are
            planning investments, taking a loan, saving taxes or preparing
            for retirement, these tools provide instant and accurate results.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">
                Accurate Results
              </h3>

              <p className="mt-3 text-muted-foreground">
                Built using standard financial formulas for reliable
                calculations.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">
                Completely Free
              </h3>

              <p className="mt-3 text-muted-foreground">
                Unlimited usage with no registration or hidden charges.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">
                Instant Calculations
              </h3>

              <p className="mt-3 text-muted-foreground">
                Get results immediately without doing manual calculations.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">
                Easy Comparison
              </h3>

              <p className="mt-3 text-muted-foreground">
                Compare multiple investment scenarios before making financial
                decisions.
              </p>
            </div>

          </div>

        </section>

        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            Frequently Used Calculators
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">
                SIP Calculator
              </h3>

              <p className="mt-2 text-muted-foreground">
                Estimate wealth creation through monthly SIP investments.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">
                EMI Calculator
              </h3>

              <p className="mt-2 text-muted-foreground">
                Calculate monthly EMI and total repayment instantly.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">
                FD Calculator
              </h3>

              <p className="mt-2 text-muted-foreground">
                Check maturity amount and interest earned on fixed deposits.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">
                Income Tax Calculator
              </h3>

              <p className="mt-2 text-muted-foreground">
                Compare old and new tax regimes in seconds.
              </p>
            </div>

          </div>

        </section>

        <section className="mt-24 rounded-3xl bg-blue-600 px-8 py-14 text-center text-white">

          <h2 className="text-4xl font-bold">
            Start Planning Your Finances Today
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-blue-100">
            Use FinWise financial calculators to make informed investment,
            savings and loan decisions with confidence.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
          >
            Back to Home
          </Link>

        </section>

      </main>

    </>
  );
}