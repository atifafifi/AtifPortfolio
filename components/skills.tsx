"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Server, Wrench } from "lucide-react"
import { SkillProgress } from "./skill-progress"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      {
        name: "React",
        level: 85,
        icon: Code,
        description: "Building interactive user interfaces with React and Next.js",
      },
      {
        name: "TypeScript",
        level: 80,
        icon: Code,
        description: "Writing type-safe code and improving development experience",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: Code,
        description: "Creating responsive and modern designs with utility-first CSS",
      },
      {
        name: "Three.js",
        level: 75,
        icon: Code,
        description: "Developing 3D visualizations and interactive experiences",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: 80,
        icon: Server,
        description: "Building scalable server-side applications",
      },
      {
        name: "Python",
        level: 85,
        icon: Server,
        description: "Developing data processing and automation scripts",
      },
      {
        name: "Java",
        level: 75,
        icon: Server,
        description: "Creating enterprise-level applications",
      },
      {
        name: "PHP",
        level: 80,
        icon: Server,
        description: "Building dynamic web applications",
      },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        level: 85,
        icon: Database,
        description: "Working with NoSQL databases and data modeling",
      },
      {
        name: "MySQL",
        level: 80,
        icon: Database,
        description: "Managing relational databases and complex queries",
      },
      {
        name: "AWS",
        level: 75,
        icon: Database,
        description: "Deploying and managing cloud infrastructure",
      },
      {
        name: "Docker",
        level: 70,
        icon: Database,
        description: "Containerizing applications for consistent deployment",
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        level: 90,
        icon: Wrench,
        description: "Version control and collaborative development",
      },
      {
        name: "Figma",
        level: 85,
        icon: Wrench,
        description: "Designing and prototyping user interfaces",
      },
      {
        name: "VS Code",
        level: 95,
        icon: Wrench,
        description: "Efficient code editing and development workflow",
      },
      {
        name: "Linux",
        level: 80,
        icon: Wrench,
        description: "System administration and command-line operations",
      },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <category.icon className="h-5 w-5 text-indigo-500" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillProgress
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      description={skill.description}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
