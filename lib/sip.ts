export function calculateSIP(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
) {
  const monthlyRate = annualReturn / 12 / 100;
  const months = years * 12;

  const maturityAmount =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate) *
      (1 + monthlyRate));

  const investedAmount =
    monthlyInvestment * months;

  const estimatedReturns =
    maturityAmount - investedAmount;

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    maturityAmount: Math.round(maturityAmount),
  };
}