import React from 'react'


const ProjectDetail_Video = props => {

	/*const projectVideo_Styles = {
		backgroundImage: "url(" + ` ${props.projectVideo} ` + ")"
	}*/
	return (
		<div className="detail-video">
			<div className="detail-video-inner">
				<video className="project-video" autoPlay muted playsInline loop >
	                <source src={`${props.projectVideo}`} type="video/mp4"/>
	            </video>
            </div>
		</div>
	)
}


export default ProjectDetail_Video