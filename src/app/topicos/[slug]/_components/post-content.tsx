"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useParams } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Post } from "@/@types/card-post"
import { SkeletonPostContent } from "@/components/skeletons/post-content-skeleton"
import { usePost } from "@/hooks/usePost"
import { fadeInDown } from "@/lib/motion-variants"

export function PostContent() {
  const { slug }: { slug: string } = useParams()
  const { data, isLoading, error } = usePost(slug)

  if (isLoading) return <SkeletonPostContent />
  if (error) return <p>Erro ao carregar o post.</p>

  const post: Post = data.data[0]
  return (
    <motion.section
      animate="visible"
      initial="hidden"
      transition={{ delay: 0.1 }}
      variants={fadeInDown}
    >
      <div className="rounded-lg w-full h-50 sm:h-90 md:h-120 overflow-hidden">
        <Image
          alt={post.images[0].alternativeText || "Imagem do post"}
          className="w-full h-full object-cover"
          height={post.images[0].height}
          src={post.images[0].url}
          width={post.images[0].width}
        />
      </div>
      <div className="mt-10 max-w-prose markdown">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>
    </motion.section>
  )
}
