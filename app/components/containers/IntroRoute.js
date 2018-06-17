import React from 'react'
import { connect } from 'react-redux'

import Intro from '../routes/Intro/Intro.jsx'



const mapPropsToState = (state) => {

	return {
		animateLogo: state.animateLogo
	}
}



const Container = connect(mapPropsToState)(Intro)
export default Container