import * as React from "react";
import type { SVGProps } from "react";
const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8a3 3 0 0 1-1.744 2.725L13.23 16h-2.176l-.857-2H5.802l-.857 2H2.77l.975-2.275A3 3 0 0 1 2 11zm2 0h3v4H4zm8 0H9v4h3zm-3 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrain;
