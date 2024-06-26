import * as React from "react";
import type { SVGProps } from "react";
const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1v3l1.667 1.667L4.2 8H2V6H0v9h6v-3a2 2 0 1 1 4 0v3h6V6h-2v2h-2.2l-.467-2.333L13 4V1h-2v2H9V1H7v2H5V1z"
    />
  </svg>
);
export default SvgCastle;
