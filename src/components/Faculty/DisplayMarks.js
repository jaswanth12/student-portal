import React,{  Fragment, useState , useEffect } from 'react'
import DisplayAllStudentsData from './DisplayAllStudentsData'
import Table from '../UiLayout/Table'
import Inputs from '../UiLayout/Inputs'
import AddStudentForm from './AddStudentForm';
import ModalPortals from './ModalPortals.js';
import  '../../styles/Modal.css';



var EDITVALUE ="";
var DATA_BEFORE_SUBMITING={};
const DisplayMarks = props => {
	const details=props.Details;
	const [EditStudentDetails, setEditStudentDetails]=useState({ registrationNumber:"", name:"", standard:0, semester:{},});
	const [boolToCheckIfEditClicked, setboolToCheckIfEditClicked] = useState(false);
	const [showModal, setshowModal] = useState(false);
	const { registrationNumber , name , standard , semester } = EditStudentDetails;

	useEffect(() => {
		return () => {
		};
	}, [boolToCheckIfEditClicked])

	const changeHandler = e =>{	
		setEditStudentDetails((prevState)=>{
			return {...prevState , [e.target.name] : e.target.value}
			}
		)}
	
	const onClickOfEditMarks = e => {
		setboolToCheckIfEditClicked(!boolToCheckIfEditClicked);
		let data=details.find((item)=> item.registrationNumber===EDITVALUE );
		DATA_BEFORE_SUBMITING = data;
		setEditStudentDetails(data);
	}

	const onClickofCancel = e =>{ EDITVALUE="none";	setEditStudentDetails(DATA_BEFORE_SUBMITING);	}
	
	const submitHandler = e =>{	e.preventDefault();	props.dispatch({type:"edit",payload:EditStudentDetails});EDITVALUE="none";}

	const students = details.map((detail,index)=>{
		if(detail.registrationNumber==EDITVALUE){
			return <Fragment key={detail.registrationNumber}>
				<form className="edit-student-form form-styling" onSubmit={submitHandler}>
					<Inputs attr={["n","standard",standard,changeHandler,"ENTER STANDARD"]}/>
					<Inputs attr={["t","name",name,changeHandler,"ENTER NAME"]}/>
					<button className="DeleteButton" onClick={ (e)=> {props.DeleteMarks(EditStudentDetails.registrationNumber) }}>Delete</button>
					<button className="CancelButton" onClick={ onClickofCancel }>cancel</button>
					<Inputs attr={["submit","submit"]}/>
				</form>
			</Fragment>
		}
		else{
			return <DisplayAllStudentsData 	
						key={detail.registrationNumber}
						StudentsData={ detail }
						type= {props.type}
						EditButton = { onClickOfEditMarks }
						dispatch={props.dispatch}

			 />
			}
				});
	return (
		<Fragment>
			{ props.type==='Admin' && 
			<React.Fragment>
			<ModalPortals show={showModal} hide={()=>(setshowModal(false))}>
				<AddStudentForm dispatch={props.dispatch} /> 
			</ModalPortals>
			<button className="showmodal" onClick={()=>setshowModal(true)}>Show Modal</button>
			</React.Fragment>
		}
			{ students }
		</Fragment>
	)
}

export default DisplayMarks