"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const technicalSkills = [
    { name: "Linux/Bash", level: 95 },
    { name: "Docker", level: 90 },
    { name: "Kubernetes (K8s)", level: 80 },
    { name: "OCI (Oracle Cloud)", level: 90 },
    { name: "Terraform", level: 85 },
    { name: "Ansible", level: 80 },
    { name: "CI/CD (GitLab, Jenkins)", level: 88 },
    { name: "Monitoramento (Prometheus)", level: 78 },
    { name: "Redes (VPN, SSL, TCP/IP)", level: 85 },
    { name: "Python (para automação)", level: 82 },
  ]

  const tools = [
    "Nginx",
    "Apache",
    "IIS",
    "PostgreSQL",
    "Git",
    "GitLab CI",
    "Jenkins",
    "Terraform",
    "Ansible",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "Bash",
    "Oracle Cloud (OCI)",
    "VPN",
    "SSL",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-background transition-colors">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">Habilidades</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl ">
              Competências técnicas e ferramentas que utilizo no dia a dia
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Habilidades Técnicas</h3>
              <motion.div
                className="space-y-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div key={index} variants={item} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Ferramentas & Tecnologias</h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}