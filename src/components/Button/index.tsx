import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  buttonType?: 'primary' | 'default';
};

export function Button({
  buttonType = 'default',
  children,
  ...props
}: ButtonProps) {
  const buttonVariants: Record<typeof buttonType, string[]> = {
    primary: ['bg-cyan-500 border text-white'],
    default: ['bg-slate-800 border text-slate-800'],
  };

  return (
    <button
      className={clsx(
        'bg-slate-800 text-white font-bold px-4 py-2 rounded',
        buttonVariants[buttonType]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
