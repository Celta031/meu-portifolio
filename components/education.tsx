"use client"

import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Trophy } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      degree: "Ciencia da computação",
      institution: "UniAmérica ",
      period: "2023 - Presente",
      description:
        "Graduação em Ciência da Computação com foco em habilidades técnicas e analíticas, abordando algoritmos, estruturas de dados, IA, redes e desenvolvimento de software, com sólida base em programação e infraestrutura de TI.",
    },
    {
      degree: "Tecnico de informatica para a internet",
      institution: "UTRAMIG",
      period: "2021 - 2022",
      description:
        "Curso técnico focado no desenvolvimento de soluções para web, com aprendizado em lógica de programação, C#, C++, PHP, redes, banco de dados e projetos práticos que reforçaram a resolução de problemas, trabalho em equipe e adaptação tecnológica.",
    },
  ]

  const certifications = [
    {
      name: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      date: "2024",
    },
    {
      name: "Métodos de Machine Learning Bioinspirados",
      issuer: "DIO",
      date: "2025",
    },
    {
      name: "Machine Learning com a BairesDev",
      issuer: "DIO",
      date: "2024",
    },
    {
      name: "Modelagem de Dados para Banco de Dados",
      issuer: "DIO",
      date: "2025",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Formação</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-gray-900 dark:text-gray-100">
              Educação formal e certificações profissionais
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-orange-600" />
              <h3 className="text-2xl font-bold">Educação Formal</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="font-medium text-orange-600">{edu.institution}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.period}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-6 w-6 text-orange-600" />
              <h3 className="text-2xl font-bold">Certificações</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-orange-600" />
                        <CardTitle className="text-base">{cert.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{cert.issuer}</span>
                        <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-0.5 rounded text-xs">
                          {cert.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}