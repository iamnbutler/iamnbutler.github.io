import * as React from "react";
import type { SVGProps } from "react";
const SvgHospital = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 1H3v4H0v10h16V5h-3zM7 6v2H5v2h2v2h2v-2h2V8H9V6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHospital;
