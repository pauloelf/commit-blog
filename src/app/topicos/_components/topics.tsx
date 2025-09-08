"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import type { Post } from "@/@types/card-post"
import { CardPost } from "@/components/shared/card-post"
import { SkeletonCardPost } from "@/components/skeletons/card-post-skeleton"
import { SkeletonPagination } from "@/components/skeletons/pagination-skeleton"
import { usePosts } from "@/hooks/usePosts"
import { fadeIn, fadeInDown, fadeInUp } from "@/lib/motion-variants"
import { CategoriesFilters, Pagination } from "./"

export function Topics() {
  const [currentCategory, setCurrentCategory] = useState("todos")
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error } = usePosts(currentCategory, currentPage)
  const EmptyArray = Array.from({ length: 6 }).map((_, i) => i)

  if (error) return <p>Erro ao carregar os posts.</p>
  return (
    <section className="mx-auto px-4 pt-30 pb-16 container">
      <div className="space-y-4 text-center">
        <motion.h1
          animate="visible"
          className="font-bold text-4xl sm:text-5xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
        >
          Tópicos
        </motion.h1>
        <motion.p
          animate="visible"
          className="mx-auto mt-4 max-w-2xl text-muted text-lg"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
        >
          Explore nossos artigos organizados por categoria e encontre exatamente
          o que você está procurando.
        </motion.p>
      </div>
      <CategoriesFilters
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        setCurrentPage={setCurrentPage}
      />
      <motion.div
        animate="visible"
        className="mx-auto mt-8 max-w-6xl"
        initial="hidden"
        variants={fadeInUp}
      >
        {isLoading ? (
          <SkeletonPagination />
        ) : (
          <Pagination meta={data?.meta} setCurrentPage={setCurrentPage} />
        )}
      </motion.div>
      <motion.div
        animate="visible"
        className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-12 max-w-6xl"
        initial="hidden"
        variants={fadeInUp}
      >
        <AnimatePresence initial={false} mode="sync">
          {!isLoading && data.data.length === 0 && (
            <p className="col-span-3 text-foreground/70 text-center">
              Nenhum post encontrado.
            </p>
          )}
          {isLoading
            ? EmptyArray.map((i) => {
                return <SkeletonCardPost key={i} />
              })
            : data.data.map((post: Post) => (
                <motion.div
                  animate="visible"
                  exit="hidden"
                  initial="hidden"
                  key={post.id}
                  variants={fadeInDown}
                >
                  <CardPost post={post} />
                </motion.div>
              ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
