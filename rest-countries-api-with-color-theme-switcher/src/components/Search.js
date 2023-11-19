import React from "react";
import { ReactComponent as LoupeIcon } from "../assets/loupe.svg";

function SearchBox({ onSearchChange }) {
	return (
		<form className="searchBox">
			<LoupeIcon />
			<input
				type="text"
				placeholder="Search for a country..."
				onChange={onSearchChange}
			/>
		</form>
	);
}

function Filter({ onRegionChange }) {
	return (
		<form>
			<select defaultValue="" onChange={onRegionChange}>
				<option value="">Filter by Region</option>
				<option value="africa">Africa</option>
				<option value="americas">Americas</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</form>
	);
}

export { SearchBox, Filter };
