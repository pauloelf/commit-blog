"use client"

import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import type { Post } from "@/@types/card-post"
import AuthorIconImage from "@/assets/remy-icon.jpg"
import { SkeletonPostHeader } from "@/components/skeletons/post-header-skeleton"
import { usePost } from "@/hooks/usePost"
import { fadeInDown } from "@/lib/motion-variants"

export function PostHeader() {
  const { slug }: { slug: string } = useParams()
  const { data, isLoading, error } = usePost(slug)

  if (isLoading) return <SkeletonPostHeader />
  if (error) return null

  const post: Post = data.data[0]
  return (
    <motion.header
      animate="visible"
      className="space-y-4 sm:space-y-6"
      initial="hidden"
      variants={fadeInDown}
    >
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
        {post.title}
      </h1>
      <p className="text-muted text-lg sm:text-xl text-pretty leading-relaxed tracking-wide">
        {post.description}
      </p>
      <ul className="flex flex-wrap gap-4">
        {post.tags.split(",").map((tag) => {
          const tagFormatted = tag.slice(1, -1).replaceAll('"', "").trim()
          return (
            <li
              className="inline-block bg-transparent hover:bg-card px-6 py-2 border border-border rounded-lg font-semibold text-xs select-none"
              key={tagFormatted}
            >
              {tagFormatted}
            </li>
          )
        })}
      </ul>
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 object-center overflow-hidden">
            <Image
              alt="Imagem de icon do autor do post"
              src={AuthorIconImage}
            />
          </div>
          <p className="font-medium text-sm">Paulo Sérgio</p>
        </div>
        <span className="flex gap-1 text-muted text-sm">
          <CalendarDays size={16} />
          {new Date(post.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
    </motion.header>
  )
}
