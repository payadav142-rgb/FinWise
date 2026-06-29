export function calculateEPF(
  monthlySalary: number,
  employeeContribution: number,
  interestRate: number,
  years: number
) {
  const monthlyContribution =
    (monthlySalary * employeeContribution) / 100;

  const annualContribution =
    monthlyContribution * 2 * 12;

  let balance = 0;

  const yearlyData = [];

  for (let year = 1; year <= years; year++) {
    balance =
      (balance + annualContribution) *
      (1 + interestRate / 100);

    yearlyData.push({
      year,
      invested: Math.round(
        annualContribution * year
      ),
      returns: Math.round(
        balance -
          annualContribution * year
      ),
      total: Math.round(balance),
    });
  }

  return {
    totalContribution: Math.round(
      annualContribution * years
    ),
    interestEarned: Math.round(
      balance -
        annualContribution * years
    ),
    maturityAmount: Math.round(balance),
    yearlyData,
  };
}