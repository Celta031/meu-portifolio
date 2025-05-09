"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, BrainCircuit, Code, Database, LineChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * index },
    }),
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-gray-900 dark:text-gray-100">
              Cientista de dados apaixonado por transformar dados em soluções impactantes
            </p>
          </motion.div>
          <motion.div
            className="mx-auto max-w-[800px] mt-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4">
              Olá! Sou um cientista de dados e desenvolvedor de software especializado em inteligência artificial. Com
              experiência em análise de dados, desenvolvimento de dashboards interativos e implementação de modelos de
              machine learning, busco constantemente aplicar tecnologias inovadoras para resolver problemas complexos.
            </p>
            <p>
              Minha jornada na ciência de dados começou com uma forte base em estatística e programação, evoluindo para
              o desenvolvimento de soluções completas que combinam análise de dados, visualização e implementação de
              algoritmos de IA. Estou sempre em busca de novos desafios e oportunidades para expandir meu conhecimento e
              habilidades.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Database,
                title: "Análise de Dados",
                description: "Transformação e análise de grandes volumes de dados para extrair insights valiosos.",
              },
              {
                icon: LineChart,
                title: "Dashboards",
                description: "Criação de dashboards interativos e visualizações de dados impactantes.",
              },
              {
                icon: BrainCircuit,
                title: "Inteligência Artificial",
                description: "Desenvolvimento e implementação de modelos de machine learning e deep learning.",
              },
              {
                icon: Code,
                title: "Desenvolvimento",
                description: "Construção de aplicações web e soluções de software completas.",
              },
              {
                icon: BookOpen,
                title: "Pesquisa",
                description: "Pesquisa contínua em novas tecnologias e metodologias de ciência de dados.",
              },
              {
                icon: Award,
                title: "Consultoria",
                description: "Consultoria em projetos de transformação digital e implementação de soluções de dados.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
