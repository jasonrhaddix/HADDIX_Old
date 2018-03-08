import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import Logo from '../Logo/Logo.jsx'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.jsx'

import { toggleNav } from '../../../actions'



class Header extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			showHeader: false,
			currentPath: ""
		}

		this.setHeaderState = this.setHeaderState.bind(this)
	}


	componentWillMount()
	{
		this.setHeaderState()
		this.setState({ currentPath : this.props.currentPath })

		this.props.history.listen(() => {
			this.setHeaderState()
		});
	}


	componentWillReceiveProps(newProps)
	{
		if(newProps.currentPath)
		{
			var path = newProps.currentPath
			var letter = path.split('')[0]

			var newPath = path.replace(letter, function (g) { return g.toUpperCase(); });
		
			this.setState({currentPath: newPath})
		} else {
			this.setState({currentPath: ""})
		}

		
	}





	toggleMenu()
	{
		const menuState = !appStore.getState().navOpen
		
		appStore.dispatch(
			toggleNav( menuState )
		)
	}


	setHeaderState()
	{
		var path = this.props.history.location.pathname
		var headerState = ( path !== "/" ) ?  true : false
		this.setState({ showHeader: headerState })
	}


	render()
	{
		return (
			<DocumentTitle title={`HADDIX | ${this.state.currentPath}`} className="home-container">
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
			</DocumentTitle>
		)
	}
}


	
export default withRouter(Header)