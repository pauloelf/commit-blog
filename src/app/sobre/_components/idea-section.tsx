"use client"

import { motion } from "framer-motion"
import { Code, Coffee, Heart } from "lucide-react"
import { CardInfo } from "@/components/shared/card-info"
import { fadeIn } from "@/lib/motion-variants"

export function IdeaSection() {
  return (
    <section className="flex flex-col justify-center items-center space-y-12 mx-auto px-4 py-16 container">
      <div className="space-y-4 text-center">
        <motion.h2
          className="font-bold text-3xl md:text-4xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          A Ideia do Blog
        </motion.h2>
        <motion.p
          className="mx-auto max-w-4xl text-muted text-lg leading-6 tracking-wide"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          O <strong>Commit</strong> nasceu da vontade de documentar e
          compartilhar pequenas descobertas que faço durante minha jornada como
          desenvolvedor. Não é um blog de tutoriais profundos ou conteúdo
          avançado - é mais como um caderno digital onde anoto coisas
          interessantes que aprendo no dia a dia.
          <br />
          <br />
          Sou apenas um dev júnior tentando entender esse mundo gigante da
          programação, e achei que seria legal compartilhar essas pequenas
          vitórias e descobertas com outras pessoas que também estão nessa
          jornada.
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <CardInfo
          Icon={Code}
          text="Compartilho coisas pequenas que aprendo, sem pretensão de ser um expert"
          title="Aprendizado Simples"
        />
        <CardInfo
          Icon={Heart}
          text="Escrevo de forma simples, como se estivesse conversando com um amigo"
          title="Linguagem Acessível"
        />
        <CardInfo
          Icon={Coffee}
          text="Tudo que posto aqui é baseado em problemas reais que enfrentei"
          title="Experiência Real"
        />
      </div>
    </section>
  )
}
