import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Moon: React.FC<Props> = ({ className, ...props }) => (
  <svg
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
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default Moon;
