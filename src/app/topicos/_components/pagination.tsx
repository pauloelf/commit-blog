"use client"

import type { Meta } from "@/@types/pagination"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  meta: Meta
  setCurrentPage: (page: number) => void
}

export function Pagination({ meta, setCurrentPage }: PaginationProps) {
  if (!meta) return <p>Erro ao carregar a paginação.</p>

  const { page, pageCount } = meta.pagination
  const pages = Array.from({ length: pageCount }).map((_, i) => i + 1)

  return (
    <ul className="flex justify-end items-center gap-2">
      {pages.map((pageValue) => {
        return (
          <li key={pageValue}>
            <Button
              className={`${pageValue === page ? "bg-primary text-neutral-900" : ""}`}
              onClick={() => setCurrentPage(pageValue)}
              size="md"
              variant="outline"
            >
              {pageValue}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
