export function calculateCAGR(
  beginningValue: number,
  endingValue: number,
  years: number
) {
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