export function calculateLumpsum(
  investment: number,
  annualReturn: number,
  years: number
) {
  const maturityAmount =
    investment *
    Math.pow(1 + annualReturn / 100, years);

  const estimatedReturns =
    maturityAmount - investment;

  return {
    investedAmount: Math.round(investment),
    estimatedReturns: Math.round(estimatedReturns),
    maturityAmount: Math.round(maturityAmount),
  };
}