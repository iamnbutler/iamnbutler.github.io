import * as React from "react";
import type { SVGProps } from "react";
const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0h12v16h-2l-2-2-2 2-2-2-2 2H2zm3 4h6v2H5zm6 4H5v2h6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReceipt;
