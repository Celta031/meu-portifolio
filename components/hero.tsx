"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,112,243,0.2),transparent_40%)]
                                            dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,112,243,0.1),transparent_50%)]" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-blue-600">Cientista de Dados</span> &
                <br />
                <span className="text-gray-900 dark:text-gray-100">Desenvolvedor de IA</span>
                
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Transformando dados em insights e construindo soluções inteligentes para problemas complexos.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 ">Ver Projetos</Button>
              <Button className = "text-gray-900 dark:text-gray-100 "variant="outline">Baixar CV</Button>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="ghost" size="icon" className="rounded-full text-gray-900 dark:text-gray-100">
              <a href="https://github.com/Celta031" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span></a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-900 dark:text-gray-100">
              <a href="https://www.linkedin.com/in/wesleyraphaelmartins/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span></a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-900 dark:text-gray-100">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-900 dark:text-gray-100">
              <a href="mailto:email@provedor.com.br" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span></a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative h-[400px] w-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-20 blur-3xl" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-40 blur-xl" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-60 blur-md" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-80" />
              <div className="absolute inset-16 rounded-full bg-background flex items-center justify-center">
                <img
                  src="/foto.jpeg?height=300&width=300"
                  alt="Profile"
                  className="rounded-full h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="#about">
              <ArrowDown className="h-6 w-6 text-gray-900 dark:text-gray-100" />
              <span className="sr-only ">Rolar para baixo</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
