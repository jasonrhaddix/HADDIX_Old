import React from 'react'



const HamburgerMenu = ({ onClickFun, navState }) => {

	return (
		<div onClick={onClickFun} className={`hamburger-container ${navState}`}>
			<div className="hamburger">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="cross">
				<span></span>
				<span></span>
			</div>
		</div>
	)
}



export default HamburgerMenu
