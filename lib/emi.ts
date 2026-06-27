export function calculateEMI(
  loanAmount: number,
  annualRate: number,
  years: number
) {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest =
    totalPayment - loanAmount;

  const yearlyData = [];

  let balance = loanAmount;
  let paidPrincipal = 0;

  for (let year = 1; year <= years; year++) {
    let yearlyInterest = 0;
    let yearlyPrincipal = 0;

    for (let m = 0; m < 12; m++) {
      const interest = balance * monthlyRate;
      const principal = emi - interest;

      balance -= principal;

      yearlyInterest += interest;
      yearlyPrincipal += principal;
    }

    paidPrincipal += yearlyPrincipal;

    yearlyData.push({
      year,
      invested: Math.round(paidPrincipal),
      returns: Math.round(yearlyInterest),
      total: Math.round(
        loanAmount - Math.max(balance, 0)
      ),
    });
  }

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    principal: Math.round(loanAmount),
    yearlyData,
  };
}