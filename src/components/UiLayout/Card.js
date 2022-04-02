import React from 'react'
import PropTypes from 'prop-types'
import "../../styles/Card.css"


const Card = props => {
	const name="card" + " " + props.className;
	return (
		<div className="card">
			{props.children}
		</div>
	)
}

// home_page_card.propTypes = {

// }

export default Card;