import * as React from "react";
import type { SVGProps } from "react";
const SvgShop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1 0 4v1s2 1 4 1 4-1 4-1 2 1 4 1 4-1 4-1V4l-3-3z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 15V7.519C1.817 7.765 2.882 8 4 8c1.303 0 2.533-.32 3.382-.603q.342-.113.618-.222a14 14 0 0 0 .618.222C9.468 7.681 10.698 8 12 8c1.118 0 2.183-.235 3-.481V15H7v-5H4v5zm11-5h-2v3h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShop;
