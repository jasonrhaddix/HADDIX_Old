import React from 'react'

import About_ProfilePhoto from './components/About_ProfilePhoto.jsx'
import SocialMediaList from '../SocialMediaList/SocialMediaList.jsx'
import About_Bio from './components/About_Bio.jsx'
import About_Skillset from './components/About_Skillset.jsx'
import About_Experience from './components/About_Experience.jsx'
import About_Clients from './components/About_Clients.jsx'
import AppButton from '../../ui/AppButton/AppButton.jsx'



class About extends React.Component {

	constructor(props)
	{
		super(props)

		this.state = {
			/* */
		}
	}


	render()
	{
		return (
			<div className="about-container">
				<div className="about-inner">
					<About_ProfilePhoto profilePhoto={require('../../../assets/images/app/profile-photo.png')} />
					<SocialMediaList />
					<div className="about-divider" />
					<About_Bio />
					<div className="about-divider" />
					<About_Skillset />
					<div className="about-divider" />
					<About_Experience />
					<div className="about-divider" />
					<About_Clients />
					<div className="about-divider last-item" />
					<AppButton buttonText="Contact" buttonPath="/contact">Get In Touch</AppButton>
				</div>
			</div>
		)
	}
}



export default About