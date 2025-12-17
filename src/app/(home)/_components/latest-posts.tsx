"use client"

import { motion } from "framer-motion"
import type { Post } from "@/@types/card-post"
import { CardPost } from "@/components/shared/card-post"
import { SkeletonCardPost } from "@/components/skeletons/card-post-skeleton"
import { usePosts } from "@/hooks/usePosts"
import { fadeIn, fadeInUp } from "@/lib/motion-variants"

export function LatestPosts() {
  const { data, isLoading, error } = usePosts<Post[]>()
  const EmptyArray = Array.from({ length: 6 }).map((_, i) => i)

  if (error) return <p>Erro ao carregar os posts.</p>
  return (
    <section className="mx-auto px-4 py-16 container">
      <div className="space-y-4 text-center">
        <motion.h2
          className="font-bold text-3xl md:text-4xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Posts Recentes
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-muted text-lg"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Descubra os últimos artigos sobre desenvolvimento, arquitetura de
          software e tecnologias emergentes.
        </motion.p>
      </div>
      <motion.div
        className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-12 max-w-6xl"
        initial="hidden"
        variants={fadeInUp}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {!isLoading && data?.data.length === 0 && (
          <p className="col-span-3 text-foreground/70 text-center">
            Nenhum post encontrado.
          </p>
        )}
        {isLoading
          ? EmptyArray.map((i) => {
              return <SkeletonCardPost key={i} />
            })
          : data?.data.map((post: Post) => (
              <CardPost key={post.id} post={post} />
            ))}
      </motion.div>
    </section>
  )
}
