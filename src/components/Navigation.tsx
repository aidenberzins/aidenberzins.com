import {useEffect, useState} from 'react';
import {cva} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';

const navLinkStyles = cva(['flex', 'items-center', 'py-3', 'group group-hover:w-16 group-focus-visible:w-16'], {
  variants: {
    active: {
      true: '',
    },
  },
});

const indicatorStyles = cva(
  [
    'mr-4',
    'h-[2px] w-8 dark:h-px',
    'group-focus-visible:w-16 group-hover:w-16',
    'bg-sky-600 group-hover:bg-sky-800 group-focus-visible:bg-sky-800',
    'dark:bg-slate-600 dark:group-hover:bg-slate-200 dark:group-focus-visible:bg-slate-200',
    'transition-all motion-reduce:transition-none',
  ],
  {
    variants: {
      active: {
        true: 'w-16 bg-sky-800 dark:bg-slate-200',
      },
    },
  }
);

const textStyles = cva(
  [
    'text-xs',
    'font-bold',
    'tracking-widest',
    'uppercase',
    'text-sky-600',
    'group-hover:text-sky-800',
    'group-focus-visible:text-sky-800',
    'dark:text-slate-500',
    'dark:group-hover:text-slate-200',
    'dark:group-focus-visible:text-slate-200',
  ],
  {
    variants: {
      active: {
        true: 'text-sky-800 dark:text-slate-200',
      },
    },
  }
);

const Navigation = () => {
  const sections = ['About', 'Experience', 'Projects'];
  const [activeSection, setActiveSection] = useState(sections[0].toLowerCase());

  useEffect(() => {
    if (window && window.location.hash) {
      return setActiveSection(window.location.hash.replace('#', ''));
    }
    setActiveSection(sections[0].toLowerCase());
  }, []);

  return (
    <nav className="hidden nav lg:block" aria-label="navigation jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section}>
            <a
              className={twMerge(navLinkStyles({active: activeSection === section.toLowerCase()}))}
              href={'#' + section.toLowerCase()}
              onClick={(e) => setActiveSection(section.toLowerCase())}
            >
              <span className={twMerge(indicatorStyles({active: activeSection === section.toLowerCase()}))} />
              <span className={twMerge(textStyles({active: activeSection === section.toLowerCase()}))}>{section}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
