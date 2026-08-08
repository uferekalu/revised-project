import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
};

export function Card({ className, elevated = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border backdrop-blur-md transition-all duration-300",
        elevated ? "bg-surface-elevated shadow-md" : "bg-surface-elevated/80",
        "hover:shadow-lg hover:border-brand-500/40",
        className
      )}
      {...props}
    />
  );
}
