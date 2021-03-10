import { useState, useEffect } from 'react'

const useTheme = () => {
  let userTheme = localStorage.getItem('theme')

  if (userTheme) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    userTheme = matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(userTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return [theme, toggleTheme]
}

export default useTheme
