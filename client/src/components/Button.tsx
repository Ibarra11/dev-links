import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center h-12 whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-purple-300 text-white  active:bg-brand-purple-200 active:shadow-lg disabled:bg-brand-purple-100 hover:bg-brand-purple-200",
        secondary:
          "bg-transparent border border-brand-purple-300 text-brand-purple-300 hover:bg-brand-purple-100 active:bg-brand-purple-200  disabled:text-brand-purple-200 disabled:border-brand-purple-100",
      },
      size: {
        default: "w-full",
        sm: "w-fit px-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "variant">,
    Required<Pick<VariantProps<typeof buttonVariants>, "variant">> {}

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
