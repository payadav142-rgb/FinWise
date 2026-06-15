import Link from "next/link";

const calculators = [
  {
  slug: "rd-calculator",
  title: "RD Calculator",
  category: "Investment",
  icon: "🏦",
  description: "Calculate recurring deposit maturity value.",
},
  {
  slug: "cagr-calculator",
  title: "CAGR Calculator",
  category: "Investment",
  icon: "📈",
  description: "Calculate annualized investment returns.",
},
  {
  slug: "fd-calculator",
  title: "FD Calculator",
  category: "Investment",
  icon: "🏛️",
  description: "Calculate FD maturity amount instantly.",
},
  {
  slug: "emi-calculator",
  title: "EMI Calculator",
  category: "Loans",
  icon: "🏦",
  description: "Calculate loan EMI instantly.",
},
  {
  slug: "lumpsum-calculator",
  title: "Lumpsum Calculator",
  category: "Investment",
  icon: "💎",
  description: "Calculate future value of a one-time investment.",
},
  {
  slug: "sip-calculator",
  title: "SIP Calculator",
  category: "Investment",
  icon: "📊",
  description: "Calculate SIP returns and maturity amount.",
},
  {
    slug: "income-tax-calculator",
    title: "Income Tax Calculator",
    category: "Tax",
    icon: "💰",
    description: "Calculate tax under old and new regimes.",
  },
  {
    slug: "ctc-to-inhand-calculator",
    title: "CTC to In-Hand",
    category: "Salary",
    icon: "💼",
    description: "Estimate your monthly take-home salary.",
  },
  {
    slug: "hra-calculator",
    title: "HRA Calculator",
    category: "Tax",
    icon: "🏠",
    description: "Calculate HRA exemption easily.",
  },
  {
    slug: "epf-calculator",
    title: "EPF Calculator",
    category: "Retirement",
    icon: "📈",
    description: "Estimate your EPF contributions and returns.",
  },
  {
    slug: "nps-calculator",
    title: "NPS Calculator",
    category: "Retirement",
    icon: "🎯",
    description: "Plan your retirement corpus.",
  },
  {
    slug: "gratuity-calculator",
    title: "Gratuity Calculator",
    category: "Salary",
    icon: "🎁",
    description: "Calculate gratuity amount instantly.",
  },
];

export default function PopularCalculators() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold">Popular Calculators</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calculator) => (
          <Link
            href={`/calculators/${calculator.slug}`}
            key={calculator.slug}
            className="group block rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-3xl">{calculator.icon}</div>

            <div className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
              {calculator.category}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {calculator.title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              {calculator.description}
            </p>

            <div className="mt-5 font-medium text-blue-600">
              Open Calculator →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}