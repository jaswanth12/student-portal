import { useractions1 } from './user.js';
import axios from 'axios';
// export const checkIfUserLoggedIn=()=>{
// 	return async(dispatch)=>{

// 	}
// } 

export default function login(userdata){
	return async(dispatch) => {
		let url = "http:/" + "/localhost:5000/retriveUserData";
		console.log(userdata.userid);
		try{
		var waiting = await axios.post(url,{userid:userdata.userid});
		if(waiting.status===200){
			dispatch(useractions1.userlogin(waiting.data[0]));
		}
		else{
			alert("some error occured in useraction file");
		}
		}
		catch(err){
			console.log(err);
			console.log("some error occured");
		}

	}
} 