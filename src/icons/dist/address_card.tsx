import * as React from "react";
import type { SVGProps } from "react";
const SvgAddressCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H0v12h16zM5 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M10 5h4v2h-4zm4 4h-4v2h4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAddressCard;
