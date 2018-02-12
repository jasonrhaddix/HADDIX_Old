import React from 'react'
import { Link, withRouter } from 'react-router-dom'



class ProjectDetail extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.state = {
		}
	}


	componentWillMount()
	{
		/**/
	}


	componentDidMount()
	{
		/**/
	}


	componentWillUnmount()
	{
	   /**/
	}


	render()
	{
		// console.log( this.props )
		return (
			<div>
				Hi, My Name is...
				{this.props.match.params.name}
			</div>
		)
	}
}


	
export default withRouter(ProjectDetail)
