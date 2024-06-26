import * as React from "react";
import type { SVGProps } from "react";
const SvgLifeRing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 8c0-1.109.225-2.164.633-3.124L1.88 6.12l1.414-1.414-3-3L1.707.293l3 3 1.414-1.414L4.876.633A8 8 0 0 1 8 0c1.109 0 2.164.225 3.124.633L9.88 1.88l1.414 1.414 3-3 1.414 1.414-3 3 1.414 1.414 1.246-1.245C15.774 5.836 16 6.89 16 8a8 8 0 0 1-.633 3.124L14.12 9.88l-1.414 1.414 3 3-1.414 1.414-3-3-1.414 1.414 1.245 1.246A8 8 0 0 1 8 16a8 8 0 0 1-3.124-.633L6.12 14.12l-1.414-1.414-3 3-1.414-1.414 3-3-1.414-1.414-1.246 1.245A8 8 0 0 1 0 8m8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLifeRing;
