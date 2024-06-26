import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaf = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C6.477 1 2 5.03 2 10v6h2v-5.414l4.293-4.293 1.414 1.414L6 11.414v2.542c5.053-.452 9-4.29 9-8.956V1z"
    />
  </svg>
);
export default SvgLeaf;
