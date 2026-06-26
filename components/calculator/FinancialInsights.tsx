"use client";

import {
  TrendingUp,
  Target,
  PiggyBank,
  IndianRupee,
} from "lucide-react";

type Insight = {
  title: string;
  value: string;
  icon: "growth" | "target" | "money" | "rupee";
};

type FinancialInsightsProps = {
  insights: Insight[];
};

export default function FinancialInsights({
  insights,
}: FinancialInsightsProps) {
  const getIcon = (icon: Insight["icon"]) => {
    switch (icon) {
      case "growth":
        return <TrendingUp size={22} />;
      case "target":
        return <Target size={22} />;
      case "money":
        return <PiggyBank size={22} />;
      case "rupee":
        return <IndianRupee size={22} />;
      default:
        return <TrendingUp size={22} />;
    }
  };

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        Financial Insights
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {insights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                {getIcon(item.icon)}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}