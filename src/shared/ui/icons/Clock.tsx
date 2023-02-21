import * as React from "react";
const SvgClock = (props) => (
  <svg
    width={15}
    height={15}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 0C3.364 0 0 3.364 0 7.5S3.364 15 7.5 15 15 11.636 15 7.5 11.636 0 7.5 0Zm0 13.36A5.867 5.867 0 0 1 1.64 7.5 5.867 5.867 0 0 1 7.5 1.64c3.232 0 5.86 2.629 5.86 5.86a5.867 5.867 0 0 1-5.86 5.86Z"
      // fill="#fff"
    />
    <path
      d="M8.15 7.51V4.365a.635.635 0 1 0-1.272 0v3.346l.003.03a.632.632 0 0 0 .183.48l2.367 2.366a.635.635 0 1 0 .898-.898L8.15 7.51Z"
      // fill="#fff"
    />
  </svg>
);
export default SvgClock;
