import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Vue.js", "Tailwind CSS", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <section id="projects" className="container py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
