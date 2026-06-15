"use client";

import { useState } from "react";
import { calculateEMI } from "@/lib/emi";

export default function EMIForm() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = calculateEMI(
    loanAmount,
    interestRate,
    years
  );

  return (
    <div className="space-y-6">
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
          Loan Tenure (Years)
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
            Monthly EMI
          </p>

          <p className="text-2xl font-bold">
            ₹{result.emi.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="mb-3">
          <p className="text-sm text-muted-foreground">
            Total Interest
          </p>

          <p className="text-2xl font-bold">
            ₹{result.totalInterest.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Total Payment
          </p>

          <p className="text-3xl font-bold">
            ₹{result.totalPayment.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
}