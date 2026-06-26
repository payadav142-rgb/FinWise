"use client";

import { useState } from "react";
import { calculateSIP } from "@/lib/sip";
import ResultCard from "./ResultCard";

export default function SIPForm() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  const result = calculateSIP(
    monthlyInvestment,
    annualReturn,
    years
  );

  return (
    <div className="space-y-8">
      {/* Monthly Investment */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Monthly Investment (₹)
        </label>

        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) =>
            setMonthlyInvestment(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Annual Return */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Expected Annual Return (%)
        </label>

        <input
          type="number"
          step="0.1"
          value={annualReturn}
          onChange={(e) =>
            setAnnualReturn(Number(e.target.value))
          }
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Investment Period */}
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
          className="w-full rounded-xl border px-4 py-3 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Result Section */}
      <div className="space-y-4 border-t pt-6">
        <h3 className="text-xl font-semibold">
          Investment Summary
        </h3>

        <ResultCard
          label="Invested Amount"
          value={`₹${result.investedAmount.toLocaleString("en-IN")}`}
        />

        <ResultCard
          label="Estimated Returns"
          value={`₹${result.estimatedReturns.toLocaleString("en-IN")}`}
        />

        <ResultCard
          label="Maturity Value"
          value={`₹${result.maturityAmount.toLocaleString("en-IN")}`}
          highlight={true}
        />
      </div>
    </div>
  );
}