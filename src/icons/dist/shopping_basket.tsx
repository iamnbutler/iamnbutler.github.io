import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBasket = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 6 1.923-4.615-1.846-.77L2.833 6H1v3l2 6h10l2-6V6h-1.833L10.923.615l-1.846.77L11 6z"
    />
  </svg>
);
export default SvgShoppingBasket;
