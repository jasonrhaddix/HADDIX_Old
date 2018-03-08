import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import validate from '../js/validate'
import asyncValidate from '../js/asyncValidate'
// import AppButton from '../../AppButton/AppButton.jsx'
// import Button from 'material-ui/Button'




/*const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'message',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}
*/




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
				<button type="submit" disabled={pristine || submitting}>Submit</button>
	      	</div>
		</form>
	)
}



export default reduxForm({
  form: 'ReduxContactForm', // a unique identifier for this form
  validate,
  asyncValidate
})(ContactForm)







{/*<form className="contact-form">
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
</form>*/}