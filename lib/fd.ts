export function calculateFD(
  principal: number,
 annualRate: number,
  years: number
) {
  const n = 4; // Quarterly Compounding

  const maturityAmount =
    principal *
    Math.pow(
      1 + annualRate / (100 * n),
      n * years
    );

  const interestEarned =
    maturityAmount - principal;

  // Year-wise Breakdown
  const yearlyData: {
    year: number;
    principal: number;
    interest: number;
    total: number;
  }[] = [];

  for (let year = 1; year <= years; year++) {
    const totalValue =
      principal *
      Math.pow(
        1 + annualRate / (100 * n),
        n * year
      );

    yearlyData.push({
      year,
      principal: Math.round(principal),
      interest: Math.round(
        totalValue - principal
      ),
      total: Math.round(totalValue),
    });
  }

  return {
    principal: Math.round(principal),
    interestEarned: Math.round(
      interestEarned
    ),
    maturityAmount: Math.round(
      maturityAmount
    ),
    yearlyData,
  };
}