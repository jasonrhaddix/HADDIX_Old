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
			// responseCode: null,
			responseMsg: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
	}



	handleSubmit(e)
	{	
		this.setState({ isSubmitting: true })
		
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
					/* */
					break;

				case 403 :
					/* */
					break;

				case 404 :
					/* */
					break;

				case 500 :
					/* */
					break;

				default :
					/* */
					break;
			}

			this.setState({ isSubmitting: false })
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
							<ContactForm onSubmit={this.handleSubmit} isSubmitting={this.state.isSubmitting} />
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