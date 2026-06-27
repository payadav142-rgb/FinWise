"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type ChartData = {
  year: number;
  total: number;
};

type Props = {
  data: ChartData[];
  title?: string;
};

export default function GrowthChart({
  data,
  title = "Investment Growth",
}: Props) {
  return (
    <div className="mt-8 rounded-2xl border p-6">
      <h3 className="mb-6 text-2xl font-bold">
        {title}
      </h3>

      <div className="h-[350px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="year"
              label={{
                value: "Years",
                position: "insideBottom",
                offset: -5,
              }}
            />

            <YAxis
              tickFormatter={(value) =>
                `₹${(
                  Number(value) / 1000
                ).toFixed(0)}K`
              }
            />

            <Tooltip
              formatter={(value) => [
                `₹${Number(
                  value ?? 0
                ).toLocaleString("en-IN")}`,
                "",
              ]}
            />

            <Line
              type="monotone"
              dataKey="total"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}