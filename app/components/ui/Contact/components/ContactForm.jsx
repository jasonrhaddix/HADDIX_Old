import React from 'react'
import { Field, reset, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import validate from '../js/validate'
import asyncValidate from '../js/asyncValidate'
import AppButton from '../../AppButton/AppButton.jsx'
// import Button from 'material-ui/Button'





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

const textField_Styles_Underline = {
	borderBottom: '1px solid #3100bd'
}





const renderTextField = (
  { input, multiLine, label, meta: { touched, error }, ...custom },
) => (

  <TextField
  	inputStyle={textField_Styles}
  	multiLine={multiLine}
  	floatingLabelShrinkStyle={textField_Styles_FloatingShrink}
	fullWidth={true}
	underlineFocusStyle={textField_Styles_Underline} 
	hintText=""
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />

);





const ContactForm = props => {

	const { handleSubmit, pristine, reset, submitting } = props

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} method="post" className="contact-form">
				<div className="form-textfield-fname-container">
					<Field name="firstName" component={renderTextField} label="First Name" multiLine={false}/>
				</div>	

				<div className="form-textfield-lname-container">
					<Field name="lastName" component={renderTextField} label="Last Name" multiLine={false}/>
				</div>

				<div className="form-textfield-email-container">
					<Field name="email" component={renderTextField} label="Email" multiLine={false}/>
				</div>

				<div className="form-textfield-message-container">
					<Field name="message" component={renderTextField} label="Message" multiLine={true}/>
				</div>

				<div className="form-submit-btn">
					<button type="submit" disabled={submitting}><AppButton buttonText="Submit" /></button>
		      		<div className="form-response-msg"><p>{props.responseMsg}</p></div>
		      	</div>
			</form>
			<div className={`form-submit-overlay ${props.isSubmitting}`}>
				<div className="form-submit-loader">
					Submitting
				</div>
			</div>
		</div>
	)
}





export default reduxForm({
  form: 'ReduxContactForm',
  validate,
  // asyncValidate
})(ContactForm)
