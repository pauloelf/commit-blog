"use client"

import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { fadeIn, fadeInUp } from "@/lib/motion-variants"

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
)

export function TextMeSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{
    status: "success" | "failed" | ""
    message: string
  }>({
    status: "",
    message: "",
  })

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setStatus({ status: "failed", message: "Preencha todos os campos" })
      return null
    }
    if (!emailRegex.test(email)) {
      setStatus({ status: "failed", message: "Email inválido!" })
      return null
    }

    const templateParams = {
      name,
      message,
      email,
    }

    try {
      setIsLoading(true)
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_KEY_ID || "",
      )
      if (response.status !== 200) {
        throw new Error("Falha ao enviar email!")
      }

      setEmail("")
      setName("")
      setMessage("")
      setStatus({ status: "success", message: "Email enviado!" })
    } catch (error) {
      if (error instanceof Error) {
        setStatus({ status: "failed", message: error.message })
      } else {
        setStatus({ status: "failed", message: "Erro desconhecido!" })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="space-y-12 bg-card/40 px-4 py-16">
      <div className="space-y-4 text-center">
        <motion.h2
          className="font-bold text-3xl md:text-4xl leading-tight tracking-tighter"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Manda uma Mensagem
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-muted text-lg"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          Preenche aí embaixo e eu respondo assim que possível!
        </motion.p>
      </div>
      <motion.div
        className="mx-auto max-w-2xl"
        initial="hidden"
        variants={fadeInUp}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <form
          className="space-y-4 sm:space-y-6 bg-card shadow px-4 sm:px-8 py-12 sm:py-16 border border-border rounded-lg"
          onSubmit={sendEmail}
        >
          <div className="gap-4 *:space-y-2 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Seu Nome</Label>
              <Input
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Como você se chama?"
                value={name}
              />
            </div>
            <div>
              <Label htmlFor="email">Seu Email</Label>
              <Input
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                value={email}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conta aí o que você tem em mente..."
              value={message}
            />
            {!isLoading && status.status === "failed" && (
              <p className="text-accent text-sm">{status.message}</p>
            )}
            {!isLoading && status.status === "success" && (
              <p className="text-green-500 text-sm">{status.message}</p>
            )}
          </div>
          <Button
            className="*:flex *:items-center *:gap-4 w-full"
            disabled={isLoading}
            size="md"
          >
            <Mail size={16} />
            Entrar em Contato
          </Button>
        </form>
      </motion.div>
    </section>
  )
}
