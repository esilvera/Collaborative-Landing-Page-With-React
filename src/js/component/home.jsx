import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6 col-12">
						<Card />
					</div>
					<div className="col-md-3 col-sm-6 col-12">
						<Card />
					</div>
					<div className="col-md-3 col-sm-6 col-12">
						<Card />
					</div>
					<div className="col-md-3 col-sm-6 col-12">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
