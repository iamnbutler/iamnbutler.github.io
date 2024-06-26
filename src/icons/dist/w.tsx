import * as React from "react";
import type { SVGProps } from "react";
const SvgW = (props: SVGProps<SVGSVGElement>) => (
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
      d="m.168 0 3.048 16H6.3L8 6.267 9.7 16h3.084l3.048-16h-2.545l-2.005 10.528L9.443 0H6.556L4.718 10.528 2.713 0z"
    />
  </svg>
);
export default SvgW;
