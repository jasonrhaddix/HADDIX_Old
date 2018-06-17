import React from 'react'
import { connect } from 'react-redux'

import Logo from '../ui/Logo/Logo.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen
	}
}



const Container = connect(mapPropsToState)(Logo)
export default Container