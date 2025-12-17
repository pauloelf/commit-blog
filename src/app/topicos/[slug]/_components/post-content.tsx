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
  const { data, isLoading, error } = usePost<Post[]>(slug)

  if (isLoading) return <SkeletonPostContent />
  const post: Post | null = data ? data[0] : null

  if (error || !post) return <p>Erro ao carregar o post.</p>
  return (
    <motion.section
      animate="visible"
      initial="hidden"
      transition={{ delay: 0.1 }}
      variants={fadeInDown}
    >
      <div className="rounded-lg w-full h-50 sm:h-90 md:h-120 overflow-hidden">
        <Image
          alt={post.image.alt_text || "Imagem do post"}
          className="w-full h-full object-cover"
          height={768}
          src={post?.image.src}
          width={1366}
        />
      </div>
      <div className="mt-10 max-w-prose markdown">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>
    </motion.section>
  )
}
