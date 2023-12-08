import React from 'react';

const defaultStyles = [
  'transition-all duration-500 ease-in-out',
  'font-medium',
  'text-gray-900 hover:text-sky-700 focus-visible:text-sky-700',
  'dark:text-slate-200 dark:hover:text-sky-300 focus-visible:text-sky-300',
].join(' ');

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  children?: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const isInternal = props.href && props.href.startsWith('/');
  return (
    <a
      className={props.className ?? defaultStyles}
      href={props.href}
      rel={isInternal ? props.rel : 'noreferrer'}
      target={isInternal ? props.target : '_blank'}
      {...props}
    >
      {props.label || props.children}
    </a>
  );
};

export default Link;
