"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, BrainCircuit, Code, Database, ExternalLink, Github, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const projects = {
    dashboards: [
      {
        title: "Dashboard de Vendas",
        description: "Dashboard interativo para análise de vendas com filtros dinâmicos e visualizações avançadas.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Power BI", "DAX", "SQL"],
        link: "#",
        github: "#",
      },
      {
        title: "Monitoramento de KPIs",
        description: "Painel de controle para acompanhamento de indicadores de desempenho em tempo real.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Tableau", "Python", "API"],
        link: "#",
        github: "#",
      },
      {
        title: "Análise de Mercado",
        description:
          "Visualização de tendências de mercado e análise competitiva com dados atualizados automaticamente.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Looker", "BigQuery", "GCP"],
        link: "#",
        github: "#",
      },
    ],
    dataAnalysis: [
      {
        title: "Segmentação de Clientes",
        description: "Análise de clustering para identificação de perfis de clientes e personalização de estratégias.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Python", "Scikit-learn", "Pandas"],
        link: "#",
        github: "#",
      },
      {
        title: "Previsão de Demanda",
        description: "Modelo de séries temporais para previsão de demanda de produtos com alta precisão.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["R", "Prophet", "Tidyverse"],
        link: "#",
        github: "#",
      },
      {
        title: "Análise de Sentimento",
        description: "Processamento de linguagem natural para análise de sentimento em reviews de produtos.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["NLTK", "Transformers", "Python"],
        link: "#",
        github: "#",
      },
    ],
    software: [
      {
        title: "Sistema de Recomendação",
        description: "Aplicação web com sistema de recomendação baseado em comportamento do usuário.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        github: "#",
      },
      {
        title: "API de Análise de Dados",
        description: "API RESTful para processamento e análise de dados em tempo real.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["FastAPI", "PostgreSQL", "Docker"],
        link: "#",
        github: "#",
      },
      {
        title: "Plataforma de Visualização",
        description: "Plataforma web para criação e compartilhamento de visualizações de dados personalizadas.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Next.js", "D3.js", "Supabase"],
        link: "#",
        github: "#",
      },
    ],
    ai: [
      {
        title: "Detecção de Fraudes",
        description: "Sistema de machine learning para detecção de transações fraudulentas em tempo real.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["XGBoost", "Python", "Kafka"],
        link: "#",
        github: "#",
      },
      {
        title: "Chatbot Inteligente",
        description: "Assistente virtual baseado em LLM para atendimento ao cliente com alta precisão.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["GPT", "LangChain", "React"],
        link: "#",
        github: "#",
      },
      {
        title: "Visão Computacional",
        description: "Sistema de reconhecimento de imagens para controle de qualidade em linha de produção.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["PyTorch", "OpenCV", "TensorRT"],
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
              Conheça alguns dos meus trabalhos em diferentes áreas
            </p>
          </div>
        </motion.div>

        <Tabs defaultValue="dashboards" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="dashboards" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboards</span>
            </TabsTrigger>
            <TabsTrigger value="dataAnalysis" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Análise de Dados</span>
            </TabsTrigger>
            <TabsTrigger value="software" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Software</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <BrainCircuit className="h-4 w-4" />
              <span className="hidden sm:inline">IA</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, categoryProjects]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project, index) => (
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
          ))}
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
          <ArrowUpRight className="h-4 w-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between group-hover:text-blue-600" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Ver projeto
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
