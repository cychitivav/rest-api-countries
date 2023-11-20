import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);

	function toggleTheme() {
		darkMode
			? (document.body.style.backgroundColor = "hsl(0, 0%, 98%)")
			: (document.body.style.backgroundColor = "hsl(207, 26%, 17%)");

		setDarkMode(!darkMode);
	}

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
