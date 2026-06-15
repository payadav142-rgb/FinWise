const categories = [
  {
    title: "Tax Calculators",
    count: "10+ Tools",
  },
  {
    title: "Salary Calculators",
    count: "8+ Tools",
  },
  {
    title: "Retirement Calculators",
    count: "12+ Tools",
  },
  {
    title: "Investment Calculators",
    count: "15+ Tools",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold">
        Browse by Category
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">
              {category.title}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {category.count}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}