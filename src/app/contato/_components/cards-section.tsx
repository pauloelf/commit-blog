"use client"

import { Coffee, Heart, MessageCircle } from "lucide-react"
import { CardInfo } from "@/components/shared/card-info"

export function CardsSection() {
  return (
    <section className="px-4 py-16">
      <div className="flex flex-wrap justify-center gap-8">
        <CardInfo
          Icon={MessageCircle}
          text="Tem alguma dúvida sobre programação ou quer compartilhar uma dica legal? Manda mensagem!"
          title="Dúvidas & Dicas"
        />
        <CardInfo
          Icon={Coffee}
          text="Quer só trocar uma ideia sobre tecnologia, carreira ou projetos? Sempre aberto para conversar!"
          title="Papo Descontraído"
        />
        <CardInfo
          Icon={Heart}
          text="Sugestões para o blog, correções ou qualquer feedback são super bem-vindos!"
          title="Feedback"
        />
      </div>
    </section>
  )
}
