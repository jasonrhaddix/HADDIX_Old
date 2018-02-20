import React from 'react'
import { connect } from 'react-redux'

import ProjectScrollIndicator from '../ui/ProjectScrollIndicator/ProjectScrollIndicator.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen,
		scrollHeight: state.scrollHeight,
		projects: state.projects
	}
}



const Container = connect(mapPropsToState)(ProjectScrollIndicator)
export default Container