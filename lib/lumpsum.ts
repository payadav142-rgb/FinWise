export function calculateLumpsum(
  investment: number,
  annualReturn: number,
  years: number
) {
  if (
    investment <= 0 ||
    annualReturn <= 0 ||
    years <= 0
  ) {
    return {
      futureValue: 0,
      estimatedReturns: 0,
      yearlyData: [],
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

  const yearlyData = [];

  for (let year = 1; year <= years; year++) {
    const total =
      investment *
      Math.pow(
        1 + annualReturn / 100,
        year
      );

    yearlyData.push({
      year,
      invested: investment,
      returns: Math.round(
        total - investment
      ),
      total: Math.round(total),
    });
  }

  return {
    futureValue: Math.round(futureValue),
    estimatedReturns: Math.round(
      estimatedReturns
    ),
    yearlyData,
  };
}