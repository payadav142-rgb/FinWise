export function calculateRD(
  monthlyDeposit: number,
  annualRate: number,
  years: number
) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;

  const maturityAmount =
    monthlyDeposit *
    (((Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate) *
      (1 + monthlyRate));

  const totalInvestment =
    monthlyDeposit * months;

  const interestEarned =
    maturityAmount - totalInvestment;

  // Year-wise Breakdown
  const yearlyData: {
    year: number;
    investment: number;
    interest: number;
    total: number;
  }[] = [];

  for (let year = 1; year <= years; year++) {
    const totalMonths = year * 12;

    const totalValue =
      monthlyDeposit *
      (((Math.pow(
        1 + monthlyRate,
        totalMonths
      ) - 1) /
        monthlyRate) *
        (1 + monthlyRate));

    const invested =
      monthlyDeposit * totalMonths;

    yearlyData.push({
      year,
      investment: Math.round(invested),
      interest: Math.round(
        totalValue - invested
      ),
      total: Math.round(totalValue),
    });
  }

  return {
    totalInvestment: Math.round(
      totalInvestment
    ),
    interestEarned: Math.round(
      interestEarned
    ),
    maturityAmount: Math.round(
      maturityAmount
    ),
    yearlyData,
  };
}