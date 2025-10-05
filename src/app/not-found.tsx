"use client"

import { Home, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const { replace } = useRouter()
  return (
    <div className="flex justify-center items-center bg-background px-4 pt-30 pb-16 min-h-screen">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="mb-4 font-bold text-primary text-9xl">404</h1>
          <div className="bg-primary mx-auto rounded-full w-24 h-1"></div>
        </div>

        <h2 className="mb-4 font-bold text-3xl md:text-4xl">
          Página Não Encontrada
        </h2>
        <p className="mx-auto mb-8 max-w-md text-muted text-lg leading-relaxed">
          Ops! A página que você está procurando não existe ou foi movida para
          outro lugar.
        </p>

        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <Button
            className="*:flex *:items-center"
            onClick={() => replace("/")}
          >
            <Home className="mr-2 w-5 h-5" />
            Voltar ao Início
          </Button>
          <Button
            className="*:flex *:items-center"
            onClick={() => replace("/topicos")}
            variant="outline"
          >
            <Search className="mr-2 w-5 h-5" />
            Explorar Tópicos
          </Button>
        </div>

        <div className="mt-16 text-muted">
          <p className="text-sm">
            Ou use o botão voltar do navegador para retornar à página anterior
          </p>
        </div>
      </div>
    </div>
  )
}
