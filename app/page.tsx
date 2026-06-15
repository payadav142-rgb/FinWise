import Navbar from "@/components/layout/Navbar";
import PopularCalculators from "@/components/home/PopularCalculators";
import Categories from "@/components/home/Categories";
import WhyFinWise from "@/components/home/WhyFinWise";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

          <div className="relative mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-4xl">

              <span className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
                🇮🇳 India's Free Financial Calculator Platform
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
                Make Smarter
                <span className="block text-blue-600">
                  Financial Decisions
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl text-muted-foreground">
                Calculate SIP returns, EMI payments, FD maturity,
                RD growth, CAGR and more using free financial
                calculators built for Indian investors.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105">
                  Explore Calculators
                </button>

                <button className="rounded-2xl border bg-white px-8 py-4 font-medium shadow-sm transition hover:bg-slate-50">
                  View Popular Tools
                </button>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-sm text-muted-foreground">
                <div>✅ Free Forever</div>
                <div>✅ No Registration</div>
                <div>✅ Instant Results</div>
                <div>✅ Made for India</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
  <h2 className="text-4xl font-bold">
    What is FinWise?
  </h2>

  <p className="mt-6 leading-8 text-muted-foreground">
    FinWise is a free financial planning platform
    designed to help individuals make informed money
    decisions. Our calculators simplify complex
    financial calculations related to investments,
    taxes, savings and loans, allowing users to plan
    their finances with confidence.
  </p>

  <p className="mt-6 leading-8 text-muted-foreground">
    Whether you want to calculate SIP returns,
    estimate loan EMIs, compare fixed deposit
    returns or understand your income tax liability,
    FinWise provides easy-to-use tools that deliver
    instant results.
  </p>
</section>

<section className="mx-auto max-w-7xl px-6 py-10">
  <h2 className="text-4xl font-bold">
    Why Use Financial Calculators?
  </h2>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border p-6">
      <h3 className="text-xl font-semibold">
        Better Financial Planning
      </h3>
      <p className="mt-3 text-muted-foreground">
        Understand the impact of investments,
        savings and loans before making decisions.
      </p>
    </div>

    <div className="rounded-2xl border p-6">
      <h3 className="text-xl font-semibold">
        Instant Results
      </h3>
      <p className="mt-3 text-muted-foreground">
        Get quick and accurate estimates without
        manual calculations.
      </p>
    </div>

    <div className="rounded-2xl border p-6">
      <h3 className="text-xl font-semibold">
        Goal-Based Investing
      </h3>
      <p className="mt-3 text-muted-foreground">
        Plan investments for retirement, education,
        home purchase and wealth creation.
      </p>
    </div>

    <div className="rounded-2xl border p-6">
      <h3 className="text-xl font-semibold">
        Easy Comparison
      </h3>
      <p className="mt-3 text-muted-foreground">
        Compare different investment and savings
        options before investing.
      </p>
    </div>
  </div>
</section>

        <PopularCalculators />

        <Categories />

        <WhyFinWise />
      </main>

      <Footer />
    </>
  );
}