import formatDelta from "utils/formatDelta";

type Props = {
  value: number;
  decimals: number;
};
export const Stars = ({ value, decimals }: Props) => {
  return <span className="stars">+{formatDelta(value, decimals)}☆</span>;
};
