const features = [
  {
    title: "Accurate Calculations",
    description:
      "Built using updated financial formulas and Indian regulations.",
  },
  {
    title: "100% Free",
    description:
      "No signup required. Use all calculators completely free.",
  },
  {
    title: "Fast & Simple",
    description:
      "Get results instantly without complicated forms.",
  },
];

export default function WhyFinWise() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold">
        Why Choose FinWise?
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border p-6"
          >
            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}