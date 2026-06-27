export function calculateRD(
  monthlyDeposit: number,
  annualRate: number,
  years: number
) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;

  // Monthly compounding with deposit at end of each month
  const maturityAmount =
    monthlyDeposit *
    (((Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate) *
      (1 + monthlyRate));

  const totalInvestment =
    monthlyDeposit * months;

  const interestEarned =
    maturityAmount - totalInvestment;

  return {
    totalInvestment: Math.round(totalInvestment),
    interestEarned: Math.round(interestEarned),
    maturityAmount: Math.round(maturityAmount),
  };
}