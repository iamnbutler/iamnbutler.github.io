import * as React from "react";
import type { SVGProps } from "react";
const SvgBan = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.687 4.434a5 5 0 0 1-6.747-6.747zm2.121-2.121L5.687 3.566a5 5 0 0 1 6.747 6.747"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBan;
