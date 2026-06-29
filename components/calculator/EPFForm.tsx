"use client";

import { useState } from "react";

import { calculateEPF } from "@/lib/epf";

import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";

export default function EPFForm() {
  const [salary, setSalary] =
    useState(50000);

  const [contribution, setContribution] =
    useState(12);

  const [interestRate, setInterestRate] =
    useState(8.15);

  const [years, setYears] =
    useState(20);

  const result = calculateEPF(
    salary,
    contribution,
    interestRate,
    years
  );

  return (
    <div className="space-y-8">

      <SliderInput
        label="Monthly Basic Salary"
        value={salary}
        min={10000}
        max={300000}
        step={1000}
        prefix="₹"
        onChange={setSalary}
      />

      <SliderInput
        label="Employee Contribution"
        value={contribution}
        min={1}
        max={12}
        suffix="%"
        onChange={setContribution}
      />

      <SliderInput
        label="Interest Rate"
        value={interestRate}
        min={1}
        max={12}
        step={0.1}
        suffix="%"
        onChange={setInterestRate}
      />

      <SliderInput
        label="Years"
        value={years}
        min={1}
        max={40}
        suffix=" Years"
        onChange={setYears}
      />

      <div className="border-t pt-8">

        <h3 className="mb-5 text-2xl font-bold">
          EPF Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Total Contribution"
            value={`₹${result.totalContribution.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Interest Earned"
            value={`₹${result.interestEarned.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Maturity Amount"
            value={`₹${result.maturityAmount.toLocaleString("en-IN")}`}
            highlight
          />

        </div>

      </div>

      <InvestmentPieChart
        invested={result.totalContribution}
        returns={result.interestEarned}
      />

      <GrowthChart
        title="EPF Growth"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise EPF Breakdown"
        columns={[
          {
            key: "invested",
            label: "Contribution",
          },
          {
            key: "returns",
            label: "Interest",
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