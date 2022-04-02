import React from 'react'
import axios from 'axios'
const getstudent = async(registrationNumber) => {
	console.log("studnet executed");
		var url = "/student/"+registrationNumber;
		var waiting = await axios.get(url);
		// if(waiting.status===200)
		// {
		// 	let data = waiting.data;
		// 	console.log(waiting.data);
		// 	if(!waiting.data){
		// 		return {nodata:true };
		// 	}
		// 	delete data['__v'];
		// 	delete data['semester']['__v'];
		// 	delete data['semester']['student'];
		// 	return data;

		// }
		// return {err:"error occu"};
		if(waiting.status===200){
			return waiting.data;
			console.log(waiting.data);
		}
		return {data:"no data"};
}

export default getstudent;