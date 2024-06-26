import * as React from "react";
import type { SVGProps } from "react";
const SvgRainbowCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.275 8.71A4 4 0 0 1 15 12v3H1a4 4 0 0 1 4-4h2.126q.107-.415.296-.79a4 4 0 0 1 1.441-1.592A4 4 0 0 1 11 8c.845 0 1.63.262 2.275.71M7.699 6.99c-.561.37-1.056.831-1.464 1.363A6.98 6.98 0 0 0 1 6V4c2.66 0 5.05 1.154 6.699 2.99M1 2c3.49 0 6.6 1.625 8.616 4.16a6 6 0 0 1 2.394-.075A12.99 12.99 0 0 0 1 0z"
    />
  </svg>
);
export default SvgRainbowCloud;
