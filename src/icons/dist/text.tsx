import * as React from "react";
import type { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H1v14h14zM3 3v4h2V5h2v6H5v2h6v-2H9V5h2v2h2V3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgText;
