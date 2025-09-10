import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | Commit",
  description:
    "Entre em contato para dúvidas, sugestões, parcerias ou feedback sobre projeto. Este é o espaço aberto para conversas técnicas, ideias criativas e conexões que fazem a diferença.",
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
