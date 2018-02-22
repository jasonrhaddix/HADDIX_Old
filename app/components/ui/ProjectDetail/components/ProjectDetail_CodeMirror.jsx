import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/mode/javascript/javascript');


const ProjectDetail_CodeMirror = props => {

	let projectsMap = props.technologies.map(function( data, i )
	{
        return  <li key={data}>{data}</li>
    }, this)


	return (
		<div className="detail-code">
			<div className="detail-code-container">
				
				<div className="detail-code-row">
					<div className="detail-code-desc">
						<ul>
							{projectsMap}
						</ul>
					</div>

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









