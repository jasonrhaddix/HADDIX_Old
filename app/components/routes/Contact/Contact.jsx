import React from 'react'

import Contact from '../../ui/Contact/Contact.jsx'
	


class ContactRoute extends React.Component {

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
			<div className="contact-route-container">
	        	<Contact />
	        </div>
		)
	}
}



export default ContactRoute


