import * as React from "react";
import type { SVGProps } from "react";
const SvgWrench = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3.5 13.058.442a5 5 0 0 0-6.881 5.881L0 12.5 3.5 16l6.177-6.177A5.005 5.005 0 0 0 16 5c0-.734-.158-1.43-.442-2.058L12.5 6H10z"
    />
  </svg>
);
export default SvgWrench;
