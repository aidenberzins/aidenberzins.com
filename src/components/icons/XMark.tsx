import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const XMark: React.FC<Props> = ({className, ...props}) => (
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
    viewBox="0 0 24 24"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export default XMark;
