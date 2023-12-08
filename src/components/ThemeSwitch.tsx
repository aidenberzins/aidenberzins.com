import {MoonIcon, SunIcon} from './icons';

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle('dark');

  const isDark = element.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

export default function ThemeSwitch() {
  return (
    <button
      onClick={handleToggleClick}
      className="absolute top-0 flex gap-4 mt-4 right-4 sm:right-8 sm:top-8 md:right-16 md:top-16 lg-top-4 lg:right-0"
    >
      <span className="sr-only">Toggle theme</span>
      <div id="sun" className="hidden dark:block">
        <span className="sr-only">Light Theme</span>
        <SunIcon className="transition-all duration-300 ease-in-out stroke-yellow-400 motion-safe:hover:animate-spin" />
      </div>
      <div id="moon" className="block dark:hidden">
        <span className="sr-only">Dark Theme</span>
        <MoonIcon className="transition-all duration-300 ease-in-out fill-slate-900 motion-safe:hover:animate-wave" />
      </div>
    </button>
  );
}
