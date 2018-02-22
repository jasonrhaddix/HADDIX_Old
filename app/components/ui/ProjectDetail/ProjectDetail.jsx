import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import ProjectDetail_Masthead from './components/ProjectDetail_Masthead.jsx'
import ProjectDetail_SpecsHeader from './components/ProjectDetail_SpecsHeader.jsx'
import ProjectDetail_Header from './components/ProjectDetail_Header.jsx'
import ProjectDetail_Video from './components/ProjectDetail_Video.jsx'
import ProjectDetail_WriteUp from './components/ProjectDetail_WriteUp.jsx'
import ProjectDetail_CodeMirror from './components/ProjectDetail_CodeMirror.jsx'

import codeSnippets from '../../../store/code_snippets'

const imagesPath = require.context('../../../assets/images/projects', true);




class ProjectDetail extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.state = {
			showingSpecsState: false,
			lastShowingSpecsState: false
		}

		this.getScrollPos = this.getScrollPos.bind(this)
	}


	componentWillMount()
	{
		this.project = this.props.projects.filter( project => project.anchor === this.props.match.params.name )
		this.codeObj = codeSnippets.filter( snippet => snippet.anchor === this.props.match.params.name )
	}


	componentDidMount()
	{
		document.getElementById("scroll-container").firstChild.addEventListener('scroll', this.getScrollPos);
	}


	getScrollPos()
	{
		const scrollPos = document.getElementById("scroll-container").firstChild.scrollTop
		
		if( scrollPos > 25 && !this.state.showingSpecsState) {
			this.setState({ showingSpecsState:true })
		
		} else if( scrollPos < 25 && this.state.showingSpecsState) {
			this.setState({ showingSpecsState:false })	
		}
	}


	render()
	{
		let mastheadImg = imagesPath(`./${this.project[0].anchor}/${this.project[0].mainImg}.jpg`)
		let video = imagesPath(`./${this.project[0].anchor}/${this.project[0].video}.mp4`)
		let snippet = this.codeObj[0].snippet
		let technologies = this.codeObj[0].technologies

		return (
			<div className="project-detail-container">
				<ProjectDetail_Masthead backgroundImage={mastheadImg} />
				<div className="content-container">
					<div className="content-container-inner">
						<ProjectDetail_SpecsHeader showingSpecs={this.state.showingSpecsState}/>
						<ProjectDetail_Header/>
						<ProjectDetail_Video projectVideo={video}/>
						<ProjectDetail_WriteUp />
					</div>
				</div>
				<ProjectDetail_CodeMirror snippet={snippet} technologies={technologies} />
			</div>
		)
	}
}


	
export default withRouter(ProjectDetail)
