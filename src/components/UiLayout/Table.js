import React from 'react'
import "../../styles/Table.css";

const Table = (props) => {
		const name = "tableStyling" + " " + props.className;
	return (
		<div className={ name }>
			{props.children}
		</div>
	)
}

export default Table