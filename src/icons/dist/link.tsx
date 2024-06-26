import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.05 1.536a5.243 5.243 0 0 1 7.414 7.414L12.415 11 11 9.586l2.05-2.05A3.243 3.243 0 0 0 8.464 2.95L6.414 5 5 3.586zM7.536 13.05 9.586 11 11 12.414l-2.05 2.05A5.243 5.243 0 0 1 1.536 7.05L3.586 5 5 6.414l-2.05 2.05a3.243 3.243 0 0 0 4.586 4.586"
    />
    <path fill="currentColor" d="m5.707 11.707 6-6-1.414-1.414-6 6z" />
  </svg>
);
export default SvgLink;
