import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, Tailwind CSS, and shadcn/ui. © 2025 A'tif A'fifi.
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/atifafifi" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:atifafifi16@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
