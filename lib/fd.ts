export function calculateFD(
  principal: number,
  annualRate: number,
  years: number
) {
  const n = 4; // Quarterly Compounding

  const maturityAmount =
    principal *
    Math.pow(
      1 + annualRate / (100 * n),
      n * years
    );

  const interestEarned =
    maturityAmount - principal;

  return {
    principal: Math.round(principal),
    interestEarned: Math.round(interestEarned),
    maturityAmount: Math.round(maturityAmount),
  };
}