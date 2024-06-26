import * as React from "react";
import type { SVGProps } from "react";
const SvgPalette = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8q0 .508-.062 1H8v2l3 3v1.418A8 8 0 1 1 16 8M3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5.171 5.172a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415m7.072 0a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415M5.17 10.828a1 1 0 1 0-1.414 1.415 1 1 0 0 0 1.414-1.415"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPalette;
