import * as React from "react";
import type { SVGProps } from "react";
const SvgR = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0v16h3v-6h3.073l3 6h3.354l-3.09-6.18A5 5 0 0 0 10 0zm8 7H5V3h5a2 2 0 1 1 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgR;
