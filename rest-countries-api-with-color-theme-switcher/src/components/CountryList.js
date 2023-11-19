import React, { useState, useEffect } from "react";

function CountryList(props) {
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
		<ul>
			{countries.map((country) => {
				if (
					(!props?.region ||
						country?.region?.toLowerCase() === props?.region?.toLowerCase()) &&
					country?.name?.common
						?.toLowerCase()
						.includes(props?.search?.toLowerCase())
				) {
					return (
						<li key={country.cca3}>
							<img
								src={country.flags.png}
								alt={`${country.name.common} flag`}
							/>
							<h2>{country.name.common}</h2>
							<p>
								<strong>Population: </strong>
								{country.population.toLocaleString()} <br />
								<strong>Region: </strong> {country.region} <br />
								<strong>Capital: </strong> {country.capital}
							</p>
						</li>
					);
				} else {
					return null;
				}
			})}
		</ul>
	);
}

export { CountryList };
