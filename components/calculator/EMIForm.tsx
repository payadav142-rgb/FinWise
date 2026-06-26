"use client";

import { useState } from "react";
import { calculateEMI } from "@/lib/emi";
import ResultCard from "./ResultCard";

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
    <div className="space-y-8">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Loan Amount (₹)
        </label>

        <input
          type="number"
          value={loanAmount}
          onChange={(e) =>
            setLoanAmount(Number(e.target.value))
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
          Loan Tenure (Years)
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
          Loan Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Monthly EMI"
            value={`₹${result.emi.toLocaleString("en-IN")}`}
            highlight
          />

          <ResultCard
            label="Total Interest"
            value={`₹${result.totalInterest.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Total Payment"
            value={`₹${result.totalPayment.toLocaleString("en-IN")}`}
          />

        </div>

      </div>

    </div>
  );
}