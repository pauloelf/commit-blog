import { Skeleton } from "../ui/skeleton"

export function SkeletonCategoriesFilters() {
  const EmptyArray = Array.from({ length: 4 }).map((_, i) => i)
  return (
    <>
      {EmptyArray.map((i) => (
        <Skeleton
          className="inline-flex items-center bg-muted/30! border-none rounded-lg w-14 h-8"
          key={i}
        />
      ))}
    </>
  )
}
