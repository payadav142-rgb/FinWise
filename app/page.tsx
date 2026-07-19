import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PopularCalculators from "@/components/home/PopularCalculators";
import Categories from "@/components/home/Categories";
import WhyFinWise from "@/components/home/WhyFinWise";

export const metadata: Metadata = {
  title: "FinWise - Free Financial Calculators for India",

  description:
    "Free online financial calculators for SIP, EMI, FD, RD, PPF, EPF, NPS, Income Tax, HRA, Gratuity and more.",

  alternates: {
    canonical: "https://finwise-silk.vercel.app",
  },

  openGraph: {
    title: "FinWise - Financial Calculators for India",

    description:
      "Calculate SIP, EMI, FD, RD, Income Tax and more using free online financial calculators.",

    url: "https://finwise-silk.vercel.app",

    siteName: "FinWise",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinWise",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FinWise",

    description:
      "Free Financial Calculators for India.",

    images: ["/og-image.png"],
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "FinWise",

    url: "https://finwise-silk.vercel.app",

    potentialAction: {
      "@type": "SearchAction",

      target:
        "https://finwise-silk.vercel.app/calculators?search={search_term_string}",

      "query-input":
        "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "Is FinWise free to use?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Yes. FinWise is completely free to use. All financial calculators and guides are available without registration.",
        },
      },
      {
        "@type": "Question",

        name: "Are the calculator results accurate?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Yes. Every calculator uses standard financial formulas to provide reliable estimates.",
        },
      },
      {
        "@type": "Question",

        name: "Which calculators are available?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "FinWise offers SIP, EMI, FD, RD, PPF, EPF, NPS, Income Tax, HRA, Gratuity, CAGR, CTC to In-Hand Salary and many more financial calculators.",
        },
      },
      {
        "@type": "Question",

        name: "Do I need to create an account?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No. You can use every calculator instantly without creating an account.",
        },
      },
    ],
  };

  return (
    <>
      {/* Website Schema */}
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* FAQ Schema */}
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Navbar />

      <main>
                {/* HERO */}

        <section className="relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

          <div className="relative mx-auto max-w-7xl px-6 py-28">

            <div className="max-w-4xl">

              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
                🇮🇳 India's Free Financial Calculator Platform
              </span>

              <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">

                Make Smarter

                <span className="block text-blue-600">
                  Financial Decisions
                </span>

              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">

                Free online financial calculators for SIP, EMI,
                FD, RD, PPF, EPF, NPS, Income Tax,
                HRA, Gratuity and more.

                Calculate instantly and make informed
                financial decisions.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/calculators"
                  className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
                >
                  Explore Calculators
                </Link>

                <Link
                  href="/blog"
                  className="rounded-2xl border bg-white px-8 py-4 font-semibold shadow-sm transition hover:bg-slate-50"
                >
                  Read Financial Guides
                </Link>

              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-muted-foreground">

                <div>✅ 100% Free</div>

                <div>✅ No Registration</div>

                <div>✅ Instant Results</div>

                <div>✅ Made for India 🇮🇳</div>

              </div>

              <div className="mt-16 grid gap-6 sm:grid-cols-3">

                <div className="rounded-2xl border bg-white p-6 shadow-sm">

                  <div className="text-3xl font-bold text-blue-600">
                    13+
                  </div>

                  <p className="mt-2 text-muted-foreground">
                    Financial Calculators
                  </p>

                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">

                  <div className="text-3xl font-bold text-blue-600">
                    10+
                  </div>

                  <p className="mt-2 text-muted-foreground">
                    Finance Articles
                  </p>

                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">

                  <div className="text-3xl font-bold text-blue-600">
                    Free
                  </div>

                  <p className="mt-2 text-muted-foreground">
                    Forever to Use
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
                {/* About FinWise */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="mx-auto max-w-5xl text-center">

            <h2 className="text-4xl font-bold">
              What is FinWise?
            </h2>

            <p className="mt-8 text-lg leading-9 text-muted-foreground">
              FinWise is a free financial planning platform designed
              specifically for Indian users. Whether you're planning
              investments, calculating loan EMIs, estimating income
              tax, or preparing for retirement, our calculators help
              you make informed financial decisions within seconds.
            </p>

            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              Every calculator is built using accurate financial
              formulas and provides instant results with yearly
              breakdowns, charts and detailed explanations to make
              financial planning simple and reliable.
            </p>

          </div>

        </section>

        {/* Why Use Financial Calculators */}

        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <h2 className="text-4xl font-bold">
                Why Use Financial Calculators?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Financial calculators remove guesswork and help you
                understand the future value of your investments,
                savings and loans before making financial decisions.
              </p>

            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-5xl">
                  📈
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Better Planning
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Understand your financial future before investing or
                  taking a loan.
                </p>

              </div>

              <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-5xl">
                  ⚡
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Instant Results
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Calculate returns, EMIs and tax liabilities instantly
                  without manual calculations.
                </p>

              </div>

              <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-5xl">
                  🎯
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Goal-Based Investing
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Plan wealth creation, retirement, children's
                  education and home purchase with confidence.
                </p>

              </div>

              <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="text-5xl">
                  💰
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Easy Comparison
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Compare investment options and choose the one that
                  best suits your financial goals.
                </p>

              </div>

            </div>

          </div>

        </section>
                {/* Popular Calculators */}

        <PopularCalculators />

        {/* Calculator Categories */}

        <Categories />

        {/* Why FinWise */}

        <WhyFinWise />
                {/* Final CTA */}

        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24">

          <div className="mx-auto max-w-5xl px-6 text-center text-white">

            <h2 className="text-4xl font-bold">
              Start Planning Your Finances Today
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Explore our collection of free financial calculators and
              make smarter investment, tax and loan decisions with
              accurate calculations built for Indian users.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/calculators"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
              >
                Explore Calculators
              </Link>

              <Link
                href="/blog"
                className="rounded-2xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600"
              >
                Read Financial Guides
              </Link>

            </div>

          </div>

        </section>

        {/* FAQs */}

        <section className="mx-auto max-w-5xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-5">

            <details className="rounded-2xl border bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold">
                Is FinWise free to use?
              </summary>

              <p className="mt-4 leading-7 text-muted-foreground">
                Yes. Every calculator and financial guide available on
                FinWise is completely free to use without any
                registration.
              </p>
            </details>

            <details className="rounded-2xl border bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold">
                Are the calculator results accurate?
              </summary>

              <p className="mt-4 leading-7 text-muted-foreground">
                Yes. All calculators use standard financial formulas and
                provide reliable estimates for planning purposes.
              </p>
            </details>

            <details className="rounded-2xl border bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold">
                Which calculators are available?
              </summary>

              <p className="mt-4 leading-7 text-muted-foreground">
                FinWise offers SIP, EMI, FD, RD, PPF, EPF, NPS, Income
                Tax, HRA, Gratuity, CAGR, CTC to In-Hand Salary and many
                more financial calculators.
              </p>
            </details>

            <details className="rounded-2xl border bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold">
                Do I need to create an account?
              </summary>

              <p className="mt-4 leading-7 text-muted-foreground">
                No. You can use every calculator instantly without
                signing up or sharing any personal information.
              </p>
            </details>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
      