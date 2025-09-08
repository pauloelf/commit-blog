import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Post | Commit",
  description:
    "Leia conteúdos técnicos e criativos sobre desenvolvimento web, projetos pessoais, arquitetura de código e experiências reais com tecnologias modernas como React, Next.js e Tailwind.",
  keywords: [
    "categorias",
    "post",
    "devlogs",
    "projetos",
    "estudos",
    "React",
    "Next.js",
    "Tailwind",
    "API",
  ],
}

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
