"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Wallet,
  IndianRupee,
  ShieldCheck,
  PiggyBank,
} from "lucide-react";

type Insight = {
  title: string;
  value: string;
  description?: string;
  icon:
    | "growth"
    | "target"
    | "wallet"
    | "rupee"
    | "shield"
    | "piggybank";
};

type FinancialInsightsProps = {
  title?: string;
  insights: Insight[];
};

export default function FinancialInsights({
  title = "Financial Insights",
  insights,
}: FinancialInsightsProps) {
  const getIcon = (icon: Insight["icon"]) => {
    switch (icon) {
      case "growth":
        return <TrendingUp size={22} />;
      case "target":
        return <Target size={22} />;
      case "wallet":
        return <Wallet size={22} />;
      case "rupee":
        return <IndianRupee size={22} />;
      case "shield":
        return <ShieldCheck size={22} />;
      case "piggybank":
        return <PiggyBank size={22} />;
      default:
        return <TrendingUp size={22} />;
    }
  };

  return (
    <section className="mt-16">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-2 text-slate-500">
          Smart analysis based on your financial inputs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {insights.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            whileHover={{
              y: -6,
            }}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl"
          >

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

              {getIcon(item.icon)}

            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-3xl font-bold text-blue-700">
              {item.value}
            </p>

            {item.description && (
              <p className="mt-4 leading-7 text-slate-500">
                {item.description}
              </p>
            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
}