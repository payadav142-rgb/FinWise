import { Wallet, TrendingUp, Trophy } from "lucide-react";

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
  const Icon = highlight
    ? Trophy
    : label.toLowerCase().includes("return") ||
      label.toLowerCase().includes("interest")
    ? TrendingUp
    : Wallet;

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        highlight
          ? "border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50"
          : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${
            highlight
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          <Icon size={22} />
        </div>

        <div className="flex-1">
          <p className="text-sm text-slate-500">
            {label}
          </p>

          <p
            className={`mt-1 font-bold ${
              highlight
                ? "text-3xl text-blue-700"
                : "text-2xl text-slate-900"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}