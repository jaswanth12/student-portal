import React from 'react'
import PropTypes from 'prop-types'
import "../../styles/Boxes.css"


const Boxes = props => {
	return (
		<div className="Boxes">
				{props.children}
		</div>
	)
}

export default Boxes