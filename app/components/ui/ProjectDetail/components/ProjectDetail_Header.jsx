import React from 'react'


const ProjectDetail_Header = props => {

	return (
		<div className="detail-header">
			<div className="detail-header-inner">
				<h3>{props.description}</h3>
			</div>
		</div>
	)
}


export default ProjectDetail_Header