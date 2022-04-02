import React from 'react'
import { Link } from "react-router-dom";

const StudentInRow = ({student}) => {
	
	return (
		<div>
			<h1>{student.standard}</h1>
			<h1>{student.name}</h1>
			<h1>{student.registrationNumber}</h1>
			<Link to={`/student/${student.registrationNumber}`}>
			<button className="ViewButton">view</button>
			</Link>
		</div>
	)
}

export default StudentInRow