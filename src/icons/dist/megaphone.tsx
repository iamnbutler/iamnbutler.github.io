import * as React from "react";
import type { SVGProps } from "react";
const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 1v1.5L2 6V5H0v6h2v-1l2.113.616a3.5 3.5 0 0 0 6.719 1.96L14 13.5V15h2V1zM6.035 11.177l2.874.838a1.5 1.5 0 0 1-2.874-.838"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMegaphone;
