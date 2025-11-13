"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: " Analista de suporte de infraestrutura PLENO",
      company: "TACOM Projetos de Bilhetagem Inteligente ",
      period: "2025 - Presente",
      description:
        "Como Analista de Suporte de Infraestrutura Pleno, desempenho um papel central na garantia da alta disponibilidade, performance e segurança das soluções de bilhetagem inteligente da TACOM.",
    },
    {
      title: "Têcn. de suporte ao usuário de T.I",
      company: "Informinas Informatica.",
      period: "AGO 2022 - AGO 2025",
      description:
        "Atuo como Técnico de Suporte de T.I., garantindo o funcionamento eficiente de sistemas, especialmente ERPs para postos de combustível, prestando suporte técnico a usuários e infraestrutura, com foco em PostgreSQL, servidores Linux e Windows.",
    },
    /* Para adicionar mais experiencias adicionar da mesma forma do que acima (até com a virgula) */
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-background transition-colors">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">Experiência</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Minha trajetória profissional na área de infraestrutura e DevOps
            </p>
          </div>
        </motion.div>

        <div className="mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4`}
              >
                {/* Card Container */}
                <div className={`md:w-1/2 flex justify-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <span className="font-medium text-orange-600">{exp.company}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Period Container */}
                <div className={`md:w-1/2 flex justify-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
                    <div className="flex items-center h-full">
                      <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-md">
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}