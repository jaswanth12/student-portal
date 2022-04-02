import React from 'react'
import Option from '../UiLayout/Option.js'
import '../../styles/Filter.css' 

const AddingFilter = (props) => {
	
	const onChangeHandler =(e) =>{	props.Filter(e.target.value); 	}
	return (
		<div>
			<select className="filter" onChange = {onChangeHandler}>
			<option key="0" value="All">All</option>
			<Option range={10} AppendingText={""} />
			
			</select>			
		</div>
	)
}

export default AddingFilter