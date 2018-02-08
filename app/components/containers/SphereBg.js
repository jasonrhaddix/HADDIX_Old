import React from 'react'
import { connect } from 'react-redux'

import SphereBg from '../ui/SphereBg/SphereBg.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen
	}
}



const Container = connect(mapPropsToState)(SphereBg)
export default Container