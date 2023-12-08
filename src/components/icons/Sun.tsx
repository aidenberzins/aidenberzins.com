import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Sun: React.FC<Props> = ({ className, ...props }) => (
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
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
  </svg>
);

export default Sun;
