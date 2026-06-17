"use client";

import { useState } from "react";
import { calculatePPF } from "@/lib/ppf";

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
    <div className="space-y-6">
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
          className="w-full rounded-xl border px-4 py-3"
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
          ₹
          {result.totalInvestment.toLocaleString(
            "en-IN"
          )}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          Interest Earned
        </p>

        <p className="text-2xl font-bold">
          ₹
          {result.interestEarned.toLocaleString(
            "en-IN"
          )}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          Maturity Amount
        </p>

        <p className="text-3xl font-bold">
          ₹
          {result.maturityAmount.toLocaleString(
            "en-IN"
          )}
        </p>
      </div>
    </div>
  );
}