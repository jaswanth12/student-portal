import React , { useEffect, useState } from 'react'
import { useSearchParams, useParams } from "react-router-dom";
import getstudent from '../axios/getstudent';
import  '../../styles/SingleStudent.css';


var isStudentExists = false;
const StudentData = (props) => {
 const {registrationNumber} = useParams();
 const [Student, setStudent] = useState({});

 let x = (props.stData).filter((item) => {
 	return item.registrationNumber===parseInt(registrationNumber);
 });
 let StudentData = x[0];
	
	return (
	<div>
{ 	StudentData ?	
	<div className="StudentWrapper">
	<div className="image-wrapper">
		<img src='/user.png' style={{width:"200px",height:"200px"}} />
	</div>
		<div>
			<h1><b>ID: </b>{StudentData.registrationNumber}</h1>
			<h1><b>Name: </b>{StudentData.name}</h1>
			<h1><b>Hostel: </b>{StudentData.hostel}</h1>
			<h1><b>Mobile: </b>{StudentData.mobile}</h1>
			<h1><b>Address: </b>{StudentData.address}</h1>
		</div>
	</div>: <div style={{textAlign:"Center"}}><h1 className="spinner"></h1></div>
	
}

	</div>

	)
}

export default StudentData