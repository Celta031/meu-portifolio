"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, BrainCircuit, Code, Database, ExternalLink, Github, LineChart, Container, Cloud, GitBranch, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const projects = {
    containers: [
      {
        title: "Cluster Kubernetes para Aplicação Web",
        description: "Deploy de uma aplicação web escalável em um cluster OKE (Oracle Kubernetes Engine) com balanceamento de carga.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Kubernetes", "OKE", "Docker", "Nginx"],
        link: "#",
        github: "#",
      },
      {
        title: "Microserviços com Docker Compose",
        description: "Orquestração de múltiplos serviços (API, Banco de Dados, Cache) utilizando Docker Compose para ambiente de desenvolvimento.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Docker", "Docker Compose", "Python"],
        link: "#",
        github: "#",
      },
      {
        title: "Registro de Imagens Privado",
        description: "Configuração de um registry privado (ex: Harbor) para gerenciamento de imagens Docker de forma segura.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Docker", "Harbor", "Segurança"],
        link: "#",
        github: "#",
      },
    ],
    cloud: [
      {
        title: "Infraestrutura como Código (IaC)",
        description: "Provisionamento de infraestrutura completa (VCN, Instâncias, Storage) na OCI usando Terraform.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Terraform", "OCI", "IaC", "Automação"],
        link: "#",
        github: "#",
      },
      {
        title: "Migração de Servidor On-Premise para Nuvem",
        description: "Planejamento e execução da migração de um servidor de aplicação legado para uma instância VM na Oracle Cloud.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["OCI", "Migração", "Linux", "Rsync"],
        link: "#",
        github: "#",
      },
      {
        title: "Arquitetura Serverless (Functions)",
        description: "Desenvolvimento de uma função serverless na OCI para processamento de arquivos em Object Storage.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Serverless", "OCI Functions", "Python"],
        link: "#",
        github: "#",
      },
    ],
    cicd: [
      {
        title: "Pipeline CI/CD para API Python",
        description: "Criação de um pipeline no GitLab CI para buildar, testar e fazer deploy automático de uma API em um servidor.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["GitLab CI", "CI/CD", "Docker", "SSH"],
        link: "#",
        github: "#",
      },
      {
        title: "Automação de Configuração com Ansible",
        description: "Playbook Ansible para configurar e provisionar servidores web (Nginx, SSL) de forma idempotente.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Ansible", "Nginx", "Automação", "IaC"],
        link: "#",
        github: "#",
      },
      {
        title: "Script de Backup de Banco de Dados",
        description: "Script Bash para automação de backups diários de bancos de dados PostgreSQL e envio para Object Storage.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Bash", "PostgreSQL", "Cron", "Cloud"],
        link: "#",
        github: "#",
      },
    ],
    monitoring: [
      {
        title: "Monitoramento com Prometheus & Grafana",
        description: "Implementação de stack de monitoramento para coletar métricas de servidores e containers.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Prometheus", "Grafana", "Alertmanager"],
        link: "#",
        github: "#",
      },
      {
        title: "Configuração de VPN Site-to-Site",
        description: "Estabelecimento de um túnel VPN seguro entre a infraestrutura on-premise e a nuvem (OCI).",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["VPN", "OpenSwan", "Redes", "OCI"],
        link: "#",
        github: "#",
      },
      {
        title: "Análise de Logs com Stack ELK",
        description: "Centralização e análise de logs de aplicações e servidores utilizando Elasticsearch, Logstash e Kibana.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["ELK", "Logs", "Observabilidade"],
        link: "#",
        github: "#",
      },
    ],
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-gray-900 dark:text-gray-100">
              Conheça alguns dos meus projetos de automação e infraestrutura
            </p>
          </div>
        </motion.div>

        <Tabs defaultValue="containers" className="mt-12">
          {/* CORREÇÃO APLICADA AQUI: 
            - `flex` e `overflow-x-auto` para mobile
            - `md:grid`, `md:grid-cols-4` e `md:overflow-x-hidden` para desktop
          */}
          <TabsList className="flex w-full overflow-x-auto p-1 mb-8 md:grid md:w-full md:grid-cols-4 md:overflow-x-hidden">
            <TabsTrigger value="containers" className="flex-shrink-0 whitespace-nowrap flex items-center gap-2">
              <Container className="h-4 w-4" />
              <span>Containers & K8s</span>
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex-shrink-0 whitespace-nowrap flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              <span>Cloud & IaC</span>
            </TabsTrigger>
            <TabsTrigger value="cicd" className="flex-shrink-0 whitespace-nowrap flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              <span>Automação & CI/CD</span>
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="flex-shrink-0 whitespace-nowrap flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Redes & Monitoramento</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="containers" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.containers.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cloud" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.cloud.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cicd" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.cicd.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="monitoring" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.monitoring.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
    github: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-end gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-white/20 backdrop-blur-sm text-white rounded-full"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-white/20 backdrop-blur-sm text-white rounded-full"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="h-4 w-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between group-hover:text-orange-600" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Ver projeto
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}