"use client";

import { useState } from "react";

import { calculateGratuity } from "@/lib/gratuity";

import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";

import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";

export default function GratuityForm() {
  const [salary, setSalary] =
    useState(50000);

  const [years, setYears] =
    useState(10);

  const result = calculateGratuity(
    salary,
    years
  );

  return (
    <div className="space-y-8">

      <SliderInput
        label="Last Drawn Monthly Salary"
        value={salary}
        min={10000}
        max={500000}
        step={1000}
        prefix="₹"
        onChange={setSalary}
      />

      <SliderInput
        label="Years of Service"
        value={years}
        min={5}
        max={40}
        suffix=" Years"
        onChange={setYears}
      />

      <div className="border-t pt-8">

        <h3 className="mb-5 text-2xl font-bold">
          Gratuity Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Last Salary"
            value={`₹${salary.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Years of Service"
            value={`${years} Years`}
          />

          <ResultCard
            label="Estimated Gratuity"
            value={`₹${result.gratuity.toLocaleString("en-IN")}`}
            highlight
          />

        </div>

      </div>

      <GrowthChart
        title="Gratuity Growth"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise Gratuity Breakdown"
        columns={[
          {
            key: "invested",
            label: "Salary",
          },
          {
            key: "returns",
            label: "Benefit",
          },
          {
            key: "total",
            label: "Gratuity",
          },
        ]}
        data={result.yearlyData}
      />

    </div>
  );
}