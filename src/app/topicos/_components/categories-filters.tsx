"use client"

import { motion } from "framer-motion"
import type { Categories } from "@/@types/categories-filters"
import { SkeletonCategoriesFilters } from "@/components/skeletons/categories-filters-skeleton"
import { useCategories } from "@/hooks/useCategories"
import { fadeInUp } from "@/lib/motion-variants"

interface CategoriesFiltersProps {
  currentCategory: string
  setCurrentCategory: (category: string) => void
  setCurrentPage: (currentPage: number) => void
}

export function CategoriesFilters({
  currentCategory,
  setCurrentCategory,
  setCurrentPage,
}: CategoriesFiltersProps) {
  const { data, error, isLoading } = useCategories()

  const handleSelected = (category: Categories) => {
    setCurrentCategory(category.slug)
    setCurrentPage(1)
  }

  if (error) return <p>Erro ao carregar as categorias.</p>
  return (
    <motion.ul
      animate="visible"
      className="*:inline-flex flex flex-wrap justify-center *:items-center gap-3 *:bg-transparent *:data-[active=true]:bg-primary *:hover:bg-primary *:focus-visible:shadow-md *:focus-visible:shadow-primary/50 mt-10 *:px-4 *:py-2 *:border *:border-border *:rounded-lg *:focus-visible:outline-none *:focus-visible:ring-2 *:focus-visible:ring-primary *:font-medium *:data-[active=true]:text-neutral-900 *:hover:text-neutral-900 *:text-foreground *:text-sm *:transition-colors *:duration-300 *:cursor-default *:select-none"
      initial="hidden"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {isLoading ? (
        <SkeletonCategoriesFilters />
      ) : (
        <>
          <li
            aria-label="Categoria: Todos"
            data-active={currentCategory === "todos"}
            onClick={() => setCurrentCategory("todos")}
            onKeyUp={(e) => e.key === "Enter" && setCurrentCategory("todos")}
            tabIndex={0}
          >
            Todos
          </li>
          {data?.map((category: Categories) => (
            <li
              aria-label={`Categoria: ${category.name}`}
              data-active={currentCategory === category.slug}
              key={category.id}
              onClick={() => handleSelected(category)}
              onKeyUp={(e) => e.key === "Enter" && handleSelected(category)}
              tabIndex={0}
            >
              {category.name}
            </li>
          ))}
        </>
      )}
    </motion.ul>
  )
}
