import numeral from "numeral";

export function formatStarNumber(value: number, decimals: number = 0) {
  const numberFormat =
    decimals === 0 || value < 1000 ? "0" : `0.${"0".repeat(decimals)}`;
  const formattedNumber = numeral(value).format(`${numberFormat}a`);
  return formattedNumber;
}
