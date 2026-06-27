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
    };
  }

  const cagr =
    (Math.pow(
      endingValue / beginningValue,
      1 / years
    ) -
      1) *
    100;

  return {
    cagr: Number(cagr.toFixed(2)),
  };
}