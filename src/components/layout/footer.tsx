"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeInUp } from "@/lib/motion-variants"
import { CommitLogo } from "../shared/commit-logo"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="space-y-8 mx-auto *:mx-auto px-4 py-12 *:max-w-6xl container">
        <motion.section
          className="gap-12 grid grid-cols-1 md:grid-cols-2"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <article className="space-y-4 max-w-lg">
            <CommitLogo fade={fadeInUp} />
            <p className="text-md text-muted">
              Blog técnico focado em aprendizado prático, abordando tecnologias
              atuais, padrões de arquitetura e experiências reais do dia a dia
              do desenvolvimento.
            </p>
          </article>
          <article className="space-y-8 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <p className="mb-4 font-bold text-foreground">Links Úteis</p>
              <ul className="space-y-1 **:outline-none **:hover:text-primary **:focus-visible:text-primary **:text-muted **:transition-colors **:duration-300">
                <li>
                  <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link href="/topicos">Tópicos</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 font-bold text-foreground">Redes Sociais</p>
              <ul className="space-y-1 **:outline-none **:hover:text-primary **:focus-visible:text-primary **:text-muted **:transition-colors **:duration-300">
                <li>
                  <Link href="https://github.com/pauloelf" target="_blank">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/paulosergioelf/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/elffsz/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </motion.section>
        <div className="bg-muted/10 rounded-lg w-full h-0.5"></div>
        <motion.p
          className="text-muted text-center"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
        >
          ©{" "}
          <span className="font-secondary">
            {new Date().getFullYear()} Commit.
          </span>{" "}
          Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  )
}
