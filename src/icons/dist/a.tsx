import * as React from "react";
import type { SVGProps } from "react";
const SvgA = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.424 0h3.152l5.419 16h-3.167l-1.016-3H5.189l-1.017 3H1.005zm-.22 10h3.591L8 4.7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgA;
