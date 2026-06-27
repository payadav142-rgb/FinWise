export function calculatePPF(
  yearlyInvestment: number,
  annualRate: number,
  years: number
) {
  let maturityAmount = 0;

  const yearlyData: {
    year: number;
    investment: number;
    interest: number;
    total: number;
  }[] = [];

  for (let year = 1; year <= years; year++) {
    maturityAmount =
      (maturityAmount + yearlyInvestment) *
      (1 + annualRate / 100);

    const totalInvestment =
      yearlyInvestment * year;

    yearlyData.push({
      year,
      investment: Math.round(totalInvestment),
      interest: Math.round(
        maturityAmount - totalInvestment
      ),
      total: Math.round(maturityAmount),
    });
  }

  const totalInvestment =
    yearlyInvestment * years;

  const interestEarned =
    maturityAmount - totalInvestment;

  return {
    totalInvestment: Math.round(totalInvestment),
    interestEarned: Math.round(interestEarned),
    maturityAmount: Math.round(maturityAmount),
    yearlyData,
  };
}