import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassHalfTop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 14h1v2H2v-2h1v-2.414L6.586 8 3 4.414V2H2V0h12v2h-1v2.414L9.414 8 13 11.586zm-8-1.586V14h6v-1.586l-3-3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHourglassHalfTop;
