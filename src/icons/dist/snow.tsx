import * as React from "react";
import type { SVGProps } from "react";
const SvgSnow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.763 1.786 9 2.804v2.31l1 .577 2-1.155V2.5h2v2.036l1.763 1.018-1 1.732L13 6.268l-2 1.155v1.154l2 1.155 1.763-1.018 1 1.732L14 11.464V13.5h-2v-2.036l-2-1.155-1 .578v2.31l1.763 1.017-1 1.732L8 14.928l-1.763 1.018-1-1.732L7 13.196v-2.31l-1-.577-2 1.155V13.5H2v-2.036L.237 10.446l1-1.732L3 9.732l2-1.155V7.423L3 6.268 1.237 7.286l-1-1.732L2 4.536V2.5h2v2.036L6 5.69l1-.578v-2.31L5.237 1.787l1-1.732L8 1.072 9.763.054zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSnow;
