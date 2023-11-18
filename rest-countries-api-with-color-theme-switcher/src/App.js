import React from "react";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Detail from "./pages/Detail";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Search />
		</>
	);
}

export default App;
