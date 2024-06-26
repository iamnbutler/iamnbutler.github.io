import * as React from "react";
import type { SVGProps } from "react";
const SvgGridMasonry = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 1H1v4h6zM7 7H1v8h6zM9 1h6v8H9zM15 11H9v4h6z"
    />
  </svg>
);
export default SvgGridMasonry;
