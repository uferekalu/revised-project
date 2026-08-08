import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { fieldClasses } from "@/components/ui/input";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldClasses, "resize-none", className)} {...props} />;
}
