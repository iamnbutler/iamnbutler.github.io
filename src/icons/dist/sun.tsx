import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 3V0h2v3zM9 13v3H7v-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M0 9h3V7H0zM16 7h-3v2h3zM3.757 5.172 1.636 3.05 3.05 1.636l2.122 2.121zM12.243 10.828l2.121 2.122-1.414 1.414-2.122-2.121zM3.05 14.364l2.122-2.121-1.415-1.415-2.121 2.122zM12.95 1.636l-2.122 2.121 1.415 1.415 2.121-2.122z"
    />
  </svg>
);
export default SvgSun;
