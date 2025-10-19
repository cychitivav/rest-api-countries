import { useTheme } from "../ThemeContext"
import { ReactComponent as LoupeIcon } from "../assets/loupe.svg"

function SearchBox({ onSearchChange }) {
  const { darkMode } = useTheme()

  return (
    <form className={`searchBox ${darkMode ? "dark-theme" : "light-theme"}`}>
      <LoupeIcon />
      <input type="text" placeholder="Search for a country..." onChange={onSearchChange} />
    </form>
  )
}

function Filter({ onRegionChange }) {
  const { darkMode } = useTheme()

  return (
    <form className={darkMode ? "dark-theme" : "light-theme"}>
      <select defaultValue="" onChange={onRegionChange}>
        <option value="" style={{ display: "none" }}>
          Filter by Region
        </option>
        <option value="africa" className={darkMode ? "dark-theme" : "light-theme"}>
          Africa
        </option>
        <option value="americas" className={darkMode ? "dark-theme" : "light-theme"}>
          Americas
        </option>
        <option value="asia" className={darkMode ? "dark-theme" : "light-theme"}>
          Asia
        </option>
        <option value="europe" className={darkMode ? "dark-theme" : "light-theme"}>
          Europe
        </option>
        <option value="oceania" className={darkMode ? "dark-theme" : "light-theme"}>
          Oceania
        </option>
      </select>
    </form>
  )
}

export { SearchBox, Filter }
