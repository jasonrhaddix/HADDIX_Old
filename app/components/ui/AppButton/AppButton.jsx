import React from 'react'
import { Link } from 'react-router-dom'



const AppButton = ({buttonText, buttonPath}) => {
	return (
		<Link to={buttonPath}>
			<div className="app-button">
				<div className="button-text">{buttonText}</div>
				<div className="animated-button-bg-under"/>
				<div className="animated-button-bg"/>
				<div className="animated-button-text">{buttonText}</div>
			</div>
		</Link>
	)
}



export default AppButton
