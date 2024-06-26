import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudRain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0a4 4 0 0 1 4 4v1a4 4 0 0 1 4 4H0V8a4 4 0 0 1 4-4 4 4 0 0 1 4-4M4 16l1-5H3l-1 5zM8 16l1-5H7l-1 5zM13 11l-1 5h-2l1-5z"
    />
  </svg>
);
export default SvgCloudRain;
