import { cn } from "@/lib/cn.ts";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const separatorStyles = cva("flex w-full items-center justify-center", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
    variant: {
      default: "bg-c-gray-100",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

interface SidebarSeparatorProps
  extends React.PropsWithChildren,
    VariantProps<typeof separatorStyles> {
  className?: string;
}

export function Separator({
  variant,
  className,
  orientation,
  children,
}: SidebarSeparatorProps) {
  return (
    <div className={cn(separatorStyles({ variant, orientation }), className)}>
      {children && (
        <span
          className={
            "bg-white px-4 text-c-gray-300 font-normal text-sm leading-6"
          }
        >
          {children}
        </span>
      )}
    </div>
  );
}
