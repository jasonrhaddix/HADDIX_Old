import React from 'react'
import { connect } from 'react-redux'

import ProjectDetail from '../ui/ProjectDetail/ProjectDetail.jsx'



const mapPropsToState = (state) => {

	return {
		navOpen: state.navOpen
	}
}



const Container = connect(mapPropsToState)(ProjectDetail)
export default Container