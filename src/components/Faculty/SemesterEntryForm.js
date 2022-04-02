import React, { useState } from "react";
import PrintSemesterMarks from '../StudentFacultyCommonPage/PrintSemesterMarks'
import editmarks from '../axios/editmarks.js'
import Inputs from '../UiLayout/Inputs.js'

/* THIS COMPONENT ADDS THE SEMESTER SUBJECT DYNAMICALLY */
/* IT ALSO CALLS THE PrintSemesterMarks COMPONENT TO PRINT THE SEMESTER MARKS OF A STUDENT*/
/****** IT ALSO HAS SPECIAL INPUT CHANGE HANDLER (LOOPED IN MAP)******/
const SemesterEntryForm = (props) => {
	const [inputFields, setinputFields] = useState([]);
	const [subjectName, setsubjectName] = useState({ subjectname: "" });
	const [semValue, setsemValue] = useState({ sem: 0 });
	const { sem } = semValue;
	const AddHandler = (e) => {
		e.preventDefault();
		var x = inputFields;
		inputFields.push({ subject: subjectName.subjectname, marks: 0 });
		setsubjectName({ subjectname: "" });
	};
	const ChangeHandler = (e) => {
		setsubjectName((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const SemHandler = (e) => {
		setsemValue((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};
	// const MarksChangeHandler = index => e => {
	// 	var x= {subject:e.target.name,marks:parseInt(e.target.value) };
	// 		var y={[index]:e.target.value};
	// }
	const SubmitHandlerMarks = async(e) => {
		e.preventDefault();
		var semString = "sem" + semValue.sem; //i.e.,sem + 1 => sem1(this is the semString) 
		if(props.student.semester[semString]===undefined){
			var semObject = {[semString]:{}};
		}
		else{
			var semObject = {[semString]:props.student.semester[semString]};
		}

		inputFields.map((item) => {
			semObject[semString][item.subject] = item.marks;
		});
		var status = await editmarks(props.student._id,semObject,props.dispatch);
		if(status===200) setinputFields([]);
	};


	var fields = inputFields.map((item,index) => {
		return (
			<React.Fragment key={item.subject}>
				<label>{item.subject}</label>
				{/*below is special onChangeHandler handler*/}
				<input
					type="number"
					name={item.subject}
					value={item.value}
					onChange={
						(e)=>{
								item.marks=parseInt(e.target.value);
								setinputFields([...inputFields]);
						}
						
					}
				></input>
			</React.Fragment>
		);
	});
	return (
		<div>
			<form onSubmit={SubmitHandlerMarks}>
				<label>Sem: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
				<Inputs attr={["n","sem",sem,SemHandler,"ENTER SEM MARKS","1","8"]} />
				{fields}
				<input type="submit" className="SubmitButton" value="submit" disabled={inputFields.length===0?true:false} style={{backgroundColor:inputFields.length===0?"grey":""}}></input>
			</form>
			
			<form onSubmit={AddHandler}>
				<label>Subject: &nbsp; </label>
				<Inputs attr={["text","subjectname",subjectName.subjectname,ChangeHandler,"Add Subject"]} />
				<Inputs  attr={["submit","Add"]} />
			</form>
			
			<div className="studentCompleteData">
				<div className="semesterMarks">
					<PrintSemesterMarks dispatch={props.dispatch} student={ props.student.semester } />
				</div>
			</div>
		</div>
	);
};

export default SemesterEntryForm;
