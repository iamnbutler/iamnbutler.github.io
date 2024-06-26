import * as React from "react";
import type { SVGProps } from "react";
const SvgFish = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 10-1.121 1.121A3 3 0 0 1 .757 12H0V4h.757a3 3 0 0 1 2.122.879L4 6l3-2V1h2l7 6v2l-7 6H7v-3zm9-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFish;
