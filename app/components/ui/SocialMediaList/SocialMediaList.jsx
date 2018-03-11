import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands)


const SocialMediaList = () => {
	
	return (
		<div className="socialmedia-container">
			<div className="socialmedia-inner">
				<ul>
					<li><a href="http://github.com/jasonrhaddix" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} size="3x" /></a></li>
					<li><a href="https://twitter.com/jasonrhaddix" target="_blank"><FontAwesomeIcon icon={["fab", "codepen"]} size="3x" /></a></li>
					<li><a href="https://www.linkedin.com/in/jasonrhaddix/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin-in"]} size="3x" /></a></li>
					<li><a href="https://codepen.io/Jasonrhaddix/" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} size="3x" /></a></li>
				</ul>
			</div>
		</div>
	)
}



export default SocialMediaList