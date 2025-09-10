"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeIn } from "@/lib/motion-variants"

export function FindMeSection() {
  return (
    <section className="space-y-6 px-4 py-16">
      <div className="space-y-4 text-center">
        <motion.h2
          className="font-bold text-3xl md:text-4xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Ou Me Encontra Por Aí
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-muted text-lg"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Também estou nessas redes sociais se você preferir conversar por lá!
        </motion.p>
      </div>
      <div className="flex flex-wrap *:flex-1 gap-4 mx-auto *:min-w-60 max-w-3xl">
        <Link href="https://github.com/pauloelf" tabIndex={-1} target="_blank">
          <Button
            className="*:flex *:items-center *:gap-4 w-full"
            size="md"
            variant="outline"
          >
            <Github size={24} />
            GitHub
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/paulosergioelf/"
          tabIndex={-1}
          target="_blank"
        >
          <Button
            className="*:flex *:items-center *:gap-4 w-full"
            size="md"
            variant="outline"
          >
            <Linkedin size={24} />
            LinkedIn
          </Button>
        </Link>
        <Link
          href="https://www.instagram.com/elffsz/"
          tabIndex={-1}
          target="_blank"
        >
          <Button
            className="*:flex *:items-center *:gap-4 w-full"
            size="md"
            variant="outline"
          >
            <Instagram size={24} />
            Instagram
          </Button>
        </Link>
      </div>
    </section>
  )
}
