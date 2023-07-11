import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export default function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...remainingProps
}: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-blue-500 text-white
      [&:not(:disabled)]:hover:bg-blue-600
      [&:not(:disabled)]:active:bg-blue-700
    `,
    secondary: `
      bg-neutral-500 text-white
      [&:not(:disabled)]:hover:bg-neutral-600
      [&:not(:disabled)]:active:bg-neutral-700
    `,
    danger: `
      bg-red-500 text-white
      [&:not(:disabled)]:hover:bg-red-600
      [&:not(:disabled)]:active:bg-red-700
    `,
    success: `
      bg-green-500 text-white
      [&:not(:disabled)]:hover:bg-green-600
      [&:not(:disabled)]:active:bg-green-700
    `,
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 rounded-md text-sm gap-1.5',
    md: 'px-4 py-2.5 rounded-md text-sm gap-2 h-10',
    lg: 'px-6 py-3 rounded-lg text-lg gap-2.5',
  };

  return (
    <button
      type={type}
      className={classNames(
        'inline-flex w-min whitespace-nowrap items-center transition-colors select-none',
        sizeClasses[size],
        variantClasses[variant],
        {
          'cursor-not-allowed opacity-50': remainingProps.disabled
        },
        className
      )}
      {...remainingProps}
    >{children}</button>
  );
}
