"use client";

import { useState } from "react";
import { calculateFD } from "@/lib/fd";

export default function FDForm() {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(5);

  const result = calculateFD(
    principal,
    interestRate,
    years
  );

  return (
    <div className="space-y-6">
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
        <div className="mb-3">
          <p className="text-sm text-muted-foreground">
            Principal Amount
          </p>

          <p className="text-2xl font-bold">
            ₹{result.principal.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="mb-3">
          <p className="text-sm text-muted-foreground">
            Interest Earned
          </p>

          <p className="text-2xl font-bold">
            ₹{result.interestEarned.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Maturity Amount
          </p>

          <p className="text-3xl font-bold">
            ₹{result.maturityAmount.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
}