"use client";

import { useState } from "react";

import { calculateNPS } from "@/lib/nps";

import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";

export default function NPSForm() {
  const [monthlyContribution, setMonthlyContribution] =
    useState(5000);

  const [returnRate, setReturnRate] =
    useState(10);

  const [years, setYears] =
    useState(30);

  const result = calculateNPS(
    monthlyContribution,
    returnRate,
    years
  );

  return (
    <div className="space-y-8">

      <SliderInput
        label="Monthly Contribution"
        value={monthlyContribution}
        min={500}
        max={100000}
        step={500}
        prefix="₹"
        onChange={setMonthlyContribution}
      />

      <SliderInput
        label="Expected Return"
        value={returnRate}
        min={1}
        max={15}
        step={0.1}
        suffix="%"
        onChange={setReturnRate}
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
          NPS Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Total Investment"
            value={`₹${result.totalInvestment.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Wealth Gained"
            value={`₹${result.wealthGained.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Retirement Corpus"
            value={`₹${result.maturityAmount.toLocaleString("en-IN")}`}
            highlight
          />

        </div>

      </div>

      <InvestmentPieChart
        invested={result.totalInvestment}
        returns={result.wealthGained}
      />

      <GrowthChart
        title="NPS Growth"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise NPS Breakdown"
        columns={[
          {
            key: "invested",
            label: "Investment",
          },
          {
            key: "returns",
            label: "Returns",
          },
          {
            key: "total",
            label: "Corpus",
          },
        ]}
        data={result.yearlyData}
      />

    </div>
  );
}