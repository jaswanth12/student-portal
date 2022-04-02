import React , { useState , useEffect } from 'react'
import PropTypes from 'prop-types'
import EachSemester from './EachSemester'
import Boxes from "../UiLayout/Boxes.js";

var ide=0;
var objectID="";
const PrintSemesterMarks2 = props => {
	const [Marks, setMarks] = useState(props.student);
	useEffect(() => {
		return () => {
			setMarks(props.student);
		};
	}, [props.student]);
	const std= props.student;
	ide=props.student['registrationNumber'];
	objectID = props.student['student'];
	delete props.student['__v'];
	delete props.student['_id'];

	var x =Object.entries(props.student).map((item) => {
		if(item[0]==='registrationNumber') return 
		if(item[0]==='student') return
		if(Object.keys(item[1]).length===0) return
		 return <EachSemester key={item[0]} dispatch={props.dispatch} studentide={ide} marks={item} studentid={objectID} />
})

	return (
		<Boxes>	{ x } </Boxes>
	)
}


export default PrintSemesterMarks2