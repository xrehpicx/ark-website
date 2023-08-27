import { FC, SVGProps } from "react";

export const ArkLogo: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      className="stroke-accent"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.365}
      d="M28.333 9.333v25.334a6.333 6.333 0 1 0 6.334-6.334H9.333a6.334 6.334 0 1 0 6.334 6.334V9.333a6.334 6.334 0 1 0-6.334 6.334h25.334a6.333 6.333 0 1 0-6.334-6.334Z"
    />
  </svg>
);
