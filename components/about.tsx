import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm an eager and driven junior software engineer with hands-on experience in PHP, JavaScript, SQL, Java, and Python.
              I’ve worked on real-world systems and have also been involved in IoT projects, giving me a broad understanding of both software and hardware integration.
              I'm currently deepening my skills in React.js and exploring other modern frameworks to grow as a full-stack developer.
            </p>
            <p className="text-muted-foreground">
              Outside of coding, I enjoy experimenting with web technologies like Three.js, staying curious about new tools, and continuously learning through personal projects and real-world challenges.
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 1 Year of Experience</li>
                <li>🌍 Based in Penang, MY</li>
                <li>☕ Coffee Enthusiast</li>
                <li>🎮 Gamer in Free Time</li>
                <li>💻 Always learning,always coding</li>
              </ul>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
