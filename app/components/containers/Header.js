import React from 'react'
import { connect } from 'react-redux'

import Header from '../ui/Header/Header.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen
	}
}



const Container = connect(mapPropsToState)(Header)
export default Container