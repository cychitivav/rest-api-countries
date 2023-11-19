import React from "react";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";

function Detail({ countries }) {
	const { code } = useParams();

	const country = countries.find((country) => country.cca3 === code);
	return (
		<>
			<Header />
			<nav>
				<button onClick={() => (window.location.href = "/")}>
					<span>←</span> Back
				</button>
			</nav>

			<main>
				<img src={country.flags?.svg} alt={`${country.name?.common} flag`} />
				<div>
					<h2>{country.name?.common}</h2>
					<div>
						<p>
							<strong>Native Name: </strong>
							{country.name?.nativeName?.common} <br />
							<strong>Population: </strong>{" "}
							{country.population.toLocaleString()} <br />
							<strong>Region: </strong> {country.region} <br />
							<strong>Sub Region: </strong> {country.subregion} <br />
							<strong>Capital: </strong> {country.capital}
						</p>
						<p>
							<strong>Top Level Domain: </strong>
							{country.tld.join(", ")} <br />
							<strong>Currencies: </strong>
							{Object.keys(country.currencies).join(", ")} <br />
							<strong>Languages: </strong>
							{Object.values(country.languages).join(", ")}
						</p>
					</div>
					<p>
						<strong>Border Countries: </strong>
						{country.borders.map((border) => (
							<span>{border} </span>
						))}
					</p>
				</div>
			</main>
		</>
	);
}

export { Detail };
