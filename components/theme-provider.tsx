"use client"

import * as React from "react"

const ThemeContext = React.createContext({
  theme: "light",
  setTheme: (theme: string) => {},
})

const ThemeProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: any
}) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme === "dark" ? "dark" : "light")
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
      }
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

const useTheme = () => React.useContext(ThemeContext)

export { ThemeProvider, useTheme }
