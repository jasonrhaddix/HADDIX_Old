import React from 'react'



const About_ProfilePhoto = ({profilePhoto}) => {
	return (
		<div className="about-profilePhoto-container">
			<div className="about-profilePhoto-inner">
				<img src={profilePhoto} />
			</div>
		</div>
	)
}



export default About_ProfilePhoto