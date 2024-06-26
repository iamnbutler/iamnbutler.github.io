import * as React from "react";
import type { SVGProps } from "react";
const SvgEyedropper = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.379 5.621.999 11v2.586l-.956.957 1.414 1.414.957-.957H5l5.379-5.379zM13.293 9.707l1.414-1.414-1.5-1.5 1.964-1.965a2.829 2.829 0 0 0-4-4L9.208 2.793l-1.5-1.5-1.414 1.414z"
    />
  </svg>
);
export default SvgEyedropper;
