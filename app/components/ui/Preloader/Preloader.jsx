import React from 'react'
import PreloaderAni from './js/preloader-threejs.js'


class Preloader extends React.Component {

	constructor(props)
	{
		super(props)
	}


	componentDidMount() {
		this.refs.preloaderThreeContainer.appendChild(PreloaderAni)
    }


	render()
	{
		const percent = Math.floor(this.props.event.progress * 100) + "%"
		
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