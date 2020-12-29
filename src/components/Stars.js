import React from "react";
import formatDelta from "../utils/formatDelta";

const Stars = ({ value, decimals }) => {
  return <span className="stars">+{formatDelta(value, decimals)}☆</span>;
};
export default Stars;
