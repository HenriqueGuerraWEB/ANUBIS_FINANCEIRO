import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/react-app/lib/utils';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-900 hover:from-amber-500 hover:to-yellow-600 hover:shadow-lg hover:shadow-amber-500/25 dark:from-amber-300 dark:to-yellow-400 dark:hover:from-amber-400 dark:hover:to-yellow-500',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 border border-gray-300 dark:border-zinc-700',
        outline: 'border-2 border-amber-400 text-amber-600 hover:bg-amber-50 dark:border-amber-300 dark:text-amber-300 dark:hover:bg-amber-950/20',
        ghost: 'text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4',
        lg: 'h-14 px-8 py-4 text-base',
        xl: 'h-16 px-12 py-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
