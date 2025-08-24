"use client"

import { motion, type Variants } from "framer-motion"
import { fadeInDown } from "@/lib/motion-variants"

export function CommitLogo({
  hiddenText = false,
  fade = fadeInDown,
}: {
  hiddenText?: boolean
  fade?: Variants
}) {
  return (
    <motion.div
      aria-label="Commit - Logo"
      className="flex items-center gap-2 select-none"
      initial="hidden"
      variants={fade}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8">
        <span className="font-secondary font-bold text-neutral-900 text-lg">
          C
        </span>
      </div>
      <span
        className={`${hiddenText && "max-sm:hidden"} font-secondary font-bold text-foreground text-2xl`}
      >
        Commit
      </span>
    </motion.div>
  )
}
