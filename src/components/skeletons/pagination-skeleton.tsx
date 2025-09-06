import { Skeleton } from "../ui/skeleton"

export function SkeletonPagination() {
  const EmptyArray = Array.from({ length: 3 }).map((_, i) => i)
  return (
    <ul className="flex justify-end items-center gap-2">
      {EmptyArray.map((i) => (
        <Skeleton className="rounded-lg w-10 h-10" key={i} />
      ))}
    </ul>
  )
}
