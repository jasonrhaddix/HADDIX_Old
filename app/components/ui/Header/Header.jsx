import React from 'react'
import { Link } from 'react-router-dom'

import HamburgerMenu from '../../ui/HamburgerMenu/HamburgerMenu.jsx'

import { toggleNav } from '../../../actions'



class Header extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.state = {
			scrollInterval: null,
			showHeaderBg: false,
			prevShowHeaderBg: true,
		}

		this.checkScrollPos = this.checkScrollPos.bind(this)
		this.toggleMenu = this.toggleMenu.bind(this)
	}


	componentWillMount()
	{
		const showHeaderBg = ( document.documentElement.scrollTop > 625 ) ? true : false
		if( showHeaderBg !== this.state.prevShowHeaderBg) this.setState({showHeaderBg: showHeaderBg, prevShowHeaderBg: showHeaderBg})
	}


	componentDidMount()
	{
		const scrollInterval = setInterval(this.checkScrollPos, 10)
		this.setState({scrollInterval: scrollInterval})
	}


	componentWillUnmount()
	{
	   clearInterval(this.state.scrollInterval)
	}


	checkScrollPos()
	{
		const showHeaderBg = ( document.documentElement.scrollTop > 800 ) ? true : false
		if( showHeaderBg !== this.state.prevShowHeaderBg) this.setState({showHeaderBg: showHeaderBg, prevShowHeaderBg: showHeaderBg})
	}


	toggleMenu()
	{
		const menuState = !appStore.getState().navOpen
		
		appStore.dispatch(
			toggleNav( menuState )
		)
	}


	render()
	{
		return (
			<header className="header-container">
				<div className={`header-bg show-bg ${this.state.showHeaderBg}`}/>
				<div className="app-logo">
					<Link to="/about"><img alt={this.props.title} src={this.props.logo}/></Link>
				</div>
				<HamburgerMenu onClickFun={this.toggleMenu} navState={this.props.navOpen}/>
			</header>
		)
	}
}


	
export default Header
