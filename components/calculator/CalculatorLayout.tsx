type CalculatorLayoutProps = {
  children: React.ReactNode;
};

export default function CalculatorLayout({
  children,
}: CalculatorLayoutProps) {
  return (
    <section className="mt-12">
      <div className="rounded-3xl border bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-bold">
          Enter Details
        </h2>

        <p className="mt-2 text-muted-foreground">
          Fill in the required values to calculate your result instantly.
        </p>

        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}