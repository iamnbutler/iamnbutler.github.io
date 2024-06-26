import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 0h8v2h4v2c0 2.456-1.771 4.5-4.106 4.92A4.01 4.01 0 0 1 9 11.874V14h3v2H4v-2h3v-2.126A4.01 4.01 0 0 1 4.106 8.92 5 5 0 0 1 0 4V2h4zm8 6.83V4h2a3 3 0 0 1-2 2.83M4 4H2c0 1.306.835 2.417 2 2.83z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrophy;
