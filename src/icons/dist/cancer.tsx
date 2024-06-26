import * as React from "react";
import type { SVGProps } from "react";
const SvgCancer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.11 4.521A6 6 0 0 1 11 2.804l1-1.732A8 8 0 0 0 0 8H0a3.5 3.5 0 1 0 3.11-3.48M3.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12.89 11.479A3.5 3.5 0 1 1 16 7.999h.001A8 8 0 0 1 4 14.93l1-1.733a6 6 0 0 0 7.89-1.717M12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCancer;
