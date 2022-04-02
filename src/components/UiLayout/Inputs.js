import React from 'react'

const Inputs = (props) => {
	var data = props.attr;

	var type="text";
		if(data[0]==="n") type="number"
		if(data[0]==="submit") type="submit"
	var name=data[1];
	var value=data[2];
	var fun=data[3];
	var placeholder=data[4];
	var min='0';
	var max='100';
	if(data[5]!=undefined){
		min=data[5];
		max=data[6];
	}
	

	var inputField = (e) =>{
		if(type==="submit"){
			{/*---(1.SAYS IT IS TYPE SUBMIT 2.SAYS VALUE OF THE SUBMIT BUTTON)---*/}
			return <input type="submit" className="SubmitButton" value={data[1]} ></input>	
		}
		{/*UNDEFINED MEANS THAT IT DOES NOT SENT ANY DEFAULT MIN AND MAX VALUE OF INPUT TYPE NUMBER*/}
		if(data[5]===undefined){
			return <input type={type} name={name} value={value} onChange={(e)=>{fun(e)}} placeholder={placeholder} ></input>
		}

		else{
			return <input type={type} name={name} value={value} onChange={(e)=>{fun(e)}} min="1" max="8" placeholder={placeholder} ></input>
		}

	}
		

	return (
		<React.Fragment>
			{inputField()}			
			 
		</React.Fragment>
		
	)
}

export default Inputs