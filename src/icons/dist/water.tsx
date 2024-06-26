import * as React from "react";
import type { SVGProps } from "react";
const SvgWater = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.727 1.588 4 .818l-.727.77A4.48 4.48 0 0 1 .015 3H0v4.5c1.29 0 2.451-.541 3.273-1.412L4 5.318l.727.77A4.49 4.49 0 0 0 8 7.5c1.29 0 2.451-.541 3.273-1.412l.727-.77.727.77A4.49 4.49 0 0 0 16 7.5V3h-.015a4.49 4.49 0 0 1-3.258-1.412L12 .818l-.727.77A4.49 4.49 0 0 1 8.015 3h-.03a4.48 4.48 0 0 1-3.258-1.412"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 9.5a6.48 6.48 0 0 1-4-1.376A6.48 6.48 0 0 1 8 9.5a6.48 6.48 0 0 1-4-1.376A6.48 6.48 0 0 1 0 9.5V14a6.48 6.48 0 0 0 4-1.376A6.48 6.48 0 0 0 8 14a6.48 6.48 0 0 0 4-1.376A6.48 6.48 0 0 0 16 14zM8 12h-.015.03z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWater;
