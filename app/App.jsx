import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { spring, AnimatedSwitch } from 'react-router-transition'
import BrowserDetection from 'react-browser-detection';

import Routes from './Router.jsx'
import Header from './components/containers/Header'
import Navigation from './components/containers/Navigation'
import CloseButton from './components/ui/CloseButton/CloseButton.jsx'
import ProjectScrollIndicator from './components/containers/ProjectScrollIndicator'
import { setScrollPosition, setScrollHeight, toggleNav } from './actions'


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
            currentPath: "",
            activeNav: 0,
        }

        this.scrollPos = 0
        this.scrollHeight = 0

        this.setScrollHeight = this.setScrollHeight.bind(this)
        this.onNavClicked = this.onNavClicked.bind(this)
        this.isActive = this.isActive.bind(this)
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


    /*getInitialState()
    {
    	return { activeNav: 0 }
    }*/


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


	onNavClicked(el)
	{
		this.setActive(el.currentTarget.id)
		
		appStore.dispatch(
      		toggleNav( false )
        )
	}


	isActive(id)
	{	
		return this.state.activeNav == id
	}


	setActive(selectedNavId)
	{
		this.setState({ activeNav: selectedNavId })
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

		// console.log("App Component : Render()", this.state.activeNav)

		const browserHandler = {
			chrome: () => {
				return (
					<Scrollbars id="scroll-container" style={{ width: this.state.windowWidth, height: this.state.windowHeight }}>
						<Header logo={require( `./assets/images/app/${this.props.data.logo}` )} title={this.props.data.title} currentPath={this.state.currentPath}/>
						<Navigation links={this.props.data.navigation} onNavClicked={this.onNavClicked} isActive={this.isActive} activeNav={this.state.activeNav}/>
	        			<ProjectScrollIndicator ref={(ProjectScrollIndicator) => { this.scrollInd = ProjectScrollIndicator }} className="project-scroll-ind-container"/>
						<CloseButton buttonText="X" buttonPath="/work" currentPath={this.state.currentPath}/>
						<div className="routes-container">
							{Routes}
						</div>
					</Scrollbars>
				)
			},
			default: (browser) => {
				return (
					<div id="scroll-container">
						<Header logo={require( `./assets/images/app/${this.props.data.logo}` )} title={this.props.data.title} currentPath={this.state.currentPath}/>
						<Navigation links={this.props.data.navigation}/>
	        			<ProjectScrollIndicator ref={(ProjectScrollIndicator) => { this.scrollInd = ProjectScrollIndicator }} className="project-scroll-ind-container"/>
						<CloseButton buttonText="X" buttonPath="/work" currentPath={this.state.currentPath}/>
						<div className="routes-container">
							{Routes}
						</div>
					</div>
				)
			},
		};

		return (
			<BrowserDetection once={false}>
				{browserHandler}
			</BrowserDetection>
		)
	}
}



export default App