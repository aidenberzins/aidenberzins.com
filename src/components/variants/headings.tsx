import {cva} from 'class-variance-authority';

const h1 = cva(['h1'], {variants: {}});
const h2 = cva(['font-bold uppercase tracking-widest lg:sr-only mb-8', 'text-sky-900', 'dark:text-slate-200'], {
  variants: {},
});
const h3 = cva(['h3'], {variants: {}});
const h4 = cva(['h4'], {variants: {}});

const p = cva(['p-0 m-0'], {variants: {}});

export {h1, h2, h3, h4, p};
