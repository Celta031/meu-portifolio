import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfólio de Engenheiro DevOps | wrmartins",
  description: "Portfólio profissional com projetos de DevOps, Cloud, Infraestrutura e Automação.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster /> {/* <- AQUI! */}
        </ThemeProvider>
      </body>
    </html>
  )
}