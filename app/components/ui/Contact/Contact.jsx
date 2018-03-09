import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ContactForm from './components/ContactForm.jsx'
import GoogleMaps from '../GoogleMaps/GoogleMaps.jsx'

import { reduxForm, reset } from 'redux-form';



class Contact extends React.Component {

	constructor(props)
	{
		super(props)

		this.state = {
			formSent: false,
			isSubmitting: false, 
			responseMsg: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		appStore.dispatch( reset('ReduxContactForm') )
	}



	handleSubmit(e)
	{	
		let msg = ""
		this.setState({ isSubmitting: true, responseMsg: msg })
		
		fetch("./send-mail.php", {
			method: "POST",
			headers: {
				'accept': 'application/json',
				'content-type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				firstName: e.firstName,
				lastName: e.lastName,
				email: e.email,
				message: e.message
			}),
			// cors: 'no-cors'
		})
		.then( (response) => {
			console.log(response.status, "done!")

			switch(response.status)
			{
				case 200 :
					msg = "Email sent! Thank you."
					break;

				case 400 :
					msg = "[400] Somehow, one of the required fields is empty"
					break;

				case 403 :
					msg = "[403] Bad request : method is not POST."
					break;

				case 404 :
					msg = "[404] Cannot find 'send-mail.php'."
					break;

				case 500 :
					msg = "This is embarassing. Something went wrong :/"
					break;

				default :
					msg = "This is embarassing. Something went wrong :/"
					break;
			}

			this.setState({ isSubmitting: false, responseMsg: msg })
			appStore.dispatch( reset('ReduxContactForm') )
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
							<ContactForm onSubmit={this.handleSubmit} isSubmitting={this.state.isSubmitting} responseMsg={this.state.responseMsg} />
						</MuiThemeProvider>
					</div>
					<GoogleMaps />
				</div>
			</div>
		)
	}
}



// export default reduxForm({form:'ReduxContactForm'})(Contact)
export default Contact