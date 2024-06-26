import * as React from "react";
import type { SVGProps } from "react";
const SvgHand = (props: SVGProps<SVGSVGElement>) => (
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
      d="m.04 10.16 3.95 3.95A6.45 6.45 0 0 0 15 9.55V2h-2v4h-2V0H9v6H7V1H5v9.879l-2.84-2.84z"
    />
  </svg>
);
export default SvgHand;
