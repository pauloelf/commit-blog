import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre | Commit",
  description:
    "Conheça mais sobre o propósito do projeto, a trajetória de desenvolvimento e os princípios que guiam cada linha de código. Uma visão transparente sobre quem constrói, por que constrói e como tudo se conecta.",
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
