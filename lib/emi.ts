export function calculateEMI(
  loanAmount: number,
  annualRate: number,
  years: number
) {
  // Input Validation
  if (
    loanAmount <= 0 ||
    annualRate <= 0 ||
    years <= 0
  ) {
    return {
      emi: 0,
      totalPayment: 0,
      totalInterest: 0,
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest =
    totalPayment - loanAmount;

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
  };
}