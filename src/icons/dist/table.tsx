import * as React from "react";
import type { SVGProps } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 0H2v4h12zM2 6h5v4H2zM2 12h5v4H2zM9 12h5v4H9zM14 6H9v4h5z"
    />
  </svg>
);
export default SvgTable;
