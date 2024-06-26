import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6M14 12a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3h12z"
    />
  </svg>
);
export default SvgUser;
