import React from "react";
//include images into your bundle

import { Navegacion } from "./navegacion.js";
import { Jumbotron } from "./jumbotron.js";
import { Tarjeta } from "./tarjeta.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navegacion />

			<div className="container-fluid">
				<Jumbotron />
				<Tarjeta />
			</div>
			<Footer />
		</>
	);
}
