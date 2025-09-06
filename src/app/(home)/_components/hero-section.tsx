"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { fadeIn, fadeInUp } from "@/lib/motion-variants"

export function HeroSection() {
  const { replace } = useRouter()

  return (
    <section className="flex justify-center items-center bg-gradient-to-br from-card via-primary/10 to-background pt-16 w-full min-h-screen">
      <div className="space-y-6 sm:space-y-8 mx-auto px-4 text-center container">
        <motion.h1
          animate="visible"
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Código que <span className="text-primary">Transforma</span>
        </motion.h1>
        <motion.p
          animate="visible"
          className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl text-muted text-lg sm:text-xl md:text-2xl leading-relaxed"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          Documentando projetos, tecnologias e aprendizados que moldam minha
          trajetória como dev.
        </motion.p>
        <Button onClick={() => replace("/topicos")} withArrow>
          Ver Tópicos
        </Button>
      </div>
    </section>
  )
}
