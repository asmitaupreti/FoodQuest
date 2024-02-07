import { useContext, useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme : 'light'
  })

  const darkTheme = () => {
    setTheme('dark')
  }

  const lightTheme = () => {
    setTheme('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme() {
  return useContext(ThemeContext)
}
