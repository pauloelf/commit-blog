"use client"

import { motion } from "framer-motion"
import type { CardInfoProps } from "@/@types/card-info"
import { fadeInUp } from "@/lib/motion-variants"

export function CardInfo({ Icon, text, title }: CardInfoProps) {
  return (
    <motion.article
      className="bg-gradient-to-br from-primary/15 hover:from-primary/25 via-accent/15 hover:via-accent/25 to-primary/15 hover:to-primary/25 shadow p-1 rounded-lg transition-colors duration-300"
      initial="hidden"
      variants={fadeInUp}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <div className="flex flex-col items-center bg-card px-4 py-8 h-full text-center">
        <span className="text-primary">{Icon && <Icon size={36} />}</span>
        <p className="mt-2 mb-8 font-semibold text-xl">{title}</p>
        <p className="max-w-3xs text-muted text-sm">{text}</p>
      </div>
    </motion.article>
  )
}
