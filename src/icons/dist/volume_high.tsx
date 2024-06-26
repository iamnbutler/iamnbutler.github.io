import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeHigh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 1h2v14H6l-4-4H0V5h2zM14 8a4 4 0 0 0-4-4V2a6 6 0 0 1 0 12v-2a4 4 0 0 0 4-4"
    />
    <path fill="currentColor" d="M12 8a2 2 0 0 1-2 2V6a2 2 0 0 1 2 2" />
  </svg>
);
export default SvgVolumeHigh;
