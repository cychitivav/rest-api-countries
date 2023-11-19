import { Header } from "../components/Header";
import { useParams } from "react-router-dom";

function Detail() {
	const { code } = useParams();
	return (
		<>
			<Header />
			<nav>
				<button>Back</button>
			</nav>

			<main>
				<img src="" alt="" />
				<div>
					<h2>Country Name</h2>
					<div>
						<div>
							<p>Native Name: </p>
							<p>Population: </p>
							<p>Region: </p>
							<p>Sub Region: </p>
							<p>Capital: </p>
						</div>
						<div>
							<p>Top Level Domain: </p>
							<p>Currencies: </p>
							<p>Languages: </p>
						</div>
					</div>
					<div>
						<p>Border Countries: </p>
					</div>
				</div>
			</main>
		</>
	);
}

export { Detail };
