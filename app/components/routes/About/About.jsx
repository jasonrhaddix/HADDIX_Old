import React from 'react'
import DocumentTitle from 'react-document-title'

import About from '../../ui/About/About.jsx'
	


class AboutRoute extends React.Component {

	constructor(props)
	{
		super(props)

		this.state = {
			/**/
		}
	}

	render()
	{
		return (
			<div className="about-route-container">
	        	<About />
	        </div>
		)
	}
}



export default AboutRoute


