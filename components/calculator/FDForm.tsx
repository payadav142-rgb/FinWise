"use client";

import { useState } from "react";

import { calculateFD } from "@/lib/fd";

import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";
import DownloadPDFButton from "@/components/common/DownloadPDFButton";

export default function FDForm() {
  const [principal, setPrincipal] =
    useState(100000);

  const [interestRate, setInterestRate] =
    useState(7);

  const [years, setYears] =
    useState(5);

  const result = calculateFD(
    principal,
    interestRate,
    years
  );

  return (
    <div
      id="fd-report"
      className="space-y-8"
    >
      {/* Inputs */}

      <SliderInput
        label="Deposit Amount"
        value={principal}
        min={1000}
        max={10000000}
        step={1000}
        prefix="₹"
        onChange={setPrincipal}
      />

      <SliderInput
        label="Interest Rate"
        value={interestRate}
        min={1}
        max={15}
        step={0.1}
        suffix="%"
        onChange={setInterestRate}
      />

      <SliderInput
        label="Investment Period"
        value={years}
        min={1}
        max={30}
        suffix=" Years"
        onChange={setYears}
      />

      {/* Results */}

      <div className="border-t pt-8">
        <h3 className="mb-5 text-2xl font-bold">
          Investment Summary
        </h3>

        <div className="space-y-4">
          <ResultCard
            label="Principal Amount"
            value={`₹${result.principal.toLocaleString(
              "en-IN"
            )}`}
          />

          <ResultCard
            label="Interest Earned"
            value={`₹${result.interestEarned.toLocaleString(
              "en-IN"
            )}`}
          />

          <ResultCard
            label="Maturity Amount"
            value={`₹${result.maturityAmount.toLocaleString(
              "en-IN"
            )}`}
            highlight
          />
        </div>
      </div>

      {/* Charts */}

      <InvestmentPieChart
        invested={result.principal}
        returns={result.interestEarned}
      />

      <GrowthChart
        title="FD Growth"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise FD Breakdown"
        columns={[
          {
            key: "principal",
            label: "Principal",
          },
          {
            key: "interest",
            label: "Interest",
          },
          {
            key: "total",
            label: "Maturity",
          },
        ]}
        data={result.yearlyData}
      />

      {/* PDF Download */}

      <div className="flex justify-end">
        <DownloadPDFButton
          elementId="fd-report"
          fileName="FD_Report"
        />
      </div>
    </div>
  );
}