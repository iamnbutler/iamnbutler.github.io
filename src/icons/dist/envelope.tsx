import * as React from "react";
import type { SVGProps } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M0 5.359V14h16V5.358l-8 5z" />
    <path fill="currentColor" d="M16 3V2H0v1l8 5z" />
  </svg>
);
export default SvgEnvelope;
