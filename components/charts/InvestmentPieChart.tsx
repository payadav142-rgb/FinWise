"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Props = {
  invested: number;
  returns: number;
};

const COLORS = [
  "#2563eb",
  "#22c55e",
];

export default function InvestmentPieChart({
  invested,
  returns,
}: Props) {
  const data = [
    {
      name: "Invested",
      value: invested,
    },
    {
      name: "Returns",
      value: returns,
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border p-6">
      <h3 className="mb-6 text-2xl font-bold">
        Investment Allocation
      </h3>

      <div className="h-[320px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
  formatter={(value) => [
    `₹${Number(value ?? 0).toLocaleString("en-IN")}`,
    "",
  ]}
/>

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}