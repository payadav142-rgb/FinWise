export function calculateRD(
  monthlyDeposit: number,
  annualRate: number,
  years: number
) {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  const maturityAmount =
    monthlyDeposit *
    ((Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate);

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