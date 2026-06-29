export function calculateCTC(
  annualCTC: number,
  pfPercent: number,
  professionalTax: number
) {
  if (annualCTC <= 0) {
    return {
      monthlyGross: 0,
      monthlyPF: 0,
      monthlyInHand: 0,
      yearlyData: [],
    };
  }

  const monthlyGross = annualCTC / 12;

  const monthlyPF =
    (monthlyGross * pfPercent) / 100;

  const monthlyInHand =
    monthlyGross -
    monthlyPF -
    professionalTax;

  const yearlyData = [];

  for (let year = 1; year <= 5; year++) {
    yearlyData.push({
      year,
      invested: Math.round(monthlyPF * 12 * year),
      returns: Math.round(
        monthlyInHand * 12 * year
      ),
      total: Math.round(
        annualCTC * year
      ),
    });
  }

  return {
    monthlyGross: Math.round(monthlyGross),
    monthlyPF: Math.round(monthlyPF),
    monthlyInHand: Math.round(monthlyInHand),
    yearlyData,
  };
}