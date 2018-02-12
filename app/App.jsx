import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
import { spring, AnimatedSwitch } from 'react-router-transition';
// import PropTypes from 'prop-types'

import Routes from './Router.jsx'
import Header from './components/containers/Header'
import Navigation from './components/containers/Navigation'
import ProjectScrollIndicator from './components/containers/ProjectScrollIndicator'


import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
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
        }
	}


	handleResize(e) {
        this.setState({
	        windowWidth: window.innerWidth,
	        windowHeight: window.innerHeight,
        })
    }


    componentDidMount() {
        window.addEventListener('resize', ::this.handleResize) // :: for autobind via babel preset (stage-0)
    }


    componentWillUnmount() {
        window.removeEventListener('resize', ::this.handleResize)
    }


	render() 
	{
		const scrollbarProps = {	
			width: this.state.windowWidth,
			height: this.state.windowHeight,
	    }

		return (
			<BrowserRouter>
			 	<Scrollbars id="scroll-container" style={{ width: this.state.windowWidth, height: this.state.windowHeight }} >
			 		{/*<div>*/}
						<Header logo={require( `./assets/images/app/${this.props.data.logo}` )} title={this.props.data.title}/>
						<Navigation links={this.props.data.navigation}/>
            			<ProjectScrollIndicator className="project-scroll-ind-container"/>
						<div className="routes-container">
							{Routes}
						</div>
					{/*</div>*/}
				</Scrollbars>
			</BrowserRouter>
		)
	}
}



export default App