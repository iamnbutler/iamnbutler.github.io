import * as React from "react";
import type { SVGProps } from "react";
const SvgSoccer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8c0 2.3-.971 4.374-2.526 5.834l-1.46-2.01 1.482-4.558 2.363-.768Q16 7.228 16 8M10.397 13l1.46 2.01A7.97 7.97 0 0 1 8 16a7.96 7.96 0 0 1-3.857-.99L5.603 13zM0 8c0 2.3.971 4.374 2.526 5.834l1.46-2.01-1.482-4.558-2.363-.768Q0 7.228 0 8M3.122 5.364.758 4.596A8 8 0 0 1 7 .062v2.484zM9 2.546V.062a8 8 0 0 1 6.242 4.534l-2.364.768zM4.473 6.854 8 4.292l3.527 2.562L10.18 11H5.82z"
    />
  </svg>
);
export default SvgSoccer;
