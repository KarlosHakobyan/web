import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface ThemeContextType {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeContext =
  createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [darkMode, setDarkMode] =
    useState(true)

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme')

    if (savedTheme === 'light') {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    document.body.className =
      darkMode ? 'dark-theme' : 'light-theme'

    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light',
    )
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context =
    useContext(ThemeContext)

  if (!context) {
    throw new Error(
      'useTheme must be used inside ThemeProvider',
    )
  }

  return context
}