"use client";

import { useState } from "react";

import { calculatePPF } from "@/lib/ppf";

import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";
import DownloadPDFButton from "@/components/common/DownloadPDFButton";

export default function PPFForm() {
  const [yearlyInvestment, setYearlyInvestment] =
    useState(150000);

  const [interestRate, setInterestRate] =
    useState(7.1);

  const [years, setYears] =
    useState(15);

  const result = calculatePPF(
    yearlyInvestment,
    interestRate,
    years
  );

  return (
    <div
      id="ppf-report"
      className="space-y-8"
    >
      {/* Inputs */}

      <SliderInput
        label="Annual Investment"
        value={yearlyInvestment}
        min={500}
        max={150000}
        step={500}
        prefix="₹"
        onChange={setYearlyInvestment}
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
        title="PPF Growth"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise PPF Breakdown"
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
          elementId="ppf-report"
          fileName="PPF_Report"
        />
      </div>
    </div>
  );
}