import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      color: {
        outline: 'border hover:bg-fd-accent hover:text-fd-accent-foreground',
        ghost: 'hover:bg-fd-accent hover:text-fd-accent-foreground',
        secondary:
          'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
      },
      size: {
        sm: 'gap-1 p-0.5 text-xs',
        icon: 'p-1.5 [&_svg]:size-5',
      },
    },
  },
);

export const itemVariants = cva(
  'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [&_svg]:size-4',
  {
    variants: {
      active: {
        true: 'bg-fd-primary/10 font-medium text-fd-primary',
        false:
          'hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);
