import * as React from "react";
import type { SVGProps } from "react";
const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V2H4v9H2V4H0zm6-7h8v2H6zm8 4H6v2h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNewspaper;
