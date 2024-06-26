import * as React from "react";
import type { SVGProps } from "react";
const SvgSpade = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0 1.036 6.964A3.54 3.54 0 0 0 0 9.464v.082a3.454 3.454 0 0 0 5.37 2.874l1.755-1.17L6 15v1h4v-1l-1.125-3.75 1.755 1.17A3.455 3.455 0 0 0 16 9.546v-.082c0-.937-.373-1.836-1.036-2.5z"
    />
  </svg>
);
export default SvgSpade;
