"use client";

import { useState } from "react";
import { calculateLumpsum } from "@/lib/lumpsum";

import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import BreakdownTable from "@/components/charts/BreakdownTable";
import GrowthChart from "@/components/charts/GrowthChart";

export default function LumpsumForm() {
  const [investment, setInvestment] =
    useState(100000);

  const [annualReturn, setAnnualReturn] =
    useState(12);

  const [years, setYears] =
    useState(10);

  const result = calculateLumpsum(
    investment,
    annualReturn,
    years
  );

  return (
    <div className="space-y-8">

      <SliderInput
        label="One-Time Investment"
        value={investment}
        min={1000}
        max={10000000}
        step={1000}
        prefix="₹"
        onChange={setInvestment}
      />

      <SliderInput
        label="Expected Annual Return"
        value={annualReturn}
        min={1}
        max={30}
        step={0.5}
        suffix="%"
        onChange={setAnnualReturn}
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
          Investment Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Invested Amount"
            value={`₹${investment.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Estimated Returns"
            value={`₹${result.estimatedReturns.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Future Value"
            value={`₹${result.futureValue.toLocaleString("en-IN")}`}
            highlight
          />

        </div>

      </div>

      <InvestmentPieChart
        invested={investment}
        returns={result.estimatedReturns}
      />

      <GrowthChart
        data={result.yearlyData}
      />

      <BreakdownTable
        data={result.yearlyData}
        columns={[
          {
            key: "invested",
            label: "Invested",
          },
          {
            key: "returns",
            label: "Returns",
          },
          {
            key: "total",
            label: "Future Value",
          },
        ]}
      />

    </div>
  );
}