import * as React from "react";
import type { SVGProps } from "react";
const SvgCat = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1 7 3.8-5.56A4 4 0 0 1 7.875 0H8v4l4 1 3 5-.812 1.219A4 4 0 0 1 10.859 13H9l-2 3H5zm9 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10 .466v1.972l2 .5V0h-.127A4 4 0 0 0 10 .466"
    />
  </svg>
);
export default SvgCat;
