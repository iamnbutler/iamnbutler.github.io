import * as React from "react";
import type { SVGProps } from "react";
const SvgAperture = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.69 6 3.166 1.626A7.97 7.97 0 0 1 8 0q.566 0 1.11.076zM5.113 9l-3.42-5.923A7.97 7.97 0 0 0 0 8q0 .508.062 1zM4.896 15.376A8.03 8.03 0 0 1 .582 11h6.84zM8 16q-.566 0-1.11-.076L10.31 10l2.525 4.374A7.97 7.97 0 0 1 8 16M16 8a7.97 7.97 0 0 1-1.694 4.923L10.886 7h5.052Q16 7.492 16 8M11.104.624A8.03 8.03 0 0 1 15.419 5H8.577z"
    />
  </svg>
);
export default SvgAperture;
