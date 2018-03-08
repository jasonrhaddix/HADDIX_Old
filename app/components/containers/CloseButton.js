import React from 'react'
import { connect } from 'react-redux'

import CloseButton from '../ui/CloseButton/CloseButton.jsx'



const mapPropsToState = (state) => {

	return {
		showCloseButton: state.showCloseButton
	}
}



const Container = connect(mapPropsToState)(CloseButton)
export default Container