"use client"

import { CalendarDays } from "lucide-react"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"

export function SkeletonCardPost() {
  const EmptyArray = Array.from({ length: 3 }).map((_, i) => i)
  return (
    <article className="group space-y-6 bg-card shadow-sm py-6 border border-border rounded-lg overflow-hidden animate-pulse">
      <div className="bg-muted/10 shadow-lg border-t border-border rounded-t-xl aspect-video overflow-hidden" />

      <div className="space-y-4 px-4">
        <div className="flex items-center gap-1 text-muted text-sm">
          <CalendarDays size={16} />
          <Skeleton className="w-24 h-4" />
        </div>

        <Skeleton className="w-3/4 h-6" />

        <div className="flex flex-col space-y-2 mt-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-5/6 h-4" />

          <ul className="flex flex-wrap gap-2 mt-2">
            {EmptyArray.map((i) => (
              <Skeleton className="rounded-lg w-16 h-5" key={i} />
            ))}
          </ul>

          <Button
            className="opacity-50 pointer-events-none"
            disabled
            size="sm"
            variant="ghost"
          >
            Carregando...
          </Button>
        </div>
      </div>
    </article>
  )
}
