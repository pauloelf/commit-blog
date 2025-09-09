import { motion } from "framer-motion"
import type { CardLongProps } from "@/@types/card-long"
import { fadeIn } from "@/lib/motion-variants"

export function CardLong({ text, title }: CardLongProps) {
  return (
    <motion.article
      className="flex flex-col space-y-2 bg-card shadow p-6 border border-border rounded-lg w-full h-full"
      initial="hidden"
      variants={fadeIn}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <p className="font-medium text-lg">{title}</p>
      <p className="text-muted text-sm">{text}</p>
    </motion.article>
  )
}
