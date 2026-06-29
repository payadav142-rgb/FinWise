"use client";

import { useState } from "react";

import { calculateCTC } from "@/lib/ctc";

import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";

export default function CTCForm() {
  const [annualCTC, setAnnualCTC] =
    useState(1200000);

  const [pfPercent, setPfPercent] =
    useState(12);

  const [professionalTax, setProfessionalTax] =
    useState(200);

  const result = calculateCTC(
    annualCTC,
    pfPercent,
    professionalTax
  );

  return (
    <div className="space-y-8">

      <SliderInput
        label="Annual CTC"
        value={annualCTC}
        min={100000}
        max={10000000}
        step={50000}
        prefix="₹"
        onChange={setAnnualCTC}
      />

      <SliderInput
        label="PF Contribution"
        value={pfPercent}
        min={0}
        max={20}
        step={1}
        suffix="%"
        onChange={setPfPercent}
      />

      <SliderInput
        label="Professional Tax"
        value={professionalTax}
        min={0}
        max={500}
        step={50}
        prefix="₹"
        onChange={setProfessionalTax}
      />

      <div className="border-t pt-8">

        <h3 className="mb-5 text-2xl font-bold">
          Salary Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Monthly Gross Salary"
            value={`₹${result.monthlyGross.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Monthly PF"
            value={`₹${result.monthlyPF.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Estimated In-Hand Salary"
            value={`₹${result.monthlyInHand.toLocaleString("en-IN")}`}
            highlight
          />

        </div>

      </div>

      <InvestmentPieChart
        invested={result.monthlyInHand}
        returns={result.monthlyPF}
      />

      <GrowthChart
        title="Salary Growth Projection"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise Salary Projection"
        columns={[
          {
            key: "invested",
            label: "PF",
          },
          {
            key: "returns",
            label: "In-Hand",
          },
          {
            key: "total",
            label: "CTC",
          },
        ]}
        data={result.yearlyData}
      />

    </div>
  );
}