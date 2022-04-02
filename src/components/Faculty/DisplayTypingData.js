import React from 'react'

const DisplayTypingData = (props) => {
	var student=props.students
	return (
		<React.Fragment>
			<h2>ide : {student.registrationNumber}</h2>
			<h2>NAME : {student.name}</h2>
			<h2>STANDARD : {student.standard}</h2>
		</React.Fragment>
	)
}

export default DisplayTypingData