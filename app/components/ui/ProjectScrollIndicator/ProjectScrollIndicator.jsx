import React from 'react'
import uuid from 'uuid'
import { withRouter } from 'react-router-dom'

import { setActiveProjectScroll } from '../../../actions'

import ScrollToAnchor from '../../util/ScrollToAnchor/ScrollToAnchor.jsx'





class ProjectScrollIndicator extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			showInd: false,
			currPath: "",
			activeInd: 0,
		}

		this.indicators = []

		this.startScroll = 0;
		this.maxScroll = 0;
		this.numOfElements = 0;
		this.currPos = 0;
		this.currProject = 0;
		this.prevProject = 0;

		this.setIndicatorState = this.setIndicatorState.bind(this)
	}



	componentWillMount()
	{
		appStore.subscribe(() => {
			// this.checkProjectIndPosition( appStore.getState()["scrollProject"] )
			this.checkScrollPosition( appStore.getState()["scrollHeight"], appStore.getState()["scrollPos"] )
		})

		this.setIndicatorState()
		this.setState({ currentPath : this.props.currentPath })
		
		this.props.history.listen(() => {
			this.setIndicatorState()
		});
	}



	componentDidMount()
	{	
		var collection = document.getElementsByClassName("indicator-container")
		var containers = [].slice.call(collection);
		
		this.numOfElements = containers.length;

		for( var i = 0; i < containers.length; ++i)
		{
			var el = containers[i]
	    	var svg = el.getElementsByTagName("svg")[0]
	    	var tag = el.getElementsByClassName("tag")[0]
    		
    		this.indicators.push({svg:svg, tag:tag})
		}
	}


	setIndicatorState()
	{
		let path = this.props.history.location.pathname
		let indState = ( path !== "/work" ) ?  false : true
		this.setState({ showInd: indState })
	}
	


	checkProjectIndPosition( scrollHeight, scrollPos )
	{	
		this.currPos = scrollPos;
		this.maxScroll = scrollHeight + 1

		const delta = this.maxScroll / this.numOfElements
		this.currProject = Math.floor( this.currPos / delta )
		
		if( this.currProject !== this.prevProject ) {
			this.prevProject = this.currProject
			this.setState({ activeInd: this.currProject })
		}		
	}



	checkScrollPosition( scrollHeight, scrollPos )
	{	
		try{
    		const delta = scrollHeight / this.refs.scrollIndInner.offsetHeight
			/*document.getElementById("scroll-ind-inner").style.top = String(-(scrollPos) / delta + "px")*/
    	} catch(err){
    		console.warn("Cannot get scroll-container: ProjectScrollIndicator.jsx")
    	}

		
		this.checkProjectIndPosition( scrollHeight, scrollPos )
	}



	loadProjects()
    {
        this.projectsMap = this.props.projects.map( function(data, i)
        {
        	return (
                <li className="indicator-container" id={data.index} key={uuid.v4()}>
						<div className={`tag ${(this.state.activeInd === i) ? "active" : ""}`}>
							<p>Gary Group Holiday Card</p>
						</div>
                	<ScrollToAnchor to={`#${data.anchor}`} animate={{ duration: 600 }} className="nav-link">
						<div className={`indicator ${(this.state.activeInd === i) ? "active" : ""}`}>
							<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 108.29 124.5">
								<path d="M65.16,3.65,118.07,34.2V95.3L65.16,125.85,12.25,95.3V34.2L65.16,3.65m0-1.15L11.25,33.63V95.88L65.16,127l53.91-31.12V33.63L65.16,2.5Z" transform="translate(-11.01 -2.5)"/>
								<path d="M65.16,5.11,117.56,95H12.75L65.16,5.11m0-2L11,96H119.3L65.16,3.12Z" transform="translate(-11.01 -2.5)"/>
								<path d="M90.32,50.22,65.16,93.8,40,50.22H90.32m1.73-1H38.26L65.16,95.8,92,49.22Z" transform="translate(-11.01 -2.5)"/>
								<line className="cls-1" x1="0.61" y1="31.13" x2="28" y2="47.31"/>
								<line className="cls-1" x1="107.68" y1="31.13" x2="80.29" y2="47.31"/>
								<line className="cls-1" x1="54.15" y1="124.5" x2="54.15" y2="92.13"/>
							</svg>
							{/*<svg viewBox="0 0 48 41.57"><polygon points="1.3 40.82 24 1.5 46.7 40.82 1.3 40.82"/><path d="M25,3.72,35.7,22.25,46.4,40.78H3.6L14.3,22.25,25,3.72m0-3L13,21.5,1,42.28H49L37,21.5,25,.72Z" transform="translate(-1 -0.72)"/></svg>*/}
						</div>
					</ScrollToAnchor>
				</li>
            )

        }, this)

        return this.projectsMap
    }



	render()
	{
		return (
			<div className={`project-scroll-ind-container ${this.state.showInd}`}>
				<div className="scroll-ind-inner" id="scroll-ind-inner" ref="scrollIndInner">
					{/*<div className="line-ind-container">
						<div className="line-ind" />
					</div>*/}
					<ul className="project-list">
						{this.loadProjects()}
					</ul>
				</div>
			</div>
		)
	}
}



export default withRouter(ProjectScrollIndicator)
