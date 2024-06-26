import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 3V0h2a3 3 0 0 1 3 3 3 3 0 0 1 3-3h2v3h3v3H0V3zM1 8h6v7H1zM15 8H9v7h6z"
    />
  </svg>
);
export default SvgGift;
