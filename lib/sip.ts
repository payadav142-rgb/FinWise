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

  // Year-wise Breakdown
  const yearlyData: {
    year: number;
    invested: number;
    returns: number;
    total: number;
  }[] = [];

  for (let year = 1; year <= years; year++) {
    const totalMonths = year * 12;

    const totalValue =
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) /
        monthlyRate) *
        (1 + monthlyRate));

    const totalInvestment =
      monthlyInvestment * totalMonths;

    yearlyData.push({
      year,
      invested: Math.round(totalInvestment),
      returns: Math.round(
        totalValue - totalInvestment
      ),
      total: Math.round(totalValue),
    });
  }

  return {
    investedAmount: Math.round(
      investedAmount
    ),
    estimatedReturns: Math.round(
      estimatedReturns
    ),
    maturityAmount: Math.round(
      maturityAmount
    ),
    yearlyData,
  };
}