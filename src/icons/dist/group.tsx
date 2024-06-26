import * as React from "react";
import type { SVGProps } from "react";
const SvgGroup = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1H1v2h2zM3 13H1v2h2zM1 9h2v2H1zM3 5H1v2h2zM5 1h2v2H5zM7 13H5v2h2zM9 1h2v2H9zM11 13H9v2h2zM13 1h2v2h-2zM15 13h-2v2h2zM13 9h2v2h-2zM15 5h-2v2h2z"
    />
  </svg>
);
export default SvgGroup;
