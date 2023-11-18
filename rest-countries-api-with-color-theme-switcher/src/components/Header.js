import React from "react";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";

function Header() {
	return (
		<header>
			<h1>Where in the world?</h1>
			<button>
				<MoonIcon />
				Dark Mode
			</button>
		</header>
	);
}

export { Header };
