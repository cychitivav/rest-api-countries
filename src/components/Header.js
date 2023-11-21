import React from "react";
import { useTheme } from "../ThemeContext";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";

function Header() {
	const { darkMode, toggleTheme } = useTheme();

	return (
		<header className={darkMode ? "dark-theme" : "light-theme"}>
			<h1>Where in the world?</h1>
			<button onClick={toggleTheme} type="button">
				<MoonIcon />
				Dark Mode
			</button>
		</header>
	);
}

export { Header };
