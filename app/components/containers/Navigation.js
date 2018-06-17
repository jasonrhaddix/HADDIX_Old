import React from 'react'
import { connect } from 'react-redux'

import Navigation from '../ui/Navigation/Navigation.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen
	}
}



const Container = connect(mapPropsToState)(Navigation)
export default Container