import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartHalf = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.243 8.243 8 15V3.5l-.783-.98A4.052 4.052 0 0 0 0 5.053v.19c0 1.126.447 2.205 1.243 3"
    />
  </svg>
);
export default SvgHeartHalf;
