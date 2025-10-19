import { useTheme } from "../ThemeContext"
import { ReactComponent as MoonIcon } from "../assets/moon.svg"
import { ReactComponent as SunIcon } from "../assets/sun.svg"

function Header() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <header className={darkMode ? "dark-theme" : "light-theme"}>
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme} type="button">
        {darkMode ? <SunIcon /> : <MoonIcon />}
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>
    </header>
  )
}

export { Header }
