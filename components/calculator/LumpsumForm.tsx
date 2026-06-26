"use client";

import { useState } from "react";
import { calculateLumpsum } from "@/lib/lumpsum";
import ResultCard from "./ResultCard";

export default function LumpsumForm() {
  const [investment, setInvestment] =
    useState(100000);

  const [annualReturn, setAnnualReturn] =
    useState(12);

  const [years, setYears] =
    useState(10);

  const result = calculateLumpsum(
    investment,
    annualReturn,
    years
  );

  return (
    <div className="space-y-8">

      <div>
        <label className="mb-2 block text-sm font-medium">
          One-Time Investment (₹)
        </label>

        <input
          type="number"
          value={investment}
          onChange={(e) =>
            setInvestment(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Expected Annual Return (%)
        </label>

        <input
          type="number"
          step="0.1"
          value={annualReturn}
          onChange={(e) =>
            setAnnualReturn(Number(e.target.value))
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
            label="Invested Amount"
            value={`₹${investment.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Estimated Returns"
            value={`₹${result.estimatedReturns.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Future Value"
            value={`₹${result.futureValue.toLocaleString("en-IN")}`}
            highlight
          />

        </div>

      </div>

    </div>
  );
}