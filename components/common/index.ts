export function formatNumber(
  value: number,
  options?: {
    fractionDigits?: number;
  }
) {
  const { fractionDigits = 2 } = options || {};
  return parseFloat(value.toFixed(fractionDigits));
}
