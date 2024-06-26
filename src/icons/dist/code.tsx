import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.01.859-2 14 1.98.282 2-14zM12.5 11.5l-1.414-1.414L13.172 8l-2.086-2.086L12.5 4.5 16 8zM2.828 8l2.086 2.086L3.5 11.5 0 8l3.5-3.5 1.414 1.414z"
    />
  </svg>
);
export default SvgCode;
