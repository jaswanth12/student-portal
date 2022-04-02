import React, { useState } from "react";
import axios from 'axios';

const deletestudent = async (student_id,dispatch) => {
	var url = "student/"+student_id;
	console.log("1.DELETE data sent request and waiting..........");
	var waiting = await axios.delete(url);
	if(waiting.status===200){
		console.log("2.DELETE data received and dispatching the action.......");
		dispatch({type:"delete",payload:student_id});
		console.log("------DATA DISPATCH COMPLETED----");
		return 200;
	}
	return 400;
	
}

export default deletestudent;