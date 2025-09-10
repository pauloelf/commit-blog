//*    GLOBAL    *//

import type { Variant, Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

//*    BUTTON    *//

export const buttonVariants = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  whileFocus: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  whileTap: {
    scale: 0.95,
  },
}

export const arrowEnter: Variant = {
  x: 6,
  opacity: 1,
  transition: {
    duration: 0.3,
    ease: "easeOut",
    delay: 0.1,
    type: "spring",
  },
}

export const arrowExit: Variant = {
  x: 0,
  opacity: 0.6,
  transition: {
    duration: 0.2,
    ease: "easeIn",
    type: "keyframes",
  },
}
