import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Arrow: React.FC<Props> = ({ className, ...props }) => (
  <svg
    aria-hidden="true"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
    // Props that will not be overwritten
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

export default Arrow;
