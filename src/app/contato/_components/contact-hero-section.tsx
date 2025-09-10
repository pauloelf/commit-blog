"use client"

import { motion } from "framer-motion"
import { fadeIn, fadeInUp } from "@/lib/motion-variants"

export function ContactHeroSection() {
  return (
    <section className="flex justify-center items-center bg-gradient-to-b from-card via-primary/10 to-background w-full min-h-screen">
      <div className="space-y-6 sm:space-y-8 mx-auto px-4 text-center container">
        <motion.h1
          animate="visible"
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Vamos <span className="text-primary">Conversar</span>?
        </motion.h1>
        <motion.p
          animate="visible"
          className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl text-muted text-lg sm:text-xl md:text-2xl leading-relaxed"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          Adoraria trocar uma ideia com você! Seja para tirar dúvidas,
          compartilhar experiências ou só bater um papo sobre código
        </motion.p>
      </div>
    </section>
  )
}
