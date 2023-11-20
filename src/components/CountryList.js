import React from "react";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";

function CountryList(props) {
	let countries = props.countries;
	const { darkMode } = useTheme();

	return (
		<ul>
			{countries.map((country, index) => {
				if (
					(!props?.region ||
						country?.region?.toLowerCase() === props?.region?.toLowerCase()) &&
					country?.name?.common
						?.toLowerCase()
						.includes(props?.search?.toLowerCase())
				) {
					return (
						<Link to={`/detail/${country.cca3}`}>
							<li
								key={index}
								className={darkMode ? "dark-theme" : "light-theme"}
							>
								<img
									src={country.flags.svg}
									alt={`${country.name.common} flag`}
								/>
								<h2>{country.name.common}</h2>
								<p>
									<strong>Population: </strong>{" "}
									{country.population.toLocaleString()} <br />
									<strong>Region: </strong> {country.region} <br />
									<strong>Capital: </strong> {country.capital}
								</p>
							</li>
						</Link>
					);
				} else {
					return null;
				}
			})}
		</ul>
	);
}

export { CountryList };
