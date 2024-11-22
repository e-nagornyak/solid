"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const labelVariants = cva("text-xs text-c-gray-300 font-medium leading-4");

const Label = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label"> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = "Label";

export { Label };
