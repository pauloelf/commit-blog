import { CalendarDays } from "lucide-react"
import { Skeleton } from "../ui/skeleton"

export function SkeletonPostHeader() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="space-y-2">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-1/4 h-12" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-1/4 h-8" />
      </div>
      <div className="flex flex-wrap gap-4">
        <Skeleton className="w-20 h-8" />
        <Skeleton className="w-20 h-8" />
        <Skeleton className="w-20 h-8" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Skeleton className="w-8 h-8" />
          </div>
          <Skeleton className="w-24 h-4" />
        </div>
        <div className="flex items-center gap-1 text-muted text-sm">
          <CalendarDays size={16} />
          <Skeleton className="w-24 h-4" />
        </div>
      </div>
    </div>
  )
}
