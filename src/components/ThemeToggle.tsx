import {
  HiMoon,
  HiSun,
} from 'react-icons/hi'

import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const {
    darkMode,
    toggleTheme,
  } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {darkMode ? (
        <HiSun />
      ) : (
        <HiMoon />
      )}
    </button>
  )
}

export default ThemeToggle