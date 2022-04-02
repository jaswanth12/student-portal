import React from 'react'
import axios from 'axios'
const addstudent = async(studentdata,dispatch) => {
		var url = "/student";
		var waiting = await axios.post(url,studentdata);
		if(waiting.status===200){
			console.log(waiting);
			dispatch({type:"add",payload:waiting.data});
			return 200;
		} 
		return 400;
}

export default addstudent