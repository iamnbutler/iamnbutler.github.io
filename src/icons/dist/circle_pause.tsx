import * as React from "react";
import type { SVGProps } from "react";
const SvgCirclePause = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M5 5h2v6H5zm4 0h2v6H9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCirclePause;
