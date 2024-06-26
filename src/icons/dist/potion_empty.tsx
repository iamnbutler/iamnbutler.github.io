import * as React from "react";
import type { SVGProps } from "react";
const SvgPotionEmpty = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.707 1.293 12 0l4 4-1.293 1.293 1.25 1.25-1.414 1.414-1-1-1.695 1.695q.151.651.152 1.348a6 6 0 1 1-4.652-5.848l1.695-1.695-1-1L9.457.043zm1.422 4.25L10.457 3.87 7.98 6.35 6.9 6.101A4 4 0 1 0 9.898 9.1l-.247-1.078z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPotionEmpty;
