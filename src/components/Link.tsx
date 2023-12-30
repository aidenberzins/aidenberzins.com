import React from 'react';
import {cva} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';

const baseStyles = cva(['transition-all duration-500 ease-in-out', 'font-medium']);

const defaultStyles = cva([
  'text-gray-900 hover:text-sky-700 focus-visible:text-sky-700 dark:focus-visible:text-sky-300',
  'dark:text-slate-200 dark:hover:text-sky-300 dark:focus-visible:text-sky-300',
]);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  children?: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const isInternal =
    props.href && (props.href.startsWith('/') || props.href.startsWith('#') || props.href.startsWith('./'));
  return (
    <a
      className={props.className ? twMerge([baseStyles(), props.className]) : twMerge([baseStyles(), defaultStyles()])}
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
