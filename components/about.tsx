"use client"

import { motion } from "framer-motion"
import { Cloud, Container, Terminal, GitBranch, ShieldCheck, Database } from "lucide-react"

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
              Engenheiro DevOps apaixonado por automação e infraestrutura como código
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
              Olá! Sou um Engenheiro DevOps. 
              Com experiência em administração de servidores, gerenciamento de nuvem (OCI) e automação de pipelines CI/CD,
              busco constantemente aplicar tecnologias inovadoras para otimizar e escalar infraestruturas.
            </p>
            <p>
              Minha jornada começou com suporte de infraestrutura, evoluindo para a administração de ambientes complexos 
              em nuvem e a implementação de práticas DevOps para garantir estabilidade, segurança e eficiência.
            </p>
          </motion.div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 ">
            {[
              {
                icon: Cloud,
                title: "Cloud & Infraestrutura",
                description: "Administração de ambientes em nuvem (OCI, AWS) e gerenciamento de servidores (Linux, Windows).",
              },
              {
                icon: Container,
                title: "Containers & Orquestração",
                description: "Implementação e gerenciamento de soluções com Docker e Kubernetes (OKE).",
              },
              {
                icon: Terminal,
                title: "Automação & IaC",
                description: "Automação com scripts (Bash, Python) e Infraestrutura como Código (Terraform, Ansible).",
              },
              {
                icon: GitBranch,
                title: "CI/CD Pipelines",
                description: "Criação e manutenção de pipelines de integração e entrega contínua (GitLab CI, Jenkins).",
              },
              {
                icon: ShieldCheck,
                title: "Monitoramento & Segurança",
                description: "Ferramentas de monitoramento (Prometheus, Grafana) e práticas de segurança (SSL, VPNs).",
              },
              {
                icon: Database,
                title: "Banco de Dados",
                description: "Administração, manutenção e resolução de problemas em bancos de dados PostgreSQL.",
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
                      <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-900">
                        <item.icon className="h-5 w-5 text-orange-600" />
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