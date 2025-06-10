import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BackToTop } from "@/components/back-to-top"
import { CustomCursor } from "@/components/custom-cursor"
import { AnimatedBackground } from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A'tif A'fifi - Junior Software Engineer",
  description:
    "Portfolio of A'tif A'fifi, a passionate Junior Software Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "fullstack"],
  authors: [{ name: "A'tif A'fifi Bin Mohd Zukhi" }],
  openGraph: {
    title: "A'tif A'fifi - Junior Software Engineer",
    description: "Portfolio of A'tif A'fifi, a passionate software developer",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CustomCursor />
          <AnimatedBackground />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
