import React from 'react'
import { connect } from 'react-redux'

import ProjectsList from '../ui/ProjectsList/ProjectsList.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen,
		projectsTotal: state.projects.length,
		projects: state.projects
	}
}



const Container = connect(mapPropsToState)(ProjectsList)
export default Container