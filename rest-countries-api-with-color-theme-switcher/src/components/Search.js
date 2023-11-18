import React from "react";
import { ReactComponent as LoupeIcon } from "../assets/loupe.svg";

function Search() {
	return (
		<div>
			<SearchBox />
			<Filter />
		</div>
	);
}

function SearchBox() {
	return (
		<form>
			<LoupeIcon />
			<input type="text" placeholder="Search for a country..." />
		</form>
	);
}

function Filter() {
	return (
		<form>
			<select>
				<option value="filter-by-region" selected style={{ display: "none" }}>
					Filter by region
				</option>
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</form>
	);
}

export { Search };
