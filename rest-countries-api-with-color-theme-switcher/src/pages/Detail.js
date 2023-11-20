import React from "react";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail({ countries }) {
	const { code } = useParams();

	const country = countries.find((country) => country.cca3 === code);

	return (
		<>
			<Header />
			<nav>
				<Link to="/">
					<button>
						<span>←</span> Back{" "}
					</button>
				</Link>
			</nav>

			<main>
				{country ? (
					<>
						<img
							src={country?.flags?.svg}
							alt={`${country?.name?.common} flag`}
						/>
						<div>
							<h2>{country?.name?.common}</h2>
							<div>
								<p>
									<strong>Native Name: </strong>
									{Object.values(country?.name?.nativeName)
										.map((nativeName) => nativeName?.common)
										.join(", ")}{" "}
									<br />
									<strong>Population: </strong>{" "}
									{country?.population.toLocaleString()} <br />
									<strong>Region: </strong> {country?.region} <br />
									<strong>Sub Region: </strong> {country?.subregion} <br />
									<strong>Capital: </strong> {country?.capital}
								</p>
								<p>
									<strong>Top Level Domain: </strong>
									{country?.tld.join(", ")} <br />
									<strong>Currencies: </strong>
									{Object.keys(country?.currencies).join(", ")} <br />
									<strong>Languages: </strong>
									{Object.values(country?.languages).join(", ")}
								</p>
							</div>
							<p>
								<strong>Border Countries: </strong>

								{country?.borders.map((border) => (
									<span>
										{
											countries.find((country) => country.cca3 === border).name
												.common
										}
									</span>
								))}
							</p>
						</div>
					</>
				) : (
					<></>
				)}
			</main>
		</>
	);
}

export { Detail };
