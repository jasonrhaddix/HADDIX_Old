import React from 'react'
import { Link } from 'react-router-dom'



const AppButton = ({buttonText, buttonPath}) => {
	if( buttonPath )
	{
		return (
			<div className="appbutton-container">
				<Link to={buttonPath}>
					<div className="app-button">
						<div className="button-text">{buttonText}</div>
						<div className="animated-button-bg-under"/>
						<div className="animated-button-bg"/>
						<div className="animated-button-text">{buttonText}</div>
					</div>
				</Link>
			</div>
		)
	} else {
		return (
			<div className="appbutton-container">
				{/*<Link to={buttonPath}>*/}
					<div className="app-button">
						<div className="button-text">{buttonText}</div>
						<div className="animated-button-bg-under"/>
						<div className="animated-button-bg"/>
						<div className="animated-button-text">{buttonText}</div>
					</div>
				{/*</Link>*/}
			</div>
		)
	}
}



export default AppButton
