"use client";

import { useState } from "react";
import { calculateRD } from "@/lib/rd";
import ResultCard from "./ResultCard";

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
    <div className="space-y-8">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Monthly Deposit (₹)
        </label>

        <input
          type="number"
          value={monthlyDeposit}
          onChange={(e) =>
            setMonthlyDeposit(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Interest Rate (%)
        </label>

        <input
          type="number"
          step="0.1"
          value={interestRate}
          onChange={(e) =>
            setInterestRate(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Investment Period (Years)
        </label>

        <input
          type="number"
          value={years}
          onChange={(e) =>
            setYears(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div className="border-t pt-8">

        <h3 className="mb-5 text-2xl font-bold">
          Investment Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Total Investment"
            value={`₹${result.totalInvestment.toLocaleString("en-IN")}`}
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

    </div>
  );
}