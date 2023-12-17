import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const ArrowRight: React.FC<Props> = ({className, ...props}) => (
  <svg
    aria-hidden="true"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
    // Props that will not be overwritten
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default ArrowRight;
