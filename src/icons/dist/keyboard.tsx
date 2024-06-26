import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 3h3v2H0zM0 11h3v2H0zM5 11h6v2H5zM16 11h-3v2h3zM7 3H5v2h2zM9 3h2v2H9zM16 3h-3v2h3zM0 7h3v2H0zM7 7H5v2h2zM9 7h2v2H9zM16 7h-3v2h3z"
    />
  </svg>
);
export default SvgKeyboard;
