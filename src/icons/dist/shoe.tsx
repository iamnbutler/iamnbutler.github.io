import * as React from "react";
import type { SVGProps } from "react";
const SvgShoe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.495 5.111 6.64.231 5.36 1.769l1.866 1.556A3.998 3.998 0 0 1 1.535 2H0v8h16V6.28zM0 12h16v2H0z"
    />
  </svg>
);
export default SvgShoe;
