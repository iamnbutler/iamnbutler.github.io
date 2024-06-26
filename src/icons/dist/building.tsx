import * as React from "react";
import type { SVGProps } from "react";
const SvgBuilding = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 0H2v16h4v-4h4v4h4zM5 3h2v2H5zm2 4H5v2h2zm2-4h2v2H9zm2 4H9v2h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBuilding;
