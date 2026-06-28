"use client";

import { useState } from "react";

import { calculateEMI } from "@/lib/emi";

import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";

import InvestmentPieChart from "@/components/charts/InvestmentPieChart";
import GrowthChart from "@/components/charts/GrowthChart";
import BreakdownTable from "@/components/charts/BreakdownTable";
import DownloadPDFButton from "@/components/common/DownloadPDFButton";

export default function EMIForm() {
  const [loanAmount, setLoanAmount] =
    useState(1000000);

  const [interestRate, setInterestRate] =
    useState(9);

  const [years, setYears] =
    useState(20);

  const result = calculateEMI(
    loanAmount,
    interestRate,
    years
  );

  return (
    <div
      id="emi-report"
      className="space-y-8"
    >
      {/* Inputs */}

      <SliderInput
        label="Loan Amount"
        value={loanAmount}
        min={50000}
        max={10000000}
        step={10000}
        prefix="₹"
        onChange={setLoanAmount}
      />

      <SliderInput
        label="Interest Rate"
        value={interestRate}
        min={1}
        max={20}
        step={0.1}
        suffix="%"
        onChange={setInterestRate}
      />

      <SliderInput
        label="Loan Tenure"
        value={years}
        min={1}
        max={30}
        suffix=" Years"
        onChange={setYears}
      />

      {/* Results */}

      <div className="border-t pt-8">
        <h3 className="mb-5 text-2xl font-bold">
          Loan Summary
        </h3>

        <div className="space-y-4">
          <ResultCard
            label="Monthly EMI"
            value={`₹${result.emi.toLocaleString(
              "en-IN"
            )}`}
            highlight
          />

          <ResultCard
            label="Total Interest"
            value={`₹${result.totalInterest.toLocaleString(
              "en-IN"
            )}`}
          />

          <ResultCard
            label="Total Payment"
            value={`₹${result.totalPayment.toLocaleString(
              "en-IN"
            )}`}
          />
        </div>
      </div>

      {/* Charts */}

      <InvestmentPieChart
        invested={loanAmount}
        returns={result.totalInterest}
      />

      <GrowthChart
        title="Loan Repayment Progress"
        data={result.yearlyData}
      />

      <BreakdownTable
        title="Year-wise EMI Breakdown"
        columns={[
          {
            key: "invested",
            label: "Principal Paid",
          },
          {
            key: "returns",
            label: "Interest Paid",
          },
          {
            key: "total",
            label: "Loan Repaid",
          },
        ]}
        data={result.yearlyData}
      />

      {/* PDF Download */}

      <div className="flex justify-end">
        <DownloadPDFButton
          elementId="emi-report"
          fileName="EMI_Report"
        />
      </div>
    </div>
  );
}