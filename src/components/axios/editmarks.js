import React, { useState } from "react";
import axios from 'axios'

const editmarks = async(studentide,dataTosend,dispatch) => {
	var url="/marks/"+studentide;
		var waiting = await axios.post(url,dataTosend);
		if(waiting.status===200){
			console.log("success in receiving data");
			dispatch({type: "editMarks",payload: [studentide, dataTosend],});
			return 200;
		}
		else{
			return waiting.status;
		}
}

export default editmarks;