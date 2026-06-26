"use client";

import { ArrowUpRight } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
  color?: "blue" | "green" | "orange" | "purple";
};

export default function StatCard({
  title,
  value,
  icon,
  description,
  color = "blue",
}: StatCardProps) {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-600 text-white",
      value: "text-blue-700",
      border: "border-blue-200",
    },
    green: {
      bg: "bg-emerald-50",
      icon: "bg-emerald-600 text-white",
      value: "text-emerald-700",
      border: "border-emerald-200",
    },
    orange: {
      bg: "bg-orange-50",
      icon: "bg-orange-600 text-white",
      value: "text-orange-700",
      border: "border-orange-200",
    },
    purple: {
      bg: "bg-violet-50",
      icon: "bg-violet-600 text-white",
      value: "text-violet-700",
      border: "border-violet-200",
    },
  };

  const theme = colors[color];

  return (
    <div
      className={`group rounded-3xl border ${theme.border} ${theme.bg} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.icon}`}
        >
          {icon}
        </div>

        <ArrowUpRight
          size={20}
          className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h3
        className={`mt-2 text-3xl font-bold ${theme.value}`}
      >
        {value}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}