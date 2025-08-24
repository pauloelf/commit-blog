"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { fadeInDown } from "@/lib/motion-variants"
import { CommitLogo } from "../shared/commit-logo"

const links = [
  { id: 1, href: "/", label: "Home" },
  { id: 2, href: "/topicos", label: "Tópicos" },
  { id: 3, href: "/sobre", label: "Sobre" },
  { id: 4, href: "/contato", label: "Contato" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="top-0 z-50 fixed inset-x-0 bg-card/90 backdrop-blur-sm p-4 border-b border-border">
      <div className="max-sm:justify-items-center content-center max-sm:space-y-4 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto container">
        <CommitLogo hiddenText />
        <nav className="self-center">
          <ul className="flex flex-wrap justify-evenly items-center gap-4 **:outline-none **:font-bold **:hover:text-primary **:focus-visible:text-primary **:transition-colors **:duration-300">
            {links.map((link) => (
              <motion.li
                initial="hidden"
                key={link.id}
                variants={fadeInDown}
                whileInView="visible"
              >
                <Link
                  className={`${pathname === link.href ? "text-foreground" : "text-muted"}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
