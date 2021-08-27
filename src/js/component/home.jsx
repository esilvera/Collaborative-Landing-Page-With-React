import React from "react";

//include images into your bundle
import { TituloNavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<>
			<TituloNavBar />
			<Jumbotron />
		</>
	);
};

export default Home;
