"use client"

import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "flex items-center gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 font-medium text-sm leading-none peer-disabled:cursor-not-allowed group-data-[disabled=true]:pointer-events-none select-none",
        className,
      )}
      data-slot="label"
      {...props}
    />
  )
}
