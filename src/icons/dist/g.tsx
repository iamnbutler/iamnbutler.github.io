import * as React from "react";
import type { SVGProps } from "react";
const SvgG = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.536 4.464a5 5 0 1 0-1.036 7.868V10H9V7h5.5v6.855l-.575.45a8.001 8.001 0 1 1 .732-11.962z"
    />
  </svg>
);
export default SvgG;
