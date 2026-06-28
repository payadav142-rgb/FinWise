export function calculateCAGR(
  beginningValue: number,
  endingValue: number,
  years: number
) {
  // Input Validation
  if (
    beginningValue <= 0 ||
    endingValue <= 0 ||
    years <= 0
  ) {
    return {
      cagr: 0,
      yearlyData: [],
    };
  }

  const cagr =
    (Math.pow(
      endingValue / beginningValue,
      1 / years
    ) - 1) * 100;

  // Year-wise Growth
  const yearlyData: {
    year: number;
    invested: number;
    returns: number;
    total: number;
  }[] = [];

  for (let year = 1; year <= years; year++) {
    const total =
      beginningValue *
      Math.pow(
        1 + cagr / 100,
        year
      );

    yearlyData.push({
      year,
      invested: Math.round(
        beginningValue
      ),
      returns: Math.round(
        total - beginningValue
      ),
      total: Math.round(total),
    });
  }

  return {
    cagr: Number(
      cagr.toFixed(2)
    ),
    yearlyData,
  };
}