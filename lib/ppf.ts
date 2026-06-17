export function calculatePPF(
  yearlyInvestment: number,
  annualRate: number,
  years: number
) {
  let maturityAmount = 0;

  for (let i = 0; i < years; i++) {
    maturityAmount =
      (maturityAmount + yearlyInvestment) *
      (1 + annualRate / 100);
  }

  const totalInvestment =
    yearlyInvestment * years;

  const interestEarned =
    maturityAmount - totalInvestment;

  return {
    totalInvestment: Math.round(totalInvestment),
    interestEarned: Math.round(interestEarned),
    maturityAmount: Math.round(maturityAmount),
  };
}