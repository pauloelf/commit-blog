import { Skeleton } from "../ui/skeleton"

export function SkeletonPostContent() {
  const EmptyArray = Array.from({ length: 4 }).map((_, i) => i)
  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="rounded-lg w-full h-50 sm:h-90 md:h-120 overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
      {EmptyArray.map((i) => (
        <div className="space-y-4" key={i}>
          <Skeleton className="w-65 h-10" />
          <div className="space-y-2">
            <Skeleton className="max-w-prose h-4" />
            <Skeleton className="max-w-prose h-4" />
            <Skeleton className="max-w-prose h-4" />
          </div>
        </div>
      ))}
    </div>
  )
}
