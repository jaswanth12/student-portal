import React from 'react'

const Option = (props) => {
	const text=props.AppendingText;
	const StandardList = [...Array(props.range+1).keys()];
	const filteredStandardList = StandardList.filter((item)=> { return item > 0 } );
	console.log();
	return (
		<React.Fragment>
			{	filteredStandardList.map((item) => 
				<option key= {item} value= {`${text}${item}`} >{`${text} ${item}`} </option> 
			)}
		</React.Fragment>
	)
}

export default Option