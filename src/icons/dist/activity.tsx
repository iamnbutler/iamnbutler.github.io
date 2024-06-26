import * as React from "react";
import type { SVGProps } from "react";
const SvgActivity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H1v6h2.382l1.5-3h2.236L10 9.764 11.382 7H15z"
    />
    <path
      fill="currentColor"
      d="M15 9h-2.382l-1.5 3H8.882L6 6.236 4.618 9H1v6h14z"
    />
  </svg>
);
export default SvgActivity;
