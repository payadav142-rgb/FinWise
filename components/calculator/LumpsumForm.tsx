"use client";

import { useState } from "react";
import { calculateLumpsum } from "@/lib/lumpsum";

export default function LumpsumForm() {
  const [investment, setInvestment] = useState(100000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  const result = calculateLumpsum(
    investment,
    annualReturn,
    years
  );

  return (
    <div className="space-y-6">
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
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Expected Return (%)
        </label>

        <input
          type="number"
          value={annualReturn}
          onChange={(e) =>
            setAnnualReturn(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3"
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
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <div className="mb-3">
          <p className="text-sm text-muted-foreground">
            Invested Amount
          </p>

          <p className="text-2xl font-bold">
            ₹{result.investedAmount.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="mb-3">
          <p className="text-sm text-muted-foreground">
            Estimated Returns
          </p>

          <p className="text-2xl font-bold">
            ₹{result.estimatedReturns.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Maturity Value
          </p>

          <p className="text-3xl font-bold">
            ₹{result.maturityAmount.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
}