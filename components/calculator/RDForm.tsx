"use client";

import { useState } from "react";

import { calculateRD } from "@/lib/rd";

import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";
import DownloadPDFButton from "@/components/common/DownloadPDFButton";

export default function RDForm() {
  const [monthlyDeposit, setMonthlyDeposit] =
    useState(5000);

  const [interestRate, setInterestRate] =
    useState(7);

  const [years, setYears] =
    useState(5);

  const result = calculateRD(
    monthlyDeposit,
    interestRate,
    years
  );

  return (
    <div
      id="rd-report"
      className="space-y-8"
    >
      {/* Inputs */}

      <SliderInput
        label="Monthly Deposit"
        value={monthlyDeposit}
        min={500}
        max={100000}
        step={500}
        prefix="₹"
        onChange={setMonthlyDeposit}
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
            label="Total Investment"
            value={`₹${result.totalInvestment.toLocaleString(
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
        invested={result.totalInvestment}
        returns={result.interestEarned}
      />

      <GrowthChart
        title="RD Growth"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise RD Breakdown"
        columns={[
          {
            key: "investment",
            label: "Investment",
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
          elementId="rd-report"
          fileName="RD_Report"
        />
      </div>
    </div>
  );
}