import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ContactForm from './components/ContactForm.jsx'
import GoogleMaps from '../GoogleMaps/GoogleMaps.jsx'



class Contact extends React.Component {

	constructor(props)
	{
		super(props)

		this.state = {
			/* */
		}
	}


	render()
	{
		return (
			<div className="contact-wrapper">
			<div className="contact-container">
				<div className="contact-inner">
					<h1>Drop me a line</h1>
					<MuiThemeProvider>
						<ContactForm underlineColor={'#3100bd'} />
					</MuiThemeProvider>
				</div>
			</div>
				<GoogleMaps />
			</div>
		)
	}
}



export default Contact