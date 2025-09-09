"use client"

import { motion } from "framer-motion"
import { fadeIn, fadeInUp } from "@/lib/motion-variants"

export function MyRole() {
  return (
    <section className="px-4 py-16">
      <div className="space-y-4 text-center">
        <motion.h2
          className="font-bold text-3xl md:text-4xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Meu Papel
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-muted text-lg leading-6 tracking-wide"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Sou o único por trás do Commit. Escrevo, codifico, quebro coisas,
          conserto (às vezes), e compartilho tudo isso aqui. É um projeto
          pessoal que faço com carinho nas horas vagas.
        </motion.p>
        <motion.div
          className="bg-card mx-auto p-8 border border-border rounded-lg max-w-2xl"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <p className="text-muted italic leading-6 tracking-wide">
            "Não sou o melhor programador do mundo, nem pretendo ser. Só quero
            compartilhar as pequenas vitórias e aprendizados que vão surgindo no
            caminho. Se isso ajudar mais alguém, já fico feliz!"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
