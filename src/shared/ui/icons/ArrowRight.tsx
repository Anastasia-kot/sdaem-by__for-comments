import * as React from "react";
const SvgArrowRight = ({ stroke = "black", ...props}) => (
  <svg
    width={8}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}

  >
    <path
      d="m1.5 11.803 5-5-5-5"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrowRight;
