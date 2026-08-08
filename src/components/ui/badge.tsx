"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "solid" | "soft" | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  solid: "bg-primary text-primary-foreground",
  soft: "bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20",
  outline: "bg-transparent text-foreground border border-border hover:border-brand-500/50",
};

type BadgeOwnProps = {
  variant?: BadgeVariant;
  active?: boolean;
  interactive?: boolean;
  className?: string;
  children?: ReactNode;
};

export type BadgeProps = BadgeOwnProps & Omit<HTMLMotionProps<"button">, keyof BadgeOwnProps>;

export function Badge({
  className,
  variant = "soft",
  active = false,
  interactive = false,
  children,
  ...props
}: BadgeProps) {
  const classes = cn(
    "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
    active ? variantClasses.solid : variantClasses[variant],
    className
  );

  if (interactive) {
    return (
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className={classes}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return <span className={classes}>{children}</span>;
}
