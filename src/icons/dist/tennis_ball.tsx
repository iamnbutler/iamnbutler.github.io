import * as React from "react";
import type { SVGProps } from "react";
const SvgTennisBall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.182 13.078A7.97 7.97 0 0 0 16 8a7.97 7.97 0 0 0-1.818-5.078A6.98 6.98 0 0 0 12 8c0 2 .838 3.803 2.182 5.078"
    />
    <path
      fill="currentColor"
      d="M12.728 14.454A8.97 8.97 0 0 1 10 8a8.97 8.97 0 0 1 2.728-6.454A7.96 7.96 0 0 0 8 0a7.96 7.96 0 0 0-4.728 1.546A8.97 8.97 0 0 1 6 8a8.97 8.97 0 0 1-2.728 6.454A7.96 7.96 0 0 0 8 16a7.96 7.96 0 0 0 4.728-1.546"
    />
    <path
      fill="currentColor"
      d="M0 8c0-1.928.682-3.697 1.818-5.078A6.98 6.98 0 0 1 4 8c0 2-.838 3.803-2.182 5.078A7.97 7.97 0 0 1 0 8"
    />
  </svg>
);
export default SvgTennisBall;
