import * as React from "react";
import type { SVGProps } from "react";
const SvgClub = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4q0 .385-.07.75H12a4 4 0 1 1-3.126 6.495L10 15v1H6v-1l1.126-3.755A4 4 0 1 1 4.07 4.75 4 4 0 1 1 12 4"
    />
  </svg>
);
export default SvgClub;
