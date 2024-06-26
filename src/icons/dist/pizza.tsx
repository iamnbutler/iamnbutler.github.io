import * as React from "react";
import type { SVGProps } from "react";
const SvgPizza = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1 16-1-1 1.978-4.093q.246.091.522.093a1.5 1.5 0 0 0 .778-2.783l2.095-4.333a13.3 13.3 0 0 1 6.743 6.743l-2.144 1.037a2 2 0 1 0-3.46 1.672zM6.243 2.083a15.3 15.3 0 0 1 7.675 7.674l2.027-.98A17.57 17.57 0 0 0 7.223.056z"
    />
  </svg>
);
export default SvgPizza;
