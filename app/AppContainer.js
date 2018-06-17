import React from 'react'
import { withRouter } from 'react-router-dom'

import App from './App.jsx'



class AppContainer extends React.Component {

	componentWillMount() {
		this.unlisten = this.props.history.listen((location, action) => {
			console.log("on route change")
		})
	}
	

	componentWillUnmount() {
		this.unlisten()
	}


	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}



export default withRouter(App)