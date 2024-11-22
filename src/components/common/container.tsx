import React from "react";
import { cn } from "@/lib/cn.ts";

interface ContainerProps extends React.PropsWithChildren {
  minFullScreen?: boolean;
}

export function Container({ children, minFullScreen }: ContainerProps) {
  return (
    <section
      className={cn("container max-sm:p-2 flex flex-col py-4", {
        "min-h-svh": minFullScreen,
      })}
    >
      {children}
    </section>
  );
}
