"use client"

import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LucideIcon } from "lucide-react"

interface SkillProgressProps {
  name: string
  level: number
  icon: LucideIcon
  description: string
}

export function SkillProgress({ name, level, icon: Icon, description }: SkillProgressProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-indigo-500" />
                <span className="font-medium">{name}</span>
              </div>
              <span className="text-sm text-foreground/60">{level}%</span>
            </div>
            <Progress
              value={level}
              className="h-2 bg-indigo-500/20 [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-purple-500"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px] p-3">
          <p className="text-sm">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 