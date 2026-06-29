export function calculateHRA(
  basicSalary: number,
  hraReceived: number,
  rentPaid: number
) {
  if (
    basicSalary <= 0 ||
    hraReceived <= 0 ||
    rentPaid <= 0
  ) {
    return {
      exemption: 0,
      taxableHRA: 0,
      yearlyData: [],
    };
  }

  const exemption = Math.min(
    hraReceived,
    rentPaid - basicSalary * 0.1
  );

  const taxableHRA = Math.max(
    hraReceived - Math.max(exemption, 0),
    0
  );

  const yearlyData = [];

  for (let year = 1; year <= 5; year++) {
    yearlyData.push({
      year,
      invested: Math.round(exemption * 12 * year),
      returns: Math.round(taxableHRA * 12 * year),
      total: Math.round(hraReceived * 12 * year),
    });
  }

  return {
    exemption: Math.round(Math.max(exemption, 0)),
    taxableHRA: Math.round(taxableHRA),
    yearlyData,
  };
}