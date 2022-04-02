import React from 'react'
import ReactDOM from 'react-dom';
import  '../../styles/Modal.css';

const ModalPortals = ({show,hide,children}) => {
	console.log(show);
	if(!show) return (
			<React.Fragment></React.Fragment>
		);
	return ReactDOM.createPortal(
		<React.Fragment>
			<div className="backgroundoverlay"></div>
			<div className="modaloverlay">
			<div>
		{children}
			<button className="closemodal" onClick={hide}>close</button>
			</div></div>
		</React.Fragment>
		,document.getElementById('protals')
		);
}

export default ModalPortals;