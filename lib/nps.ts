export function calculateNPS(
  monthlyContribution: number,
  annualReturn: number,
  years: number
) {
  const monthlyRate =
    annualReturn / 12 / 100;

  const months = years * 12;

  let corpus = 0;

  const yearlyData = [];

  for (let m = 1; m <= months; m++) {
    corpus =
      (corpus + monthlyContribution) *
      (1 + monthlyRate);

    if (m % 12 === 0) {
      const year = m / 12;

      const invested =
        monthlyContribution * 12 * year;

      yearlyData.push({
        year,
        invested: Math.round(invested),
        returns: Math.round(
          corpus - invested
        ),
        total: Math.round(corpus),
      });
    }
  }

  return {
    totalInvestment: Math.round(
      monthlyContribution * months
    ),
    wealthGained: Math.round(
      corpus -
        monthlyContribution * months
    ),
    maturityAmount: Math.round(corpus),
    yearlyData,
  };
}