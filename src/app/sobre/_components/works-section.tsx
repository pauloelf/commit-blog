"use client"

import { motion } from "framer-motion"
import { CardLong } from "@/components/shared/card-long"
import { fadeIn } from "@/lib/motion-variants"

export function WorksSection() {
  return (
    <section className="space-y-12 bg-card/40 px-4 py-16">
      <div className="space-y-4 text-center">
        <motion.h2
          className="font-bold text-3xl md:text-4xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Como Funciona
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-muted text-lg leading-6 tracking-wide"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          O blog é bem simples: sempre que aprendo algo interessante ou resolvo
          um problema, eu documento aqui. Pode ser desde uma função JavaScript
          útil até como configurar uma ferramenta nova.
        </motion.p>
      </div>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mx-auto w-full max-w-4xl">
        <CardLong
          text="Prefiro escrever posts diretos ao ponto, sem enrolação. Tempo é precioso!"
          title="Posts Curtos"
        />
        <CardLong
          text="Só escrevo sobre coisas que realmente usei ou problemas que enfrentei no trabalho."
          title="Problemas Reais"
        />
        <CardLong
          text="Não sou expert em nada, então se você encontrar algo errado, me avisa!"
          title="Sem Pretensão"
        />
        <CardLong
          text="Conforme vou evoluindo, o conteúdo também evolui. É uma jornada!"
          title="Sempre Aprendendo"
        />
      </div>
    </section>
  )
}
