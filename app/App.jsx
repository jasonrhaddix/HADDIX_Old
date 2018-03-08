import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { spring, AnimatedSwitch } from 'react-router-transition'

import { setScrollPosition, setScrollHeight } from './actions'
import Routes from './Router.jsx'
import Header from './components/containers/Header'
import Navigation from './components/containers/Navigation'
import CloseButton from './components/ui/CloseButton/CloseButton.jsx'
import ProjectScrollIndicator from './components/containers/ProjectScrollIndicator'


// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import './assets/styles/scss/app.scss'



class App extends React.Component
{
	
	constructor(props, context)
	{
		super(props, context)

		this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            scrollPos: null,
            currentPath: ""
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


    componentWillMount()
    {
    	this.getCurrentPath()
    }


    componentDidMount()
    {
		window.addEventListener('resize', ::this.handleResize)
    	try{
    		document.getElementById("scroll-container").firstChild.addEventListener("scroll", ::this.setScrollPos)
    	} catch(err){
    		console.warn("Cannot get scroll-container: App.jsx")
    	}
    }


	componentDidUpdate(prevProps)
	{
		this.setScrollHeight()


		if (this.props.location !== prevProps.location) {
			if( this.props.location.hash === "") this.onRouteChanged()
	  		this.getCurrentPath()
		}
	}


	getCurrentPath()
	{
		let path = this.props.history.location.pathname
    	path = path.substring(path.lastIndexOf("/") + 1)
    	path = path.split("_").join(" ")

    	this.setState({ currentPath : path })
	}


	onRouteChanged()
	{
		setTimeout( function()
		{
			document.getElementById("scroll-container").firstChild.scrollTop = 0
		}, 50)
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
		 			<Header logo={require( `./assets/images/app/${this.props.data.logo}` )} title={this.props.data.title} currentPath={this.state.currentPath}/>
					<Navigation links={this.props.data.navigation}/>
        			<ProjectScrollIndicator ref={(ProjectScrollIndicator) => { this.scrollInd = ProjectScrollIndicator }} className="project-scroll-ind-container"/>
					<CloseButton buttonText="X" buttonPath="/work" currentPath={this.state.currentPath}/>
					<div className="routes-container">
						{Routes}
					</div>
			</Scrollbars>
		)
	}
}



export default App