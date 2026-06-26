type ResultCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

export default function ResultCard({
  label,
  value,
  highlight = false,
}: ResultCardProps) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-all ${
        highlight
          ? "border-blue-600 bg-blue-50"
          : "bg-slate-50"
      }`}
    >
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p
        className={`mt-2 font-bold ${
          highlight
            ? "text-3xl text-blue-700"
            : "text-2xl"
        }`}
      >
        {value}
      </p>
    </div>
  );
}