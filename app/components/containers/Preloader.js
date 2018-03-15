import React from 'react'
import { connect } from 'react-redux'

import Preloader from '../ui/Preloader/Preloader.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen,
	}
}



const Container = connect(mapPropsToState)(Preloader)
export default Container