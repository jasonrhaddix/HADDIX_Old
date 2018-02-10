import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import ScrollToAnchor from '../../util/ScrollToAnchor/ScrollToAnchor.jsx'

import Logo from '../Logo/Logo.jsx'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.jsx'

import { toggleNav } from '../../../actions'



class Header extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.state = {
			showHeader: true
		}
	}


	componentWillMount()
	{
		this.props.history.listen(() => {
			var path = this.props.history.location.pathname
			var headerState = ( path !== "/" ) ?  true : false
			this.setState({ showHeader: headerState })
		});
	}


	componentDidMount()
	{
		/**/
	}


	componentWillUnmount()
	{
	   /**/
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
				<div className="app-logo">
					<Link to="/"><img alt={this.props.title} src={this.props.logo}/></Link>
				</div>
				<HamburgerMenu onClickFun={this.toggleMenu} navState={this.props.navOpen}/>
				<ScrollToAnchor to="#3" animate={{ duration: 600 }} className="nav-link">SCROLL</ScrollToAnchor>
			</header>
		)
	}
}


	
export default withRouter(Header)
