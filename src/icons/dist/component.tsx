import * as React from "react";
import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.707 12.707 8 16l3.293-3.293L8 9.414zM3.293 11.293 6.586 8 3.293 4.707 0 8zM4.707 3.293 8 0l3.293 3.293L8 6.586zM12.707 4.707 9.414 8l3.293 3.293L16 8z"
    />
  </svg>
);
export default SvgComponent;
