import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16h-3l-2.163-2.662a6.405 6.405 0 0 1-7.758-1.643L0 8l3.08-3.695q.105-.127.217-.248L0 0h3zM5.353 6.588A3 3 0 0 0 8.84 10.88z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m16 8-1.772 2.127L7.634 2.01a6.4 6.4 0 0 1 5.287 2.295z"
    />
  </svg>
);
export default SvgEyeSlash;
