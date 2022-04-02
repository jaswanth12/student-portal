import { createSlice } from '@reduxjs/toolkit';

const userslice = createSlice({
	name:"userslice",
	initialState:{username:"",isLoggedIn:false,type:"guest",userid:0,password:''},
	reducers:{
		userlogin(state,action){
			state.username=action.payload.username;
			state.isLoggedIn = true;
			state.type=action.payload.type;
			console.log(action.payload.type);
			state.userid=action.payload.userid;
			state.password=action.payload.password;

		},
		logout(state){
			state.username="";
			state.isLoggedIn=false;
			state.type="guest";
		}
	}

});

export const useractions1 = userslice.actions;
export default userslice;