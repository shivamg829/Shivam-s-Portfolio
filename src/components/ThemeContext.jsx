import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const sectionThemes = {
  home:         { colors: ['#38bdf8', '#0ea5e9', '#7dd3fc'], speed: 1.0, intensity: 1.0 },
  about:        { colors: ['#38bdf8', '#0284c7', '#bae6fd'], speed: 0.7, intensity: 0.8 },
  skills:       { colors: ['#7dd3fc', '#38bdf8', '#0ea5e9'], speed: 1.2, intensity: 1.1 },
  projects:     { colors: ['#60a5fa', '#38bdf8', '#93c5fd'], speed: 0.9, intensity: 0.9 },
  leetcode:     { colors: ['#fbbf24', '#f59e0b', '#fde68a'], speed: 0.8, intensity: 1.0 },
  github:       { colors: ['#38bdf8', '#0ea5e9', '#7dd3fc'], speed: 1.0, intensity: 0.9 },
  certificates: { colors: ['#fbbf24', '#d97706', '#fde68a'], speed: 0.6, intensity: 1.2 },
  contact:      { colors: ['#38bdf8', '#60a5fa', '#93c5fd'], speed: 0.6, intensity: 0.8 }
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    } else {
      setIsDark(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  // Derive current section from path
  const getSectionFromPath = (pathname) => {
    if (pathname === '/') return 'home'
    return pathname.replace('/', '') || 'home'
  }

  const currentSection = getSectionFromPath(location.pathname)
  const currentTheme = sectionThemes[currentSection] || sectionThemes.home
  const uniforms = {
    colors: currentTheme.colors,
    speed: currentTheme.speed,
    intensity: currentTheme.intensity
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, currentSection, uniforms, sectionThemes }}>
      {children}
    </ThemeContext.Provider>
  )
}

