type CalculatorLayoutProps = {
  children: React.ReactNode;
};

export default function CalculatorLayout({
  children,
}: CalculatorLayoutProps) {
  return (
    <div className="mt-10">
      <div className="rounded-3xl border p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Enter Details
        </h2>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}