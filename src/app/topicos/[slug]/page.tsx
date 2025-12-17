import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Post } from "@/@types/card-post"
import { fetchPost } from "@/lib/api"
import { PostContent, PostHeader } from "./_components"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const post = await fetchPost<Post>(slug)

  return {
    title: `${post?.title || "Post"} | Commit`,
    description:
      post?.description ||
      "Leia conteúdos técnicos e criativos sobre desenvolvimento web, projetos pessoais, arquitetura de código e experiências reais com tecnologias modernas como React, Next.js e Tailwind.",
  }
}

export default function PostPage() {
  return (
    <main className="mx-auto px-4 pt-30 pb-16 min-h-screen container">
      <div className="mx-auto max-w-4xl">
        <Link
          className="flex items-center gap-2 border-transparent border-b hover:border-b-foreground w-max text-muted hover:text-foreground transition-colors duration-300"
          href="/topicos"
        >
          <ArrowLeft size={16} /> Voltar aos Tópicos
        </Link>
      </div>
      <article className="space-y-8 mx-auto py-8 max-w-4xl">
        <PostHeader />
        <PostContent />
      </article>
    </main>
  )
}
