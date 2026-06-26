export function calculateLumpsum(
  investment: number,
  annualReturn: number,
  years: number
) {
  const futureValue =
    investment *
    Math.pow(1 + annualReturn / 100, years);

  const estimatedReturns =
    futureValue - investment;

  return {
    futureValue: Math.round(futureValue),
    estimatedReturns: Math.round(estimatedReturns),
  };
}