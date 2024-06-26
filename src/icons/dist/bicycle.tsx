import * as React from "react";
import type { SVGProps } from "react";
const SvgBicycle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M0 12a3 3 0 0 1 2.626-2.977L5 10.605v3.631A3 3 0 0 1 0 12M11 14.236a3 3 0 1 0 0-4.472z"
    />
    <path
      fill="currentColor"
      d="M8.281 5.014a.086.086 0 0 1 .125.034L9.382 7H13V5h-2.382l-.423-.847a2.086 2.086 0 0 0-3.023-.803l-2.31 1.54a1.934 1.934 0 0 0 0 3.22L7 9.534V13h2V8.465L6.053 6.5z"
    />
  </svg>
);
export default SvgBicycle;
