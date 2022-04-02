import React from "react";
import Students from "./Students.js";
import Faculty from "./Faculty.js";
import { Link } from "react-router-dom";
import '../../styles/Card.css';

const Landing = (props) => {
	return (
		<div className="card-wrapper">
			<Link to="/student"><Students /></Link>
			<Link to="/faculty"><Faculty /></Link>
		</div>
	);
};

Landing.propTypes = {};

export default Landing;
