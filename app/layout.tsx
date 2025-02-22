import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk, Orbitron } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Orangopus - Cosmic Collaboration Platform",
  description: "Launch your team into a new dimension of productivity with Orangopus.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} ${orbitron.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'