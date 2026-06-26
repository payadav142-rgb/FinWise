"use client";

import { useState } from "react";
import { calculateFD } from "@/lib/fd";
import ResultCard from "./ResultCard";

export default function FDForm() {
  const [principal, setPrincipal] = useState(100000);

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
    <div className="space-y-8">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Deposit Amount (₹)
        </label>

        <input
          type="number"
          value={principal}
          onChange={(e) =>
            setPrincipal(Number(e.target.value))
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
            label="Principal Amount"
            value={`₹${result.principal.toLocaleString("en-IN")}`}
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