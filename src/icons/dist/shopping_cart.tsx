import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 1h15v9H4.6l-.42 2H12a2 2 0 1 1-2 2H6a2 2 0 1 1-4 0v-1.354l.983-4.668L2.153 3H0z"
    />
  </svg>
);
export default SvgShoppingCart;
