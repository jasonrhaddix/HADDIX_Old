import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { spring, AnimatedSwitch } from 'react-router-transition'
// import PropTypes from 'prop-types'

import { setScrollPosition, setScrollHeight } from './actions'
import Routes from './Router.jsx'
import Header from './components/containers/Header'
import Navigation from './components/containers/Navigation'
import ProjectScrollIndicator from './components/containers/ProjectScrollIndicator'


// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import './assets/styles/scss/app.scss'
// import './assets/styles/css/global_components/reactScrollbar.css'



class App extends React.Component
{
	constructor(props, context)
	{
		super(props, context)

		this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            scrollPos: null
        }

        this.scrollPos = 0
        this.scrollHeight = 0

        this.setScrollHeight = this.setScrollHeight.bind(this)
	}


	setScrollHeight(e)
	{
		if( this.scrollInd ) this.scrollHeight = (document.getElementById("scroll-container").firstChild.scrollHeight - window.innerHeight)
		
		appStore.dispatch(
			setScrollHeight(this.scrollHeight)
		)
	}


	setScrollPos(e)
	{
		this.scrollPos = e.target.scrollTop

		appStore.dispatch(
			setScrollPosition(this.scrollPos)
		)


	}	


	handleResize(e)
	{
        this.setState({
	        windowWidth: window.innerWidth,
	        windowHeight: window.innerHeight,
        })
    }


    componentDidMount()
    {
		window.addEventListener('resize', ::this.handleResize) // :: for autobind via babel preset (stage-0)
    	document.getElementById("scroll-container").firstChild.addEventListener("scroll", ::this.setScrollPos)
    }



	componentDidUpdate()
	{
		this.setScrollHeight()
	}



	render() 
	{
		setTimeout(this.setScrollHeight, 500)

		const scrollbarProps = {	
			width: this.state.windowWidth,
			height: this.state.windowHeight,
	    }

	    appStore.dispatch(
			setScrollPosition(this.scrollPos)
		)

	   return (
		 	<Scrollbars id="scroll-container" style={{ width: this.state.windowWidth, height: this.state.windowHeight }}>
		 			<Header logo={require( `./assets/images/app/${this.props.data.logo}` )} title={this.props.data.title}/>
					<Navigation links={this.props.data.navigation}/>
        			<ProjectScrollIndicator ref={(ProjectScrollIndicator) => { this.scrollInd = ProjectScrollIndicator; }} className="project-scroll-ind-container"/>
					<div className="routes-container">
						{Routes}
					</div>
			</Scrollbars>
		)
	}
}



export default App