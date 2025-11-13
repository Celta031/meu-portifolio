"use client"

import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-600 to-orange-800" />
            <span className="font-bold text-xl">
              DevOps<span className="text-orange-600">Portfolio</span>
            </span>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button variant="ghost" size="icon" className="rounded-full">
            <a href="https://github.com/Celta031" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
            <a href="https://www.linkedin.com/in/wesleyraphaelmartins/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <a href="mailto:email@provedor.com.br" target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span></a>
            </Button>
          </motion.div>

          <motion.div
            className="text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>© {new Date().getFullYear()} wrmartins. Todos os direitos reservados.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
              <ArrowUp className="h-5 w-5 text-gray-900 dark:text-gray-100" />
              <span className="sr-only">Voltar ao topo</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}