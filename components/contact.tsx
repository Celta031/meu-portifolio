"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { AtSign, Github, Linkedin, MapPin, Phone, Send, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch("https://formsubmit.co/ajax/wesleyraphael2003@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })
  
      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei o mais breve possível.",
        })
  
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
        })
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Verifique sua conexão e tente novamente.",
      })
    }
  
    setIsSubmitting(false)
  }
  

  return (
    <section id="contact" className="py-16 md:py-24 bg-background transition-colors">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">Contato</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-gray-900 dark:text-gray-100">
              Vamos conversar sobre seu projeto ou oportunidade
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="http://localhost:3000" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Assunto da mensagem"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Sua mensagem..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Outras formas de entrar em contato comigo.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                    <AtSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">wesleyraphael2003@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium">+55 (31) 98116-6100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium">Minas Gerais, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
                <CardDescription>Conecte-se comigo nas redes sociais.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://www.linkedin.com/in/wesleyraphaelmartins/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://github.com/Celta031" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
