import numeral from "numeral";

export function formatNumber(val, format) {
  return numeral(val).format(format);
}
