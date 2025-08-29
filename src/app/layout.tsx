import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { QueryProvider } from "@/providers/query-provider"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Commit | Projetos, Estudos e Programação",
  description:
    "Commit — um espaço para compartilhar projetos, estudos e ideias sobre programação. Tutoriais, dicas e bastidores do desenvolvimento de software, direto ao ponto.",
  keywords: [
    "commit",
    "programação",
    "desenvolvimento de software",
    "projetos",
    "estudos",
    "tutoriais",
    "dicas de programação",
    "código",
    "dev",
    "tecnologia",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${DMSans.variable} antialiased`}
      >
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
