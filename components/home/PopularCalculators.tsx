import Link from "next/link";

const calculators = [
  {
    slug: "sip-calculator",
    title: "SIP Calculator",
    icon: "📈",
    category: "Investment",
    description:
      "Calculate SIP returns, invested amount and wealth gained instantly.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "lumpsum-calculator",
    title: "Lumpsum Calculator",
    icon: "💰",
    category: "Investment",
    description:
      "Estimate future value of your one-time investment.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    slug: "fd-calculator",
    title: "FD Calculator",
    icon: "🏦",
    category: "Investment",
    description:
      "Know maturity amount and interest earned on fixed deposits.",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "rd-calculator",
    title: "RD Calculator",
    icon: "💳",
    category: "Investment",
    description:
      "Calculate recurring deposit maturity value instantly.",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "emi-calculator",
    title: "EMI Calculator",
    icon: "🏠",
    category: "Loans",
    description:
      "Calculate monthly EMI with total interest payable.",
    color: "from-orange-500 to-red-500",
  },
  {
    slug: "income-tax-calculator",
    title: "Income Tax Calculator",
    icon: "🧾",
    category: "Tax",
    description:
      "Compare Old vs New Tax Regime and calculate tax liability.",
    color: "from-sky-500 to-blue-600",
  },
  {
    slug: "ppf-calculator",
    title: "PPF Calculator",
    icon: "💼",
    category: "Investment",
    description:
      "Estimate your Public Provident Fund maturity amount.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    slug: "epf-calculator",
    title: "EPF Calculator",
    icon: "📊",
    category: "Retirement",
    description:
      "Estimate EPF balance with yearly growth projection.",
    color: "from-emerald-500 to-green-600",
  },
  {
    slug: "nps-calculator",
    title: "NPS Calculator",
    icon: "🎯",
    category: "Retirement",
    description:
      "Plan retirement corpus using National Pension System.",
    color: "from-violet-500 to-indigo-600",
  },
];

export default function PopularCalculators() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Popular Financial Calculators
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Explore our most used financial calculators designed for
            Indian investors, salaried professionals and taxpayers.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {calculators.map((calculator) => (

            <Link
              key={calculator.slug}
              href={`/calculators/${calculator.slug}`}
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className={`h-2 bg-gradient-to-r ${calculator.color}`}
              />

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <div className="text-5xl">
                    {calculator.icon}
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {calculator.category}
                  </span>

                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {calculator.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {calculator.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-blue-600">
                    Open Calculator →
                  </span>

                  <span className="text-sm text-muted-foreground">
                    Free
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}