"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "solid" | "soft" | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  solid: "bg-primary text-primary-foreground",
  soft: "bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20",
  outline: "bg-transparent text-foreground border border-border hover:border-brand-500/50",
};

export type BadgeProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: BadgeVariant;
  active?: boolean;
  interactive?: boolean;
};

export function Badge({
  className,
  variant = "soft",
  active = false,
  interactive = false,
  ...props
}: BadgeProps) {
  const Comp = interactive ? motion.button : motion.span;
  return (
    <Comp
      whileHover={interactive ? { scale: 1.06 } : undefined}
      whileTap={interactive ? { scale: 0.94 } : undefined}
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
        active ? variantClasses.solid : variantClasses[variant],
        className
      )}
      {...(props as HTMLAttributes<HTMLButtonElement>)}
    />
  );
}
