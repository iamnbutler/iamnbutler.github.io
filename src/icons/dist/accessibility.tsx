import * as React from "react";
import type { SVGProps } from "react";
const SvgAccessibility = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.25 3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 8H9.419l1.786 5H9.08L8 9.973 6.919 13H4.795l1.786-5H4V6h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAccessibility;
