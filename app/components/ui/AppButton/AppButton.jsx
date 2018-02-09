import React from 'react'
import { Link } from 'react-router-dom'



const AppButton = () => {
	return (
		<Link to='/work'>
			<div className="app-button">
				<p>View Work</p>
				<div className="animated-button-bg-under"/>
				<div className="animated-button-bg"/>
				<p className="animated-button-text">View Work</p>
			</div>
		</Link>
	)
}



export default AppButton
