import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SectionBackground = "base" | "surface" | "brand";

const backgroundClasses: Record<SectionBackground, string> = {
  base: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  brand:
    "bg-gradient-to-br from-brand-950 via-neutral-950 to-brand-900 text-white",
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
