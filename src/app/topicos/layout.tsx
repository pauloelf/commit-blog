import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tópicos | Explore conteúdos por categoria",
  description:
    "Explore os conteúdos organizados por categoria e encontre artigos, projetos e devlogs que combinam com o que você está buscando. Uma forma clara e acessível de navegar pelo conhecimento.",
  keywords: [
    "categorias",
    "posts por tema",
    "devlogs",
    "projetos",
    "estudos",
    "React",
    "Next.js",
    "Tailwind",
    "API",
  ],
}

export default function TopicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
