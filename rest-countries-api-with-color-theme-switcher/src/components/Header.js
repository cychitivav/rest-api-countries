import React from "react";
import { useTheme } from "../ThemeContext";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";

function Header() {
	const { darkMode, toggleTheme } = useTheme();

	return (
		<header>
			<h1>Where in the world?</h1>
			<button onClick={toggleTheme}>
				<MoonIcon />
				Dark Mode
			</button>
		</header>
	);
}

export { Header };
