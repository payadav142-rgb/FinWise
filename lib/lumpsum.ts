export function calculateLumpsum(
  investment: number,
  annualReturn: number,
  years: number
) {
  // Input Validation
  if (
    investment <= 0 ||
    annualReturn <= 0 ||
    years <= 0
  ) {
    return {
      futureValue: 0,
      estimatedReturns: 0,
    };
  }

  const futureValue =
    investment *
    Math.pow(
      1 + annualReturn / 100,
      years
    );

  const estimatedReturns =
    futureValue - investment;

  return {
    futureValue: Math.round(futureValue),
    estimatedReturns: Math.round(
      estimatedReturns
    ),
  };
}