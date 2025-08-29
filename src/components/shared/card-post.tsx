"use client"

import { CalendarDays } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type { Post } from "@/@types/card-post"
import { Button } from "../ui/button"

export function CardPost({ post }: { post: Post }) {
  const { replace } = useRouter()

  if (!post) return null
  return (
    <article
      className="group space-y-6 bg-card shadow-sm hover:shadow-lg hover:shadow-primary/10 py-6 border hover:border-primary/50 border-border rounded-lg overflow-hidden transition-all duration-300"
      key={post.id}
    >
      <div className="shadow-lg border-t border-border rounded-t-xl aspect-video overflow-hidden">
        <Image
          alt={post.images[0].alternativeText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          height={post.images[0].height}
          priority
          src={post.images[0].url}
          width={post.images[0].width}
        />
      </div>
      <div className="space-y-4 px-4">
        <div className="*:flex *:gap-1 *:text-muted *:text-sm">
          <span>
            <CalendarDays size={16} />
            {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-semibold group-hover:text-primary text-xl line-clamp-2 transition-colors duration-300">
          {post.title}
        </h3>
        <div className="flex flex-col space-y-2 mt-2">
          <p className="text-muted">{post.description}</p>
          <ul className="flex flex-wrap gap-2">
            {post.tags.split(",").map((tag) => {
              const tagFormatted = tag.slice(1, -1).replaceAll('"', "").trim()
              return (
                <li
                  className="inline-block bg-primary/10 px-2 py-1 rounded-lg text-primary text-xs"
                  key={tagFormatted}
                >
                  {tagFormatted}
                </li>
              )
            })}
          </ul>
          <Button
            className="group-focus:bg-primary group-hover:bg-primary group-hover:text-neutral-900"
            onClick={() => replace(`/topicos/${post.slug}`)}
            size="sm"
            variant="ghost"
            withArrow
          >
            Ler Mais
          </Button>
        </div>
      </div>
    </article>
  )
}
