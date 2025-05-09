"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "R", level: 85 },
    { name: "SQL", level: 90 },
    { name: "Machine Learning", level: 88 },
    { name: "Deep Learning", level: 80 },
    { name: "Data Visualization", level: 92 },
    { name: "Big Data", level: 75 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React", level: 82 },
    { name: "Next.js", level: 78 },
  ]

  const tools = [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Tableau",
    "Power BI",
    "Jupyter",
    "Git",
    "Docker",
    "AWS",
    "Azure",
    "Spark",
    "Hadoop",
    "Airflow",
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
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
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
