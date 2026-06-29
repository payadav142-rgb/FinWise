"use client";

import { useState } from "react";

import { calculateHRA } from "@/lib/hra";

import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";

export default function HRAForm() {
  const [basicSalary, setBasicSalary] =
    useState(50000);

  const [hraReceived, setHraReceived] =
    useState(20000);

  const [rentPaid, setRentPaid] =
    useState(25000);

  const result = calculateHRA(
    basicSalary,
    hraReceived,
    rentPaid
  );

  return (
    <div className="space-y-8">

      <SliderInput
        label="Monthly Basic Salary"
        value={basicSalary}
        min={5000}
        max={300000}
        step={1000}
        prefix="₹"
        onChange={setBasicSalary}
      />

      <SliderInput
        label="Monthly HRA Received"
        value={hraReceived}
        min={1000}
        max={150000}
        step={500}
        prefix="₹"
        onChange={setHraReceived}
      />

      <SliderInput
        label="Monthly Rent Paid"
        value={rentPaid}
        min={1000}
        max={200000}
        step={500}
        prefix="₹"
        onChange={setRentPaid}
      />

      <div className="border-t pt-8">

        <h3 className="mb-5 text-2xl font-bold">
          HRA Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="HRA Exemption"
            value={`₹${result.exemption.toLocaleString("en-IN")}`}
            highlight
          />

          <ResultCard
            label="Taxable HRA"
            value={`₹${result.taxableHRA.toLocaleString("en-IN")}`}
          />

        </div>

      </div>

      <InvestmentPieChart
        invested={result.exemption}
        returns={result.taxableHRA}
      />

      <GrowthChart
        title="HRA Projection"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise HRA Breakdown"
        columns={[
          {
            key: "invested",
            label: "Exemption",
          },
          {
            key: "returns",
            label: "Taxable",
          },
          {
            key: "total",
            label: "HRA",
          },
        ]}
        data={result.yearlyData}
      />

    </div>
  );
}