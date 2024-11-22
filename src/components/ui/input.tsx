import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const inputVariants = cva(
  "flex w-full transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-c-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-md border border-border bg-transparent text-c-gray-300 shadow-input",
      },
      size: {
        default: "text-base py-2.5 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, variant, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ size, variant }),
          { "border-red-500 placeholder:text-red-500": error },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
