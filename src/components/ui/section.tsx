import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SectionBackground = "base" | "surface" | "brand";

const backgroundClasses: Record<SectionBackground, string> = {
  base: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  brand:
    "bg-gradient-to-br from-brand-50 via-white to-brand-100 text-neutral-900 dark:from-brand-950 dark:via-neutral-950 dark:to-brand-900 dark:text-white",
};

export type SectionProps = HTMLAttributes<HTMLElement> & {
  background?: SectionBackground;
};

export function Section({
  className,
  background = "base",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full py-20 sm:py-24 overflow-hidden transition-colors duration-500",
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
