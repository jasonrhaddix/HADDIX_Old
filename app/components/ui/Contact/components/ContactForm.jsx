import React from 'react'

import TextField from 'material-ui/TextField'
// import AppButton from '../../AppButton/AppButton.jsx'
// import Button from 'material-ui/Button'



const ContactForm = ({underlineColor}) => {

	const textField_Styles = {
		fontWeight: 300
	}

	const textField_Styles_Floating = {
		fontWeight: 500,
	}

	const textField_Styles_FloatingShrink = {
		fontWeight: 500,
		color: '#242428'
	}

	return (
		<form className="contact-form">
			<div className="contact-text-name">
				<TextField
					inputStyle={textField_Styles}
					floatingLabelShrinkStyle={textField_Styles_FloatingShrink}
					fullWidth={true}
					underlineFocusStyle={{ borderBottom: `1px solid ${underlineColor}` }} 
					hintText=""
					floatingLabelText="NAME"
					floatingLabelStyle={textField_Styles_Floating}
				/>
			</div>

			<div className="contact-text-email">
				<TextField
					inputStyle={textField_Styles}
					floatingLabelShrinkStyle={textField_Styles_FloatingShrink}
					fullWidth={true}
					underlineFocusStyle={{ borderBottom: `1px solid ${underlineColor}` }} 
					hintText=""
					floatingLabelText="EMAIL"
					floatingLabelStyle={textField_Styles_Floating}
				/>
			</div>

			<div className="contact-text-message">
				<TextField
					inputStyle={textField_Styles}
					floatingLabelShrinkStyle={textField_Styles_FloatingShrink}
					fullWidth={true}
					multiLine={true}
					underlineFocusStyle={{ borderBottom: `1px solid ${underlineColor}` }} 
					hintText=""
					floatingLabelText="MESSAGE"
					floatingLabelStyle={textField_Styles_Floating}
				/>
			</div>
			<div className="contact-form-submit">
				<button type="submit" >Submit</button>
			</div>
		</form>
	)
}


export default ContactForm