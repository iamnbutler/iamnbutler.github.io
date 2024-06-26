import * as React from "react";
import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1H1v2h2zM3 5H1v2h2zM1 9h2v2H1zM3 13H1v2h2zM15 1H5v2h10zM15 5H5v2h10zM5 9h10v2H5zM15 13H5v2h10z"
    />
  </svg>
);
export default SvgList;
