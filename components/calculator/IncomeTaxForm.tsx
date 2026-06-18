"use client";

import { useState } from "react";
import { calculateIncomeTax } from "@/lib/tax";

export default function IncomeTaxForm() {
  const [income, setIncome] =
    useState(1200000);

  const [regime, setRegime] =
    useState<"new" | "old">("new");

  const selectedResult =
    calculateIncomeTax(income, regime);

  const newResult =
    calculateIncomeTax(income, "new");

  const oldResult =
    calculateIncomeTax(income, "old");

  const taxSaved = Math.abs(
    newResult.totalTax -
      oldResult.totalTax
  );

  const betterRegime =
    newResult.totalTax <
    oldResult.totalTax
      ? "New Regime"
      : "Old Regime";

  const effectiveTaxRate =
    income > 0
      ? (
          (selectedResult.totalTax /
            income) *
          100
        ).toFixed(2)
      : "0";

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Annual Income (₹)
        </label>

        <input
          type="number"
          value={income}
          onChange={(e) =>
            setIncome(
              Number(e.target.value)
            )
          }
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Tax Regime
        </label>

        <select
          value={regime}
          onChange={(e) =>
            setRegime(
              e.target.value as
                | "new"
                | "old"
            )
          }
          className="w-full rounded-xl border px-4 py-3"
        >
          <option value="new">
            New Regime
          </option>

          <option value="old">
            Old Regime
          </option>
        </select>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Taxable Income
          </p>

          <p className="text-2xl font-bold">
            ₹
            {selectedResult.taxableIncome.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Income Tax
          </p>

          <p className="text-2xl font-bold">
            ₹
            {selectedResult.tax.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Health & Education Cess
          </p>

          <p className="text-2xl font-bold">
            ₹
            {selectedResult.cess.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Total Tax Payable
          </p>

          <p className="text-3xl font-bold">
            ₹
            {selectedResult.totalTax.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border p-5">
        <h3 className="mb-4 text-xl font-semibold">
          Regime Comparison
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>New Regime Tax</span>

            <span className="font-semibold">
              ₹
              {newResult.totalTax.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Old Regime Tax</span>

            <span className="font-semibold">
              ₹
              {oldResult.totalTax.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Better Option</span>

            <span className="font-semibold">
              {betterRegime}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Tax Saved</span>

            <span className="font-semibold">
              ₹
              {taxSaved.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Effective Tax Rate</span>

            <span className="font-semibold">
              {effectiveTaxRate}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}