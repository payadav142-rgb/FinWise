export function calculateIncomeTax(
  income: number,
  regime: "new" | "old"
) {
  let taxableIncome = income;
  let tax = 0;

  // Standard Deduction
  taxableIncome -= 75000;

  if (taxableIncome < 0) {
    taxableIncome = 0;
  }

  if (regime === "new") {
    if (taxableIncome <= 400000) {
      tax = 0;
    } else if (taxableIncome <= 800000) {
      tax =
        (taxableIncome - 400000) * 0.05;
    } else if (taxableIncome <= 1200000) {
      tax =
        20000 +
        (taxableIncome - 800000) * 0.10;
    } else if (taxableIncome <= 1600000) {
      tax =
        60000 +
        (taxableIncome - 1200000) * 0.15;
    } else if (taxableIncome <= 2000000) {
      tax =
        120000 +
        (taxableIncome - 1600000) * 0.20;
    } else if (taxableIncome <= 2400000) {
      tax =
        200000 +
        (taxableIncome - 2000000) * 0.25;
    } else {
      tax =
        300000 +
        (taxableIncome - 2400000) * 0.30;
    }
  } else {
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax =
        (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax =
        12500 +
        (taxableIncome - 500000) * 0.20;
    } else {
      tax =
        112500 +
        (taxableIncome - 1000000) * 0.30;
    }
  }

  const cess = tax * 0.04;

  const totalTax = tax + cess;

  return {
    taxableIncome: Math.round(
      taxableIncome
    ),
    tax: Math.round(tax),
    cess: Math.round(cess),
    totalTax: Math.round(totalTax),
  };
}