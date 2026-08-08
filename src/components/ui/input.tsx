import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const fieldClasses =
  "w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-surface-elevated text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-ring focus:border-transparent";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses, className)} {...props} />;
}

export { fieldClasses };
