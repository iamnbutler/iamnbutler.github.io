import * as React from "react";
import type { SVGProps } from "react";
const SvgLanguage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 0h2v2h4v2H8.868a8.48 8.48 0 0 1-2.202 4.351c.8.388 1.691.617 2.633.646L10.274 6h2.453l3.25 10h-2.104l-.65-2H9.776l-.65 2H7.024l1.638-5.04A8.45 8.45 0 0 1 5 9.711 8.46 8.46 0 0 1 .5 11H0V9h.5a6.5 6.5 0 0 0 2.834-.649A8.5 8.5 0 0 1 1.752 6h2.27c.278.435.607.834.978 1.19A6.5 6.5 0 0 0 6.826 4H0V2h4zm8.574 12L11.5 8.697 10.427 12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLanguage;
