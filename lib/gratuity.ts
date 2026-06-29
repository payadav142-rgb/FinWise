export function calculateGratuity(
  lastDrawnSalary: number,
  yearsOfService: number
) {
  const gratuity =
    (lastDrawnSalary * 15 * yearsOfService) / 26;

  const yearlyData = [];

  for (let year = 1; year <= yearsOfService; year++) {
    const total =
      (lastDrawnSalary * 15 * year) / 26;

    yearlyData.push({
      year,
      invested: Math.round(lastDrawnSalary),
      returns: Math.round(
        total - lastDrawnSalary
      ),
      total: Math.round(total),
    });
  }

  return {
    gratuity: Math.round(gratuity),
    yearlyData,
  };
}