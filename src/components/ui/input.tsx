import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex bg-background disabled:opacity-50 shadow-xs px-3 py-1 border border-border rounded-lg outline-none w-full min-w-0 h-9 selection:text-primary placeholder:text-muted md:text-sm text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none",
        "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/50",
        "aria-invalid:border-accent aria-invalid:ring-accent/20",
        className,
      )}
      data-slot="input"
      type={type}
      {...props}
    />
  )
}
