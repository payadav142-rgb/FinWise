"use client";

import { useState } from "react";
import { calculatePPF } from "@/lib/ppf";
import ResultCard from "./ResultCard";

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
    <div className="space-y-8">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Annual Investment (₹)
        </label>

        <input
          type="number"
          value={yearlyInvestment}
          onChange={(e) =>
            setYearlyInvestment(
              Number(e.target.value)
            )
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
            setInterestRate(
              Number(e.target.value)
            )
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