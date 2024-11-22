import { cn } from "@/lib/cn";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { LoaderCircle } from "lucide-react";

const buttonStyles = cva(
  "inline-flex cursor-pointer items-center justify-center transition-all ease-in",
  {
    variants: {
      variant: {
        default: "duration-80 font-semibold text-white",
      },
      size: {
        default: "min-w-60 px-4 py-3 text-base",
      },
      rounded: {
        default: "rounded-md",
      },
      color: {
        primary:
          "hover:bg-primary-l+4 active:bg-primary-l-4 md:active:bg-primary-l-8 bg-primary",
        black:
          "hover:bg-black-l+4 active:bg-black-l-4 bg-black md:active:bg-black",
      },
    },
    compoundVariants: [
      {
        color: ["primary", "black"],
        className:
          "hover:-translate-y-0.5 active:translate-y-1 md:translate-y-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      rounded: "default",
      size: "default",
      color: "primary",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonStyles> {
  isProcessing?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      className,
      size,
      variant,
      rounded,
      isProcessing,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonStyles({ size, color, rounded, variant }),
          className,
          { "-translate-y-0.5": isProcessing },
          { "bg-primary-l+4": isProcessing && color === "primary" },
        )}
        disabled={isProcessing}
        type={type}
        {...props}
      >
        <span
          className={`duration-120 inline-flex items-center gap-0.5 transition-all ease-out ${
            isProcessing ? "-translate-y-4 opacity-0" : "opacity-100"
          }`}
        >
          {children}
        </span>
        <span
          className={`duration-120 absolute inline-flex items-center gap-3 transition-all ease-out ${
            isProcessing
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <LoaderCircle className="size-6 animate-spin" />
          Processing payment
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
