"use client";

import { useState } from "react";
import { calculateIncomeTax } from "@/lib/tax";

export default function IncomeTaxForm() {
  const [income, setIncome] =
    useState(1200000);

  const [regime, setRegime] =
    useState<"new" | "old">("new");

  const result =
    calculateIncomeTax(
      income,
      regime
    );

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
            {result.taxableIncome.toLocaleString(
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
            {result.tax.toLocaleString(
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
            {result.cess.toLocaleString(
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
            {result.totalTax.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}