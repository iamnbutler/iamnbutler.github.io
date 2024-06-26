import * as React from "react";
import type { SVGProps } from "react";
const SvgQuoteLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.293 1.293 1.414 1.414L3 6.414V7h4v7H1V5.586zM15 7h-4v-.586l3.707-3.707-1.414-1.414L9 5.586V14h6z"
    />
  </svg>
);
export default SvgQuoteLeft;
