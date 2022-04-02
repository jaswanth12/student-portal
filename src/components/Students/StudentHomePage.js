// TYPE RAFC- SHORT HAND TO CREATE FUNCTION COMPONENT

import React from 'react'
import StudentInRow from './StudentInRow'
import moduleName from '../../styles/StudentInRow.css'
const StudentHomePage = (props) => {
    const studentData = props.stData;
    const table = studentData.map((item,index) => {
        console.log(item);
        return <React.Fragment key={index}>
					<StudentInRow student={item}></StudentInRow>
		</React.Fragment>
    })

    console.log(table);
    return (
        <div className="StudentInRow">
        <div>
			<div className="table-heading" style={{"height":"60px"}}>
				<h1>Standard</h1>
				<h1>Name</h1>
				<h1>Reg Number</h1>
				<h1 style={{"visibility":"hidden"}}>empty</h1>
			</div>
			{table}
		</div>
		</div>
    )
}

export default StudentHomePage