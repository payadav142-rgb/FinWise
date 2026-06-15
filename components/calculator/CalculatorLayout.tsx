type CalculatorLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function CalculatorLayout({
  title,
  children,
}: CalculatorLayoutProps) {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2">
      {/* Input Section */}
      <div className="rounded-3xl border p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Enter Details
        </h2>

        <div className="mt-6">
          {children}
        </div>
      </div>

      {/* Result Section */}
      <div className="rounded-3xl border p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Results
        </h2>

        <div className="mt-10 flex h-[300px] items-center justify-center text-center">
          <div>
            <p className="text-lg font-medium">
              {title}
            </p>

            <p className="mt-4 text-muted-foreground">
              Results will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}