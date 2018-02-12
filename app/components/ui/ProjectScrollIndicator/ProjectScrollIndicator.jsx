import React from 'react'
import uuid from 'uuid'
import { setActiveProjectScroll } from '../../../actions'
// import VisibilitySensor from 'react-visibility-sensor'

import ProjectsData from '../../../models/projectsData.js'
import ScrollToAnchor from '../../util/ScrollToAnchor/ScrollToAnchor.jsx'


class ProjectScrollIndicator extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			/**/
		}

		this.indicators = []
	}

	componentWillMount() {
		appStore.subscribe(() => {
			this.checkProjectScrollPosition( appStore.getState()["scrollProject"] )
		})
	}


	componentDidMount() {
		
		/* loop through all indicators to be saved for reference */
		var collection = document.getElementsByClassName("indicator-container")
		var containers = [].slice.call(collection);
		
		for( var i = 0; i < containers.length; ++i)
		{
			var el = containers[i]
	    	var svg = el.getElementsByTagName("svg")[0]
	    	var tag = el.getElementsByClassName("tag")[0]
    		
    		this.indicators.push({svg:svg, tag:tag})
			
		}
	}


	componentWullUnmout() {

	}


	checkProjectScrollPosition( sPos ) {
		
		/* loop through all indicators and turn BG black, then set current to white */
		for(var i = 0; i < this.indicators.length; ++i)
		{
			this.indicators[i].svg.style.fill = 'black'
		}

		this.indicators[sPos].svg.style.fill = 'white'
		
	}


	loadProjects()
    {
        this.projectsMap = ProjectsData.map( function(data, i) {

        	return (
                <li className="indicator-container" id={data.index} key={uuid.v4()}>
                	<ScrollToAnchor to={`#${data.anchor}`} animate={{ duration: 300 }} className="nav-link">
						<div className="tag">
							<p>Gary Group Holiday Card</p>
						</div>
						<div className="indicator">
							<svg viewBox="0 0 48 41.57"><polygon points="1.3 40.82 24 1.5 46.7 40.82 1.3 40.82"/><path d="M25,3.72,35.7,22.25,46.4,40.78H3.6L14.3,22.25,25,3.72m0-3L13,21.5,1,42.28H49L37,21.5,25,.72Z" transform="translate(-1 -0.72)"/></svg>
						</div>
					</ScrollToAnchor>
				</li>
            )

        }, this)

        return this.projectsMap
    }


	render() {
		return (
			<div className="project-scroll-ind-container">
				{/*<div className="line-ind-container">
					<div className="line-ind" />
				</div>*/}
				<ul>
					{this.loadProjects()}
				</ul>
			</div>
		)
	}
}



export default ProjectScrollIndicator