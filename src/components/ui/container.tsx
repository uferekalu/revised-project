import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 sm:px-8", className)} {...props} />
  );
}
