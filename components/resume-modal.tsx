"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  Eye,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Award,
  Code,
} from "lucide-react"
import { motion } from "framer-motion"

const resumeData = {
  personalInfo: {
    name: "A'tif A'fifi",
    title: "Junior Software Engineer",
    email: "atifafifi16@gmail.com",
    phone: "+6014-6975630",
    location: "Penang, Malaysia",
    website: "atifafifi.dev",
    linkedin: "linkedin.com/in/atifafifi",
    github: "github.com/atsen1701",
  },
  summary:
    "Junior Software Engineer passionate about full-stack development and IT systems. Experienced in React, Java, Python, and IoT projects, with hands-on exposure to Three.js for creating interactive 3D interfaces. Currently contributing to system development and debugging at SEA Asia Pacific Sdn. Bhd., while continually expanding knowledge in modern frameworks and backend technologies. Committed to building efficient, user-focused solutions and growing as a well-rounded developer.",
  experience: [
    {
      title: "Junior Software Engineer",
      company: "S.E.A Asia Pacific Sdn.Bhd",
      location: "Simpang Ampat, Penang",
      period: "2025 - Present",
      achievements: [
        "Maintained and enhanced internal systems using PHP, SQL, and connection pooling techniques",
        "Led development of video upload and compression module with temporary draft handling (720p @ 60FPS)",
        "Implemented QR code generation and scanning features for employee and system tracking",
        "Automated multi-recipient email flows using SMTP within a standalone PHP script",
        "Integrated calendar planner API for task and event scheduling features",
        "Built Excel export functionality for dynamic reports and user records",
        "Improved maintainability by refactoring legacy code and transitioning to OOP-based PHP architecture",
        "Took ownership of modules during manager's absence and ensured consistent progress during team transitions"
      ],
    },
    {
      title: "Intern Software Engineer",
      company: "S.E.A Asia Pacific Sdn.Bhd",
      location: "Simpang Ampat, Penang",
      period: "2024 - 2025",
      achievements: [
        "Built a chatbot system that integrates with email workflows to handle user contact requests",
        "Developed a file upload system with MySQL storage, preview, and structured logging",
        "Explored Laravel and Node.js for side projects while supporting core PHP systems",
        "Integrated third-party APIs and tools, including Excel data exports and calendar features",
        "Collaborated with engineers to debug and optimize performance in production modules",
        "Contributed to the planning and prototyping of internal system upgrades"
      ],
    }

  ],
  education: [
    {
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Malaysia Terengganu",
      location: "Terengganu, Malaysia",
      period: "2021 - 2025",
      gpa: "3.46/4.0",
    },
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "HTML5", "CSS", "JavaScript", "Three.js","Blazor","Bootstrap"],
    backend: ["Node.js", "Python", "PHP", "Java", "JavaScript", "REST APIs", "Laravel","C#"],
    database: ["FireBase", "MongoDB", "Redis", "MySQL", "Prisma"],
    cloud: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"],
    tools: ["Git", "Figma", "VS Code"],
  },
  // certifications: [
  //   "AWS Certified Developer Associate",
  //   "Google Cloud Professional Developer",
  //   "MongoDB Certified Developer",
  // ],
}

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Eye className="h-4 w-4" />
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {resumeData.personalInfo.name}
            </DialogTitle>
            <Button size="sm" asChild className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <a href="/Resume_A'tif.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
          <DialogDescription className="text-lg">
            {resumeData.personalInfo.title}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Personal Information */}
          <motion.div {...fadeIn}>
            <Card className="border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 group">
                    <Mail className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-indigo-500 transition-colors">
                      {resumeData.personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Phone className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <a href={`tel:${resumeData.personalInfo.phone}`} className="hover:text-indigo-500 transition-colors">
                      {resumeData.personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <MapPin className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Globe className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <a href={`https://${resumeData.personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                      {resumeData.personalInfo.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Linkedin className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                      {resumeData.personalInfo.linkedin}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Github className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                      {resumeData.personalInfo.github}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div {...fadeIn}>
            <Card className="border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className="h-5 w-5 text-indigo-500" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Experience */}
          <motion.div {...fadeIn}>
            <Card className="border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className="h-5 w-5 text-indigo-500" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-indigo-500 transition-colors">{job.title}</h3>
                        <p className="text-muted-foreground">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20">
                        {job.period}
                      </Badge>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="group-hover:text-indigo-500/80 transition-colors">{achievement}</li>
                      ))}
                    </ul>
                    {index < resumeData.experience.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeIn}>
            <Card className="border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="h-5 w-5 text-indigo-500" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-indigo-500 transition-colors">{edu.degree}</h3>
                        <p className="text-muted-foreground">
                          {edu.school} • {edu.location}
                        </p>
                        <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                      </div>
                      <Badge variant="outline" className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20">
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Skills */}
          <motion.div {...fadeIn}>
            <Card className="border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code className="h-5 w-5 text-indigo-500" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category} className="group">
                    <h4 className="font-medium mb-2 capitalize group-hover:text-indigo-500 transition-colors">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
