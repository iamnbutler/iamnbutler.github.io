import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficLight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 0H4v2H1v3l3 3H1v3l3 3v2h8v-2l3-3V8h-3l3-3V2h-3zM8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrafficLight;
