import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex bg-background disabled:opacity-50 shadow-xs px-3 py-2 border aria-invalid:border-accent focus-visible:border-primary border-border rounded-lg outline-none aria-invalid:ring-accent/20 focus-visible:ring-2 focus-visible:ring-primary/50 w-full min-h-16 max-h-60 selection:text-primary placeholder:text-muted md:text-sm text-base transition-[color,box-shadow] field-sizing-content resize-none disabled:cursor-not-allowed",
        className,
      )}
      data-slot="textarea"
      {...props}
    />
  )
}
