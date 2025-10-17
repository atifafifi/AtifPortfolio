import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { title } from "process";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Cat Tinder System",
      description:
        "A dating and match-making platform for cats (and their owners), featuring swiping, real-time chat, and profile management for feline companions.",
      image: "/Image/catTinder.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Socket.io",
        "React Query",
      ],
      github: "https://github.com/atsen1701/CatTinder",
    },
    {
      title: "Weather Dashboard System",
      description:
        "A sleek, responsive dashboard providing current weather conditions, multi-day forecasts, and detailed atmospheric data based on user-specified location.",
      image: "/Image/weather.png",
      technologies: ["Vue.js", "Tailwind CSS", "OpenWeather API", "Vue Router"],
      github: "https://github.com/atsen1701/SimpleWeatherTracker",
    },
    {
      title: "Movie Planner Tracker System",
      description:
        "A personalized web application to track watched movies, manage a 'to-watch' list, and schedule viewing times with integrated movie database lookups.",
      image: "/Image/movie.png",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "The Movie Database (TMDB) API",
      ],
      github: "https://github.com/atsen1701/movie-watchlist",
    },
    {
      title: "User Management (Point Based Subscription) System",
      description:
        "A robust back-end system for managing user authentication, accounts, and point-based subscriptions, allowing users to consume services through a flexible point currency model.",
      image: "/Image/subscribe.png",
      technologies: [
        "ASP.NET Core (Razor Pages)",
        "C#",
        "Entity Framework Core",
        "SQL Lite",
        "Bootstrap",
      ],
      github: "https://github.com/atsen1701/MemberShip",
    },
    {
      "title": "Personal Portfolio Website",
      "description": "A responsive and modern personal portfolio showcasing my projects, skills, and professional experience. Built for fast loading and a clean, utility-first design aesthetic.",
      "image": "/Image/portfolio.png",
      "technologies": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js (Optional, if used for routing/hosting)",
        "Framer Motion (for animations)"
      ],
      "github": "https://github.com/atsen1701/AtifSecPortfolio"
    },

       {
      "title": "Vanadis Heart",
      "description": "Vanadis Hearth is envisioned as a dedicated, orange-themed culinary sanctuary built with React and TypeScript, offering users a centralized platform to manage their most cherished recipes. The application uses Firebase Firestore to securely preserve and organize private, user-created recipes, while simultaneously featuring a Discover view that will integrate with external public APIs (like TheMealDB) to allow users to explore and import new global cuisine ideas. The overall design prioritizes a responsive, seamless user experience that connects local cooking tradition with the wider world of food discovery.",
      "image": "/Image/vanadisHeart.jpg",
      "technologies": [
        "ReactJS",
        "TypeScript",
        "CSS",
        "Vite (Optional, if used for routing/hosting)",
        "PostGresSQL"
      ],
      "github": "https://github.com/atifafifi/VanadisHeart"
    }

    
  ];

  return (
    <section id="projects" className="container py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
          Featured Projects
        </h2>
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
