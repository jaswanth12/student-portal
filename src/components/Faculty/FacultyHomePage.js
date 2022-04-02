
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddStudentForm from "./AddStudentForm";
import DisplayMarks from "./DisplayMarks";
import AddingFilter from "./AddingFilter";
import  '../../styles/Forms.css';
import  '../../styles/globalStyles.css';
import  '../../styles/studentCompleteData.css';


const FacultyHomePage = (props) => {
	useEffect(() => {
		return () => {
		};
	}, [props.stData]);
	const [StandardFilter, setStandardFilter] = useState("All");
	const FilterHandler = (e) => {	setStandardFilter(e); };
	 
	return (
		<React.Fragment>

		{props.type==="admin" &&
				<AddStudentForm dispatch={props.dispatch} />	
		}
			<AddingFilter Filter={FilterHandler} />
			{/* filtering and sending the data to display--> */}
			
			<DisplayMarks
				Details={props.stData.filter((item) => {
					if (StandardFilter === "All") {
						return true;
					}
					return item.standard === parseInt(StandardFilter);
				})}
				Filters={StandardFilter}
				dispatch={props.dispatch}
				type={props.type}
			/>
			
		</React.Fragment>
	);
};

export default FacultyHomePage;
