import * as React from "react";
import type { SVGProps } from "react";
const SvgKing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2V0h2v2h2v2H9v2h6v3l-2.25 3.75L14 14v2H2v-2l1.25-1.25L1 9V6h6V4H5V2z"
    />
  </svg>
);
export default SvgKing;
