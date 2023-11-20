import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { ThemeProvider } from "./ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("https://restcountries.com/v3.1/all");
				const data = await response.json();
				setCountries(data);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		getData();
	});

	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home countries={countries} />} />
					<Route
						path="/detail/:code"
						element={<Detail countries={countries} />}
					/>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
