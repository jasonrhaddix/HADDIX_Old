import React from 'react'


const ProjectDetail_Masthead = props => {

	const projectMasthead_Styles = {
		backgroundImage: "url(" + ` ${props.backgroundImage} ` + ")"
	}

	console.log(props)

	return (
		<div className="detail-masthead">
			<div className="detail-masthead-background" style={projectMasthead_Styles}/>
			<div className="detail-masthead-overlay"/>
			<div className="detail-masthead-container">
				<div className="detail-masthead-title">
					<h2>{props.client}</h2>
					<h1>{props.title}</h1>
				</div>
			</div>
		</div>
	)
}


export default ProjectDetail_Masthead