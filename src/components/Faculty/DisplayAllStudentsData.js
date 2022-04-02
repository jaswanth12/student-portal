import React ,{ useState }from 'react'
import SemesterEntryForm from './SemesterEntryForm'
import deletestudent from '../axios/deletestudent.js'
import { Link } from 'react-router-dom';
import  '../../styles/globalStyles.css';
import  '../../styles/studentCompleteData.css';



const DisplayAllStudentsData = (props) => {
	const student=props.StudentsData;
	console.log(props.type);
	const [IsSemesterFormClicked, setIsSemesterFormClicked] = useState(false);
	const [IsEditFormClicked, setIsEditFormClicked] = useState(false);

	const addSemesterForm = () =>{
		setIsSemesterFormClicked(!IsSemesterFormClicked);
	}

	const submitHandler=(e)=>{
		props.dispatch({type:"add/edit_semester",payload:e});
		setIsSemesterFormClicked(!IsSemesterFormClicked);
	}

	const submitDeleteDataToServer = async(e) => {
		console.log("deleting data in server - STARTED......");
		var status = await deletestudent(student._id,props.dispatch);
	}
	return (
		<React.Fragment>
			<div className="studentCompleteData" key={student.registrationNumber}>
			<div><img src="/user.png" /></div>
			<div>
			<div className="f-20">
			<p><b>ID</b> - {student.registrationNumber}</p>
			<p><b>Standard</b> - {student.standard}</p>
			<p><b>Name</b> - {student.name}</p>
			</div>
			<Link className="sumitButton" to={`../student/${student.registrationNumber}` }><p className="SubmitButton">View</p></Link>
			{ props.type==="Admin" && 
				<span>
					<button className="DeleteButton" onClick={submitDeleteDataToServer}>Delete Student</button>
					<button className="EditButton" onClick={ (e)=> {props.EditButton(student.registrationNumber)} }>Edit Student</button>
				</span>   
			}
			{ (props.type === "Admin" || props.type === "Teacher") &&
				<SemesterEntryForm submitHandler={submitHandler} student = {student}  dispatch={props.dispatch} /> }
			</div>
			</div>
			<hr style={{borderColor:"#45A29E",width:"100%"}}></hr>

		</React.Fragment>
	)
}

export default DisplayAllStudentsData