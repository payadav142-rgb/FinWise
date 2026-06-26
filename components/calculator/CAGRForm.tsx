"use client";

import { useState } from "react";
import { calculateCAGR } from "@/lib/cagr";
import ResultCard from "./ResultCard";

export default function CAGRForm() {
  const [initialValue, setInitialValue] =
    useState(100000);

  const [finalValue, setFinalValue] =
    useState(180000);

  const [years, setYears] =
    useState(5);

  const result = calculateCAGR(
    initialValue,
    finalValue,
    years
  );

  return (
    <div className="space-y-8">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Initial Investment (₹)
        </label>

        <input
          type="number"
          value={initialValue}
          onChange={(e) =>
            setInitialValue(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Final Value (₹)
        </label>

        <input
          type="number"
          value={finalValue}
          onChange={(e) =>
            setFinalValue(Number(e.target.value))
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
          Growth Summary
        </h3>

        <div className="space-y-4">

          <ResultCard
            label="Initial Investment"
            value={`₹${initialValue.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="Final Value"
            value={`₹${finalValue.toLocaleString("en-IN")}`}
          />

          <ResultCard
            label="CAGR"
            value={`${result.cagr}%`}
            highlight
          />

        </div>

      </div>

    </div>
  );
}