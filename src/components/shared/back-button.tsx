import React from "react";

import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/cn.ts";
import { Text } from "@/components/ui/text.tsx";

export function BackButton({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "cursor-pointer relative items-center group inline-flex gap-2.5 ",
        className,
      )}
      {...props}
    >
      <ArrowLeft
        className="sm:absolute -left-6 group-hover:-translate-x-0.5 ease-in duration-120"
        size={18}
      />
      <Text size="lg" leading={10} weight="bold">
        {children}
      </Text>
    </button>
  );
}
