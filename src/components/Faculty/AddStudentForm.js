import React, { useState , useContext } from "react";
import DisplayTypingData from "./DisplayTypingData";
import Option from '../UiLayout/Option.js'
import Inputs from '../UiLayout/Inputs.js'
import addstudent from '../axios/addstudent.js';
import ModalPortals from './ModalPortals.js';
import  '../../styles/addstudentform.css';

const randomNumber = (e) => {
	return Math.floor(Math.random() * e);
};
const AddStudentForm = (props) => {
	const [StudentData, setStudentData] = useState({
		registrationNumber: randomNumber(1000),
		name: "",
		standard: randomNumber(10),
		
	});
	const { registrationNumber, name, standard } = StudentData;
	
	const ChangeHandler = (e) => {
		setStudentData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	var SubmitHandlerer = async (e) => {
		e.preventDefault();
		var waiting = await addstudent(StudentData,props.dispatch);
		if(waiting===200){
			setStudentData((prevState) => {return {registrationNumber: randomNumber(1000),name: "",standard: randomNumber(10),}})
		}
	};

	return (
		<div>
			{/*<DisplayTypingData students={StudentData} />*/}
			<form name="personname" className="form-styling add-student-form" onSubmit={SubmitHandlerer}>
			<h1>Add StudentData</h1>
				<Inputs attr={['n','registrationNumber',registrationNumber,ChangeHandler,"Registration Number"]} />
				<Inputs attr={['t','name',name,ChangeHandler,"Student Name"]} />
				<Inputs attr={['n','standard',standard,ChangeHandler,"standard",1,10]} />
				<Inputs attr={['submit','Add student']} />
			</form>
		</div>
	);
};


export default AddStudentForm;
