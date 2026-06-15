"use client";

import { useState } from "react";
import { calculateRD } from "@/lib/rd";

export default function RDForm() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(5);

  const result = calculateRD(
    monthlyDeposit,
    interestRate,
    years
  );

  return (
    <div className="space-y-6">
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
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Interest Rate (%)
        </label>

        <input
          type="number"
          value={interestRate}
          onChange={(e) =>
            setInterestRate(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Tenure (Years)
        </label>

        <input
          type="number"
          value={years}
          onChange={(e) =>
            setYears(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-muted-foreground">
          Total Investment
        </p>

        <p className="text-2xl font-bold">
          ₹{result.totalInvestment.toLocaleString("en-IN")}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          Interest Earned
        </p>

        <p className="text-2xl font-bold">
          ₹{result.interestEarned.toLocaleString("en-IN")}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          Maturity Amount
        </p>

        <p className="text-3xl font-bold">
          ₹{result.maturityAmount.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}