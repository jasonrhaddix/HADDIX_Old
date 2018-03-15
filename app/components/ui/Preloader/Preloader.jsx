import React from 'react'
import PreloaderAni from './js/preloader-threejs.js'

import { animateLogo } from '../../../actions'


class Preloader extends React.Component {

	constructor(props)
	{
		super(props)

		this.initLogo = this.initLogo.bind(this)
	}


	componentDidMount() {
		this.refs.preloaderThreeContainer.appendChild(PreloaderAni)
    }


    initLogo()
    {
    	// console.log(appStore.getState()["animateLogo"])
    	appStore.dispatch(
			animateLogo(true)
		)
    }


	render()
	{
		const percent = Math.floor(this.props.event.progress * 100) + "%"

		if( Math.floor(this.props.event.progress * 100 ) === 100) setTimeout(this.initLogo, 2000)
		
		return (
			<div className={`preloader-container ${(this.props.event.progress === 1) ? "fadeOut" : "" }`}>
				<div className="preloader-content">
					<div ref="preloaderThreeContainer"></div>
					<div className="percent"><p>{percent} Loaded</p></div>
				</div>
			</div>
		)
	}
}



export default Preloader