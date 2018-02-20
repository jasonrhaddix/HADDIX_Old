import React from 'react'


const ProjectDetail_Masthead = props => {

	const projectMasthead_Styles = {
		backgroundImage: "url(" + ` ${props.backgroundImage} ` + ")"
	}

	return (
		<div className="detail-masthead-container" style={projectMasthead_Styles}>
			<div className="detail-masthead-cover"/>
			<div className="detail-masthead-inner">
				<div className="detail-masthead-title">
					<img src={require('../../../../assets/images/app/lowpoly.svg')} />
					<h2>The Gary Group</h2>
					<h1>Holiday Card</h1>
				</div>
			</div>
		</div>
	)
}


export default ProjectDetail_Masthead