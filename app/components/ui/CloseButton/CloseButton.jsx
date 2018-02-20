import React from 'react'
import { Link } from 'react-router-dom'



const CloseButton = ({buttonText, buttonPath}) => {
	return (
		<Link to={buttonPath}>
			<div className="close-button">
				<div className="button-background">
					<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 108.29 124.5">
						<path d="M65.16,3.65,118.07,34.2V95.3L65.16,125.85,12.25,95.3V34.2L65.16,3.65m0-1.15L11.25,33.63V95.88L65.16,127l53.91-31.12V33.63L65.16,2.5Z" transform="translate(-11.01 -2.5)"/>
						<path d="M65.16,5.11,117.56,95H12.75L65.16,5.11m0-2L11,96H119.3L65.16,3.12Z" transform="translate(-11.01 -2.5)"/>
						<path d="M90.32,50.22,65.16,93.8,40,50.22H90.32m1.73-1H38.26L65.16,95.8,92,49.22Z" transform="translate(-11.01 -2.5)"/>
						<line className="cls-1" x1="0.61" y1="31.13" x2="28" y2="47.31"/>
						<line className="cls-1" x1="107.68" y1="31.13" x2="80.29" y2="47.31"/>
						<line className="cls-1" x1="54.15" y1="124.5" x2="54.15" y2="92.13"/>
					</svg>
				</div>
				<div className="button-text">{buttonText}</div>
				{/*<div className="animated-button-bg-under"/>
				<div className="animated-button-bg"/>
				<div className="animated-button-text">{buttonText}</div>*/}
			</div>
		</Link>
	)
}



export default CloseButton
