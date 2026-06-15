"use client";

import { useState } from "react";
import { calculateCAGR } from "@/lib/cagr";

export default function CAGRForm() {
  const [beginningValue, setBeginningValue] = useState(100000);
  const [endingValue, setEndingValue] = useState(200000);
  const [years, setYears] = useState(5);

  const result = calculateCAGR(
    beginningValue,
    endingValue,
    years
  );

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Initial Investment (₹)
        </label>

        <input
          type="number"
          value={beginningValue}
          onChange={(e) =>
            setBeginningValue(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Final Value (₹)
        </label>

        <input
          type="number"
          value={endingValue}
          onChange={(e) =>
            setEndingValue(Number(e.target.value))
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
        <p className="text-sm text-muted-foreground">
          CAGR
        </p>

        <p className="text-4xl font-bold">
          {result.cagr}%
        </p>
      </div>
    </div>
  );
}