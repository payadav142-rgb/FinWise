const features = [
  {
    icon: "⚡",
    title: "Instant Results",
    description:
      "Every calculator provides results in real time without waiting or loading screens.",
  },
  {
    icon: "🎯",
    title: "Accurate Calculations",
    description:
      "Built using industry-standard financial formulas used by banks and investment platforms.",
  },
  {
    icon: "🇮🇳",
    title: "Made for India",
    description:
      "Supports Indian taxation, investment options and salary calculations.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "No login, no personal data collection and no hidden charges.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    description:
      "Optimized for phones, tablets and desktops with lightning fast performance.",
  },
  {
    icon: "💯",
    title: "100% Free",
    description:
      "Use every financial calculator forever without paying anything.",
  },
];

export default function WhyFinWise() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose FinWise?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Trusted financial calculators designed to help you make
            smarter investment, tax and loan decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}