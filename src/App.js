// importing methods and functions
import FacultyHomePage from "./components/Faculty/FacultyHomePage.js";
import StudentHomePage from "./components/Students/StudentHomePage.js";
import StudentData from "./components/StudentFacultyCommonPage/StudentData.js";

import Landing from "./components/Homepage/Landing";
import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
//Redux store
import  './styles/Header.css';
import store from './store/index.js'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useractions1 } from './store/user.js';
import login from './store/useractions.js';

var DEFAULT_TESTING = 0;
const ColorContext = React.createContext();


const reducer = (state, action) => {
	switch (action.type) {
		case "deleteMark":
			console.log('---------EXECUTED----------');
			var TemporaryVariable5 = [...state];
			var semValue = action.payload[1];
			var semSubject = action.payload[2];
			console.log(TemporaryVariable5);
			var findIndex = state.findIndex((item) => {
				return item._id === action.payload[0];
			});
			delete TemporaryVariable5[findIndex]['semester'][semValue][semSubject];
			if(Object.keys(TemporaryVariable5[findIndex]['semester'][semValue]).length===0){
				delete TemporaryVariable5[findIndex]['semester'][semValue];
			}
			return [...TemporaryVariable5]; 
		case "deleteSubject":
		console.log('DELETE STUDENT');
		var Temp = [...state];
		var student_id = action.payload[0];
		var semester = action.payload[1];
		var subject = action.payload[2];
		var index = state.findIndex((item) => {
			return item._id === student_id;
		})
		var student = state[index];
		delete student['semester'][semester][subject];
		Temp[index]=student;
			return [...Temp];
		case "delete":
			var x=[];
			var student_ID=action.payload;
			console.log("3.DELETE-Starting the filter data.......");
			var x=state.filter((item) => {
				return item._id!==student_ID;
			});
			console.log("4.DELETE-filtered ended ")
			return [...x];
		

		case "add":
			console.log("5.ADDING - APPENDING DATA");
			return[...state,action.payload];

		
		case "editMarks":
			console.log(".......Received in Dispatch..........");
			const TemporaryVariable4 = [...state];
			var studentide = action.payload[0];
			var dataReceived = action.payload[1];
			var requiredStudentIndex = state.findIndex((item) => {
				return item._id === studentide;
			});
			var requiredStudentIDE=TemporaryVariable4[requiredStudentIndex];
			Object.entries(dataReceived).map((item) => {
				requiredStudentIDE['semester'][item[0]]=item[1];
			});
			TemporaryVariable4[requiredStudentIndex]=requiredStudentIDE;
			console.log(TemporaryVariable4[requiredStudentIndex].semester);
			return [...TemporaryVariable4];


		case "RetriveAllStudentsData":
			return [...action.payload];

		default:
			console.log("-----------------DEFAULT REDUCER EXECUTED-------------");
			return [...state];
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, []);
	// Redux store variables start
	const storeuser = useSelector((state)=>state.user.username); 
	const storetype = useSelector((state)=>state.user.type); 
	const storeisLoggedIn = useSelector((state)=>state.user.isLoggedIn)
	const dispatch1=useDispatch();
	// Redux store variables end
	
	if (DEFAULT_TESTING<2) {
		var URL = "http:/" + "/localhost:5000/";
		axios
			.get(URL)
			.then((json) => {
				dispatch({
					type: "RetriveAllStudentsData",
					payload: json.data,
				});
			})
			.catch((error) => {
				console.log("ERROR OCCURED IN RETRIVING THE DATA");
			});
		DEFAULT_TESTING=DEFAULT_TESTING+1;
	}

	return (
		<React.Fragment>
		<div className="header">
			<h1>{ !storeisLoggedIn ? "Login" : `Welcome, ${storetype}` }</h1>
			<div>
			{/*we are given default userid for demo purpose*/}
			<p>{ !storeisLoggedIn && (<button onClick={()=>{dispatch1(login({type:"admin",userid:111}))}}>admin</button>) }</p>
			<p>{ !storeisLoggedIn && (<button onClick={()=>{dispatch1(login({type:"faculty",userid:222}))}}>Teacher</button>) }</p>
			<p>{ storeisLoggedIn && <button onClick={()=>{dispatch1(useractions1.logout())}}>Logout</button> } </p>
			</div>
		</div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing dispatch={dispatch} />}	/>
					<Route exact path="/faculty" element={<FacultyHomePage stData={state} dispatch={dispatch} type={storetype} /> } />
					<Route exact path="/createstudent" element={ <FacultyHomePage stData={state} dispatch={dispatch} type={storetype} /> }	/>
					<Route exact path="/student" element={<StudentHomePage stData={state} dispatch={dispatch} type={storetype} /> } />
					<Route exact path="/student/:registrationNumber" element={ <StudentData stData={state} /> } />

				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
export { ColorContext };
