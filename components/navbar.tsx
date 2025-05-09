"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Database, FileText, Home, Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Início", href: "#home", icon: Home },
    { name: "Sobre", href: "#about", icon: FileText },
    { name: "Projetos", href: "#projects", icon: Database },
    { name: "Experiência", href: "#experience", icon: Code },
    { name: "Contato", href: "#contact", icon: FileText },
  ]

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 py-1">
        <Link href="#home" className="flex items-center gap-2">
          <motion.div
            className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          />
          <span className="font-bold text-xl text-foreground transition-colors">
            wrmartins<span className="text-blue-600 dark:text-blue-400">Portfolio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors hover:text-blue-600 dark:hover:text-blue-400 flex items-center h-16"
            >
              {item.name}
            </Link>
          ))}
<div className="flex items-center h-16">
  <Button
    variant="ghost"
    size="icon"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="rounded-full text-gray-900 dark:text-gray-100"
  >
    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Alterar tema</span>
  </Button>
</div>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden " onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6 text-gray-900 dark:text-gray-100" /> : <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md md:hidden text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="container flex flex-col gap-6 p-6 min-h-[calc(100vh-4rem)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors hover:text-blue-600 dark:hover:text-blue-400 leading-none"
                onClick={toggleMenu}
              >
                <item.icon className="h-5 w-5 text-blue-600" />
                {item.name}
              </Link>
            ))}
            <div className="flex items-center mt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  toggleMenu()
                }}
                className="w-full"
              >
                {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
