import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

import CircleGraph from '../../CircleGraph/CircleGraph.jsx'

require('codemirror/mode/javascript/javascript');


const ProjectDetail_CodeMirror = props => {

	let projectsMap = props.technologies.map(function( data, i )
	{
        return  <li key={data}>{data}</li>
    }, this)


	let geoStyles = {
		backgroundImage: 'url(' + require('../../../../assets/images/app/geo.svg') + ')'
	}

	return (
		<div className="detail-code" style={geoStyles}>
			<div className="geom-pattern"/>
				{/*<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 108.29 124.5">
					<path d="M65.16,3.65,118.07,34.2V95.3L65.16,125.85,12.25,95.3V34.2L65.16,3.65m0-1.15L11.25,33.63V95.88L65.16,127l53.91-31.12V33.63L65.16,2.5Z" transform="translate(-11.01 -2.5)"/>
					<path d="M65.16,5.11,117.56,95H12.75L65.16,5.11m0-2L11,96H119.3L65.16,3.12Z" transform="translate(-11.01 -2.5)"/>
					<path d="M90.32,50.22,65.16,93.8,40,50.22H90.32m1.73-1H38.26L65.16,95.8,92,49.22Z" transform="translate(-11.01 -2.5)"/>
					<line className="cls-1" x1="0.61" y1="31.13" x2="28" y2="47.31"/>
					<line className="cls-1" x1="107.68" y1="31.13" x2="80.29" y2="47.31"/>
					<line className="cls-1" x1="54.15" y1="124.5" x2="54.15" y2="92.13"/>
				</svg>*/}

			<div className="detail-code-container">
				<div className="detail-technologies-row">
					<div className="detail-technologies-list">
						{/*<ul>*/}
							<div className="tech-item"><CircleGraph percent={78.2} language="Javascript" /></div>
							<div className="tech-item"><CircleGraph percent={18.7} language="CSS 3" /></div>
							<div className="tech-item"><CircleGraph percent={3.1} language="HTML 5" /></div>
							{/*{projectsMap}*/}
						{/*</ul>*/}
					</div>
				</div>
				
				<div className="detail-code-row">
					<div className="detail-codemirror">
						<CodeMirror
							className=""
							value={props.snippet}
							options={{
								mode: 'javascript',
								theme: 'default',
								lineNumbers: true,
								readOnly: true
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}


export default ProjectDetail_CodeMirror









