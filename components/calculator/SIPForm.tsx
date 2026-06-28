"use client";

import { useState } from "react";

import { calculateSIP } from "@/lib/sip";

import SliderInput from "./SliderInput";
import ResultCard from "./ResultCard";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";

import DownloadPDFButton from "@/components/common/DownloadPDFButton";

export default function SIPForm() {
  const [monthlyInvestment, setMonthlyInvestment] =
    useState(5000);

  const [annualReturn, setAnnualReturn] =
    useState(12);

  const [years, setYears] =
    useState(10);

  const result = calculateSIP(
    monthlyInvestment,
    annualReturn,
    years
  );

  return (
    <div
      id="sip-report"
      className="space-y-8"
    >

      <SliderInput
        label="Monthly Investment"
        value={monthlyInvestment}
        min={500}
        max={100000}
        step={500}
        prefix="₹"
        onChange={setMonthlyInvestment}
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
            value={`₹${result.investedAmount.toLocaleString(
              "en-IN"
            )}`}
          />

          <ResultCard
            label="Estimated Returns"
            value={`₹${result.estimatedReturns.toLocaleString(
              "en-IN"
            )}`}
          />

          <ResultCard
            label="Maturity Value"
            value={`₹${result.maturityAmount.toLocaleString(
              "en-IN"
            )}`}
            highlight
          />

        </div>

      </div>

      <InvestmentPieChart
        invested={result.investedAmount}
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
            label: "Maturity Value",
          },
        ]}
      />

      <div className="flex justify-end">
        <DownloadPDFButton
          elementId="sip-report"
          fileName="SIP_Report"
        />
      </div>

    </div>
  );
}