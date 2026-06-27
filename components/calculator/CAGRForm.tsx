"use client";

import { useState } from "react";

import { calculateCAGR } from "@/lib/cagr";

import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";

import GrowthChart from "@/components/charts/GrowthChart";

export default function CAGRForm() {
  const [initialValue, setInitialValue] =
    useState(100000);

  const [finalValue, setFinalValue] =
    useState(180000);

  const [years, setYears] =
    useState(5);

  const result = calculateCAGR(
    initialValue,
    finalValue,
    years
  );

  return (
    <div className="space-y-8">

      <SliderInput
        label="Initial Investment"
        value={initialValue}
        min={1000}
        max={10000000}
        step={1000}
        prefix="₹"
        onChange={setInitialValue}
      />

      <SliderInput
        label="Final Value"
        value={finalValue}
        min={1000}
        max={50000000}
        step={1000}
        prefix="₹"
        onChange={setFinalValue}
      />

      <SliderInput
        label="Investment Period"
        value={years}
        min={1}
        max={40}
        suffix=" Years"
        onChange={setYears}
      />

      <div className="border-t pt-8">

        <h3 className="mb-5 text-2xl font-bold">
          Growth Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Initial Investment"
            value={`₹${initialValue.toLocaleString(
              "en-IN"
            )}`}
          />

          <ResultCard
            label="Final Value"
            value={`₹${finalValue.toLocaleString(
              "en-IN"
            )}`}
          />

          <ResultCard
            label="CAGR"
            value={`${result.cagr}%`}
            highlight
          />

        </div>

      </div>

      <GrowthChart
        title="Investment Growth"
        data={result.yearlyData}
      />

    </div>
  );
}