import React from 'react'


const ProjectDetail_WriteUp = props => {
	
	return (
		<div className="detail-writeup">
			<div className="detail-writeup-inner">
				<div className="writeup"><p dangerouslySetInnerHTML={{ __html: props.writeUp }}></p></div>
            </div>
		</div>
	)
}


export default ProjectDetail_WriteUp