import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ContactForm from './components/ContactForm.jsx'
import GoogleMaps from '../GoogleMaps/GoogleMaps.jsx'



class Contact extends React.Component {

	constructor(props)
	{
		super(props)

		this.state = {
			formSent: false, 
			email: ""
		}
	}



	handleSubmit(e) {

		fetch("./send-mail.php", {
			method: "POST",
			headers: {
				'accept': 'application/json',
				'content-type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				firstName: "test fname",
				lastName: "test lname",
				email: "skippyjone@jonestesttest.com",
				message: "WTF have you done lately?"
			}),
			// cors: 'no-cors'
		})
		.then( (response) => { 
			console.log(response, "woop")
		});

	}


	render()
	{
		return (
			<div className="contact-wrapper">
				<div className="contact-container">
					<div className="contact-inner">
						<h1>Drop me a line</h1>
						<MuiThemeProvider>
							<ContactForm onSubmit={this.handleSubmit} />
						</MuiThemeProvider>
					</div>
					<GoogleMaps />
				</div>
			</div>
		)
	}
}



export default Contact