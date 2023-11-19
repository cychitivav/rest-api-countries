import React, { useState } from "react";
import { Header } from "./components/Header";
import { SearchBox, Filter } from "./components/Search";
import { CountryList } from "./components/CountryList";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Detail from "./pages/Detail";

import "./App.css";

function App() {
	const [region, setRegion] = useState("");
	const [search, setSearch] = useState("");

	const handleSearchChange = (event) => {
		console.log(event.target.value);
		setSearch(event.target.value);
	};

	const handleRegionChange = (event) => {
		console.log(event.target.value);
		setRegion(event.target.value);
	};

	return (
		<>
			<Header />
			<nav>
				<SearchBox onSearchChange={handleSearchChange} />
				<Filter onRegionChange={handleRegionChange} />
			</nav>
			<CountryList region={region} search={search} />
		</>
	);
}

export default App;
