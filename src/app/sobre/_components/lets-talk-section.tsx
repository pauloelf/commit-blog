"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { fadeIn, fadeInUp } from "@/lib/motion-variants"

export function LetsTalkSection() {
  const { replace } = useRouter()
  return (
    <section className="space-y-8 mx-auto px-4 py-16 container">
      <div className="space-y-4 text-center">
        <motion.h2
          className="font-bold text-3xl md:text-4xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Vamos Conversar?
        </motion.h2>
        <motion.p
          className="mx-auto max-w-2xl text-muted text-lg leading-6 tracking-wide"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Se você também é dev júnior ou quer trocar uma ideia sobre código,
          ficarei feliz em conversar!
        </motion.p>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <Button
          className="*:flex *:items-center *:gap-4"
          onClick={() => replace("/contato")}
          size="md"
        >
          <Mail size={16} />
          Entrar em Contato
        </Button>
        <motion.div
          className="flex items-center gap-6 *:p-0.5 *:rounded-sm *:outline-none *:hover:text-primary *:focus-visible:text-primary *:text-muted *:transition-colors *:duration-300"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <Link
            aria-label="GitHub"
            href="https://github.com/pauloelf"
            target="_blank"
          >
            <Github />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/paulosergioelf/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/elffsz/"
            target="_blank"
          >
            <Instagram />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
