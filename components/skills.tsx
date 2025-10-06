"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Database, Server, Wrench } from "lucide-react";
import { SkillProgress } from "./skill-progress";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      // --- Expert Libraries (90+) ---
      {
        name: "HTML5",
        level: 95,
        icon: Code,
        description:
          "Expert in building semantic, accessible, and well-structured markup for modern web pages.",
      },
      {
        name: "CSS3",
        level: 90,
        icon: Code,
        description:
          "Mastery of modern styling techniques, including Grid, Flexbox, transitions, and responsive design.",
      },
      {
        name: "React",
        level: 90,
        icon: Code,
        description:
          "Expert in building scalable, interactive user interfaces using functional components, Hooks, and advanced state management.",
      },
      {
        name: "Bootstrap",
        level: 90,
        icon: Code,
        description:
          "Proficient in rapid prototyping and full responsive design implementation using the Bootstrap framework.",
      },
      {
        name: "Icon Libraries (Font Awesome & MDI)",
        level: 95,
        icon: Code,
        description:
          "Expertise in integrating and customizing vast icon sets like Font Awesome and Material Design Icons for rich UI elements.",
      },
      // --- Intermediate / Beginner Tools (40-75) ---
      {
        name: "Tailwind CSS",
        level: 75, // Intermediate
        icon: Code,
        description:
          "Intermediate ability in applying utility classes for quick, highly customized styling without writing traditional CSS.",
      },
      {
        name: "TypeScript",
        level: 70, // Intermediate
        icon: Code,
        description:
          "Intermediate knowledge in applying static typing to enhance code quality and improve long-term project maintainability.",
      },
      {
        name: "Next.js",
        level: 65, // Intermediate
        icon: Code,
        description:
          "Working knowledge of full-stack development, including Server-Side Rendering (SSR) and routing for performant applications.",
      },
      {
        name: "shadcn/ui",
        level: 60, // Intermediate
        icon: Code,
        description:
          "Ability to customize and integrate the component library built on top of Tailwind CSS and Radix UI for consistent design.",
      },
      {
        name: "Three.js",
        level: 50, // Beginner/Intermediate
        icon: Code,
        description:
          "Basic experience with creating simple 3D scenes and interactive visuals for the web.",
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
        description:
          "Building scalable **server-side applications** and RESTful APIs using the Express framework.",
      },
      {
        name: "Next.js",
        level: 50,
        icon: Server, // Icon has been added
        description:
          "Developing **server-side rendered** (SSR) and static web applications, leveraging its full-stack capabilities.",
      },
      {
        name: "Python",
        level: 85,
        icon: Server,
        description:
          "Developing robust **data processing**, machine learning models, and automation scripts.",
      },
      {
        name: "Java",
        level: 75,
        icon: Server,
        description:
          "Creating secure, **enterprise-level applications** and microservices using Spring Boot.",
      },
      {
        name: "PHP",
        level: 80,
        icon: Server,
        description:
          "Developing **dynamic web applications** and content management systems (CMS) with Laravel/Symfony.",
      },
      {
        name: "C#",
        level: 50,
        icon: Server,
        description:
          "Implementing **server-side logic** and API endpoints using **ASP.NET Core** and Entity Framework.",
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
      {
        name: "MSSQL",
        level: 70,
        icon: Database,
        description: "Managing SQL Server databases and writing queries",
      },
      {
        name: "SQLLite",
        level: 47,
        icon: Database,
        description: "Managing lightweight databases and writing queries",
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
        description:
          "Proficient **version control** using branching, merging, and collaborative development workflows.",
      },
      {
        name: "Figma",
        level: 85,
        icon: Wrench,
        description:
          "**Designing and prototyping** user interfaces (UI) and user experiences (UX) for web and mobile.",
      },
      {
        name: "VS Code",
        level: 95,
        icon: Wrench,
        description:
          "Mastery of the IDE for efficient **code editing**, debugging, and customized development workflows.",
      },
      {
        name: "Linux",
        level: 80,
        icon: Wrench,
        description:
          "**System administration**, shell scripting, and command-line operations for deployment environments.",
      },
      {
        name: "Cursor Agent/CLI",
        level: 75,
        icon: Wrench,
        description:
          "Utilizing **AI-driven CLI tools** to generate, debug, and refactor code, accelerating development tasks.",
      },
      {
        name: "AI-Assisted Workflow",
        level: 85,
        icon: Wrench,
        description:
          "Integrating tools like **GitHub Copilot, Gemini, and GPT** for faster documentation, boilerplate generation, and complex problem-solving.",
      },
      {
        name: "n8n (Workflow Automation)",
        level: 40, // Beginner Level
        icon: Wrench,
        description:
          "Basic ability to **create and deploy simple workflows** for integrating apps and automating data transfer using its visual editor.",
      },
      {
        name: "Low-Code Automation (e.g., SimAI/Zapier)",
        level: 45, // Beginner Level
        icon: Wrench,
        description:
          "Experience setting up **simple, event-driven automations** to connect various services and improve productivity.",
      },
    ],
  },
];

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
            A comprehensive overview of my technical expertise and proficiency
            levels across various technologies and tools.
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
  );
}
