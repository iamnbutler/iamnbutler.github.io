import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16h-3l-1.625-2H0V3h2.438L0 0h3zM16 3v9.308L6.813 1H11l2 2z"
    />
  </svg>
);
export default SvgCameraSlash;
