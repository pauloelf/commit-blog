"use client"

import { type MotionProps, motion, useAnimationControls } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { ButtonHTMLAttributes } from "react"
import { arrowEnter, arrowExit, buttonVariants } from "@/lib/motion-variants"
import { cn } from "@/lib/utils"

type Variant = "default" | "outline" | "ghost" | "link"
type Size = "sm" | "md" | "lg"

type ButtonProps = MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
    size?: Size
    withArrow?: boolean
  }

export function Button({
  children,
  className,
  variant = "default",
  size = "lg",
  withArrow = false,
  ...props
}: ButtonProps) {
  const arrowControls = useAnimationControls()

  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-primary/50 disabled:cursor-not-allowed!"

  const variants: Record<Variant, string> = {
    default:
      "bg-primary text-neutral-900 hover:bg-primary/80 focus:bg-primary/80",
    outline:
      "border border-border text-foreground hover:bg-primary hover:text-neutral-900 focus:bg-primary focus:text-neutral-900",
    ghost:
      "bg-transparent text-foreground hover:bg-primary hover:text-neutral-900 focus:bg-primary focus:text-neutral-900",
    link: "text-foreground underline-offset-4 hover:underline hover:text-primary",
  }

  const sizes: Record<Size, string> = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-10 px-6 text-lg",
  }

  return (
    <motion.button
      animate={buttonVariants.animate}
      className={cn(base, variants[variant], sizes[size], className)}
      initial={buttonVariants.initial}
      onBlur={() => arrowControls.start(arrowExit)}
      onFocus={() => arrowControls.start(arrowEnter)}
      onHoverEnd={() => arrowControls.start(arrowExit)}
      onHoverStart={() => arrowControls.start(arrowEnter)}
      whileFocus={buttonVariants.whileFocus}
      whileHover={buttonVariants.whileHover}
      whileTap={buttonVariants.whileTap}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <motion.span animate={arrowControls}>
          <ArrowRight size={16} />
        </motion.span>
      )}
    </motion.button>
  )
}
