import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Logo from '../Logo/Logo.jsx'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.jsx'

import { toggleNav } from '../../../actions'



class Header extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.state = {
			showHeader: true,
			currentPath: ""
		}
	}


	componentWillMount()
	{
		this.setState({ currentPath : this.props.currentPath })

		this.props.history.listen(() => {
			var path = this.props.history.location.pathname
			var headerState = ( path !== "/" ) ?  true : false
			this.setState({ showHeader: headerState })
		});
	}


	componentWillReceiveProps(newProps)
	{
		this.setState({currentPath: newProps.currentPath})
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
			<header className={`header-container ${this.state.showHeader}`} >
				<div className="app-logo-wrapper">
					<div className="app-logo">
						<Link to="/">
							<img alt={this.props.title} src={this.props.logo}/>
						</Link>
					</div>
					<div className={`breadcrumb-divider`} />
					<div className="breadcrumb-title">
						<h1>{this.state.currentPath}</h1>
					</div>
				</div>
				<HamburgerMenu onClickFun={this.toggleMenu} navState={this.props.navOpen}/>
			</header>
		)
	}
}


	
export default withRouter(Header)
