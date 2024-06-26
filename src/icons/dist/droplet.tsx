import * as React from "react";
import type { SVGProps } from "react";
const SvgDroplet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 0 2.945 6.488A6.2 6.2 0 0 0 2 9.783V10a6 6 0 0 0 12 0v-.217a6.2 6.2 0 0 0-.945-3.295L9 0zm3 10a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDroplet;
