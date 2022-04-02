import React , { useState , useEffect } from 'react'
import Boxes from "../UiLayout/Boxes.js";
import editmarks from '../axios/editmarks.js'
import Inputs from '../UiLayout/Inputs.js'


var VALUE_BEFORE_CANCEL={};

const EachSemester = props => {
	var semValue=props.marks[0];
	var studentide=props.studentide;
	var ObjectID = props.studentid;
	const [Marks, setMarks] = useState(props.marks[1]);
	const [isEditClicked, setisEditClicked] = useState(false);
	const [ShowDeleteButtons, setShowDeleteButtons] = useState(false);
	
	const ChangeHandler =(e) => {
		setMarks((prevState) => {
			return {...prevState,[e.target.name]:parseInt(e.target.value)}
		})
	}
	const SubmitHandler = async(e) => {
		e.preventDefault();
		var semsterMarks={[semValue]:Marks};
		var url = "http:/" + "/localhost:5000/marks/"+ObjectID;
		var status = await editmarks(ObjectID,semsterMarks,props.dispatch);
		if(status===200){
			setisEditClicked(!isEditClicked);
		}
		
	}
	const EditHandler = (e) => { 
		setisEditClicked(!isEditClicked);
		VALUE_BEFORE_CANCEL = Marks;
	}
	const CancelHandler = (e) => {
		setisEditClicked(!isEditClicked);
		setMarks(VALUE_BEFORE_CANCEL);
	} 
	
	const DeleteMark = (e) => {
		props.dispatch({type:"deleteSubject",payload:[ObjectID,e.target.name,e.target.value]});
	}
var inputFields = Object.entries(Marks).map((item) => {
		return <React.Fragment>
		<label key="`${item[0]}`+`${semValue}`">{item[0]}</label>
		<Inputs key="{item[0]}" attr = { ['n',item[0],item[1],ChangeHandler] }/><br></br>
		</React.Fragment>
	});
var textFields = Object.entries(props.marks[1]).map((item) => {
		return <React.Fragment key={item[0]}> 
		<p><span>{item[0]}-{item[1]}</span>
		 { ShowDeleteButtons &&  <button className="cross" name={semValue} value={item[0]} onClick={DeleteMark}>&#215;</button> }
		</p>
		</React.Fragment>
	})
if(!isEditClicked){
	return <div>
			<p><span>{semValue}</span>
			<span>
				<input type="checkbox" onClick={(e) => {
				setShowDeleteButtons(!ShowDeleteButtons);
			}}></input> 
			</span>
			
			
			</p>
			{textFields}
			<button className="EditButton" onClick={EditHandler}>Edit</button>
		</div>
}
else{
	return (
		<div>
			<p>{semValue}</p>
			<form key="`${semValue}`" onSubmit={SubmitHandler}>
				{ inputFields }
				<button className="CancelButton" onClick={CancelHandler}>Cancel</button>
				<input className="SubmitButton" type="submit"></input>
			</form>
		</div>
	)
	
}
	
}

export default EachSemester