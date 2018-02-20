import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import ProjectDetail_Masthead from './components/ProjectDetail_Masthead.jsx'
import ProjectDetail_Header from './components/ProjectDetail_Header.jsx'
import ProjectDetail_Video from './components/ProjectDetail_Video.jsx'
import ProjectDetail_Specs from './components/ProjectDetail_Specs.jsx'
import ProjectDetail_WriteUp from './components/ProjectDetail_WriteUp.jsx'


const imagesPath = require.context('../../../assets/images/projects', true);



class ProjectDetail extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.state = {
			/**/
		}
	}


	componentWillMount()
	{
		this.project = this.props.projects.filter( project => project.anchor === this.props.match.params.name )
	}


	render()
	{
		let mastheadImg = imagesPath(`./${this.project[0].projectFolder}/${this.project[0].images[0]}.jpg`)
		let video = imagesPath(`./${this.project[0].projectFolder}/${this.project[0].video}.mp4`)


		return (
			<div className="project-detail-container">
				<ProjectDetail_Masthead backgroundImage={mastheadImg} />
				<div className="content-container">
					<div className="content-container-inner">
						<ProjectDetail_Header/>
						<ProjectDetail_Video projectVideo={video}/>
						<ProjectDetail_WriteUp />
					</div>
				</div>
				{/*<ProjectDetail_Specs />*/}
				{/*<div className="content-container">
					<div className="content-container-inner">
					</div>
				</div>*/}
			</div>
		)
	}
}


	
export default withRouter(ProjectDetail)
